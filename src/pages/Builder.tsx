import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ResumePreview } from "@/components/ResumePreview";
import { ResumeData } from "@/types/resume";

const Builder = () => {
  const navigate = useNavigate();
  const [template, setTemplate] = useState<"modern" | "classic" | "minimal" | "professional" | "creative" | "executive">("modern");
  
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      summary: ""
    },
    experience: [
      {
        id: "1",
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        bulletPoints: [""]
      }
    ],
    education: [
      {
        id: "1",
        school: "",
        degree: "",
        field: "",
        graduationDate: ""
      }
    ],
    skills: []
  });

  const updatePersonalInfo = (field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const updateExperience = (id: string, field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const updateExperienceBullet = (expId: string, bulletIndex: number, value: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === expId
          ? {
              ...exp,
              bulletPoints: exp.bulletPoints.map((bullet, idx) =>
                idx === bulletIndex ? value : bullet
              )
            }
          : exp
      )
    }));
  };

  const addExperienceBullet = (expId: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === expId
          ? { ...exp, bulletPoints: [...exp.bulletPoints, ""] }
          : exp
      )
    }));
  };

  const removeExperienceBullet = (expId: string, bulletIndex: number) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === expId
          ? {
              ...exp,
              bulletPoints: exp.bulletPoints.filter((_, idx) => idx !== bulletIndex)
            }
          : exp
      )
    }));
  };

  const updateEducation = (id: string, field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        id: Date.now().toString(),
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        bulletPoints: [""]
      }]
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, {
        id: Date.now().toString(),
        school: "",
        degree: "",
        field: "",
        graduationDate: ""
      }]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50 print:hidden">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <Button onClick={handlePrint} className="gap-2 bg-gradient-to-r from-primary to-accent">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6 print:hidden">
            <div>
              <h2 className="text-2xl font-bold mb-2">Build Your Resume</h2>
              <p className="text-muted-foreground">Fill in your information to create a professional resume</p>
            </div>

            {/* Template Selection */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Choose Template</h3>
              <div className="grid grid-cols-3 gap-3">
                {(["modern", "classic", "minimal", "professional", "creative", "executive"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTemplate(t)}
                    className={`p-3 rounded-lg border-2 transition-all capitalize ${
                      template === t
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </Card>

            {/* Personal Information */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={resumeData.personalInfo.fullName}
                    onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={resumeData.personalInfo.email}
                      onChange={(e) => updatePersonalInfo("email", e.target.value)}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={resumeData.personalInfo.phone}
                      onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={resumeData.personalInfo.location}
                    onChange={(e) => updatePersonalInfo("location", e.target.value)}
                    placeholder="New York, NY"
                  />
                </div>
                <div>
                  <Label htmlFor="summary">Professional Summary</Label>
                  <Textarea
                    id="summary"
                    value={resumeData.personalInfo.summary}
                    onChange={(e) => updatePersonalInfo("summary", e.target.value)}
                    placeholder="Brief summary of your professional background..."
                    rows={4}
                  />
                </div>
              </div>
            </Card>

            {/* Experience */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Work Experience</h3>
                <Button onClick={addExperience} variant="outline" size="sm">
                  Add Experience
                </Button>
              </div>
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={exp.id} className="space-y-4 pb-6 border-b border-border last:border-0 last:pb-0">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Company</Label>
                        <Input
                          value={exp.company}
                          onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                          placeholder="Company Name"
                        />
                      </div>
                      <div>
                        <Label>Position</Label>
                        <Input
                          value={exp.position}
                          onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                          placeholder="Job Title"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Start Date</Label>
                        <Input
                          value={exp.startDate}
                          onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                          placeholder="Jan 2020"
                        />
                      </div>
                      <div>
                        <Label>End Date</Label>
                        <Input
                          value={exp.endDate}
                          onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                          placeholder="Present"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label>Key Achievements & Responsibilities</Label>
                        <Button
                          type="button"
                          onClick={() => addExperienceBullet(exp.id)}
                          variant="outline"
                          size="sm"
                        >
                          Add Bullet
                        </Button>
                      </div>
                      <div className="space-y-2">
                        {exp.bulletPoints.map((bullet, bulletIdx) => (
                          <div key={bulletIdx} className="flex gap-2">
                            <Input
                              value={bullet}
                              onChange={(e) => updateExperienceBullet(exp.id, bulletIdx, e.target.value)}
                              placeholder="Achievement or responsibility..."
                            />
                            {exp.bulletPoints.length > 1 && (
                              <Button
                                type="button"
                                onClick={() => removeExperienceBullet(exp.id, bulletIdx)}
                                variant="outline"
                                size="sm"
                              >
                                Remove
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Education */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Education</h3>
                <Button onClick={addEducation} variant="outline" size="sm">
                  Add Education
                </Button>
              </div>
              <div className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <div key={edu.id} className="space-y-4 pb-6 border-b border-border last:border-0 last:pb-0">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>School</Label>
                        <Input
                          value={edu.school}
                          onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                          placeholder="University Name"
                        />
                      </div>
                      <div>
                        <Label>Degree</Label>
                        <Input
                          value={edu.degree}
                          onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                          placeholder="Bachelor of Science"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Field of Study</Label>
                        <Input
                          value={edu.field}
                          onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                          placeholder="Computer Science"
                        />
                      </div>
                      <div>
                        <Label>Graduation Date</Label>
                        <Input
                          value={edu.graduationDate}
                          onChange={(e) => updateEducation(edu.id, "graduationDate", e.target.value)}
                          placeholder="May 2020"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Skills */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Skills</h3>
                <Button
                  onClick={() => setResumeData(prev => ({ ...prev, skills: [...prev.skills, ""] }))}
                  variant="outline"
                  size="sm"
                >
                  Add Skill
                </Button>
              </div>
              <div className="space-y-2">
                {resumeData.skills.map((skill, idx) => (
                  <div key={idx} className="flex gap-2">
                    <Input
                      value={skill}
                      onChange={(e) => {
                        setResumeData(prev => ({
                          ...prev,
                          skills: prev.skills.map((s, i) => i === idx ? e.target.value : s)
                        }));
                      }}
                      placeholder="e.g., JavaScript, React, Leadership"
                    />
                    {resumeData.skills.length > 1 && (
                      <Button
                        onClick={() => {
                          setResumeData(prev => ({
                            ...prev,
                            skills: prev.skills.filter((_, i) => i !== idx)
                          }));
                        }}
                        variant="outline"
                        size="sm"
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <ResumePreview data={resumeData} template={template} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;

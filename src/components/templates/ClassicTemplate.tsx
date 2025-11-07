import { ResumeData } from "@/types/resume";

interface TemplateProps {
  data: ResumeData;
}

export const ClassicTemplate = ({ data }: TemplateProps) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="h-full p-12 text-gray-900 bg-white">
      {/* Header */}
      <div className="mb-6 text-center border-b-2 border-gray-800 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <div className="text-sm text-gray-600 space-x-2">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>|</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>|</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">
            Professional Summary
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && experience[0].company && (
        <div className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">
            Work Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              exp.company && (
                <div key={exp.id}>
                  <div className="flex justify-between mb-1">
                    <h3 className="font-semibold text-gray-900">{exp.position || "Position"}</h3>
                    <span className="text-sm text-gray-600">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <p className="text-gray-700 italic mb-1">{exp.company}</p>
                  {exp.description && (
                    <p className="text-gray-700 text-sm">{exp.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && education[0].school && (
        <div className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">
            Education
          </h2>
          <div className="space-y-3">
            {education.map((edu) => (
              edu.school && (
                <div key={edu.id}>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{edu.degree || "Degree"}</h3>
                      <p className="text-gray-700">{edu.school}</p>
                      {edu.field && <p className="text-sm text-gray-600 italic">{edu.field}</p>}
                    </div>
                    {edu.graduationDate && (
                      <span className="text-sm text-gray-600">{edu.graduationDate}</span>
                    )}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">
            Skills
          </h2>
          <p className="text-gray-700 text-sm">{skills.join(" • ")}</p>
        </div>
      )}
    </div>
  );
};

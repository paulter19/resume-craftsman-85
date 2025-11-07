import { ResumeData } from "@/types/resume";

interface TemplateProps {
  data: ResumeData;
}

export const ModernTemplate = ({ data }: TemplateProps) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="h-full p-12 text-gray-900 bg-white">
      {/* Header */}
      <div className="mb-8 pb-6 border-b-4 border-blue-600">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>•</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>•</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-blue-600 mb-3">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && experience[0].company && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-blue-600 mb-3">Work Experience</h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              exp.company && (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-semibold text-gray-900">{exp.position || "Position"}</h3>
                      <p className="text-gray-700">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-600">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="text-gray-700 text-sm mt-2">{exp.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && education[0].school && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-blue-600 mb-3">Education</h2>
          <div className="space-y-3">
            {education.map((edu) => (
              edu.school && (
                <div key={edu.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">{edu.degree || "Degree"}</h3>
                      <p className="text-gray-700">{edu.school}</p>
                      {edu.field && <p className="text-sm text-gray-600">{edu.field}</p>}
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
          <h2 className="text-xl font-bold text-blue-600 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

import { ResumeData } from "@/types/resume";

interface TemplateProps {
  data: ResumeData;
}

export const ModernTemplate = ({ data }: TemplateProps) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="h-full p-8 text-gray-900 bg-white text-xs leading-tight">
      {/* Header */}
      <div className="mb-4 pb-3 border-b-2 border-blue-600">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <div className="flex flex-wrap gap-2 text-xs text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>•</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>•</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-3">
          <h2 className="text-sm font-bold text-blue-600 mb-1.5">Professional Summary</h2>
          <p className="text-gray-700 leading-snug">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && experience[0].company && (
        <div className="mb-3">
          <h2 className="text-sm font-bold text-blue-600 mb-1.5">Work Experience</h2>
          <div className="space-y-2.5">
            {experience.map((exp) => (
              exp.company && (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-0.5">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-xs">{exp.position || "Position"}</h3>
                      <p className="text-gray-700 text-xs">{exp.company}</p>
                    </div>
                    <span className="text-xs text-gray-600 whitespace-nowrap">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  {exp.bulletPoints && exp.bulletPoints.filter(b => b.trim()).length > 0 && (
                    <ul className="list-disc ml-4 mt-1 space-y-0.5">
                      {exp.bulletPoints.filter(b => b.trim()).map((bullet, idx) => (
                        <li key={idx} className="text-gray-700">{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && education[0].school && (
        <div className="mb-3">
          <h2 className="text-sm font-bold text-blue-600 mb-1.5">Education</h2>
          <div className="space-y-1.5">
            {education.map((edu) => (
              edu.school && (
                <div key={edu.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-xs">{edu.degree || "Degree"}</h3>
                      <p className="text-gray-700 text-xs">{edu.school}</p>
                      {edu.field && <p className="text-xs text-gray-600">{edu.field}</p>}
                    </div>
                    {edu.graduationDate && (
                      <span className="text-xs text-gray-600 whitespace-nowrap">{edu.graduationDate}</span>
                    )}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && skills.filter(s => s.trim()).length > 0 && (
        <div>
          <h2 className="text-sm font-bold text-blue-600 mb-1.5">Skills</h2>
          <div className="flex flex-wrap gap-1.5">
            {skills.filter(s => s.trim()).map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs"
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

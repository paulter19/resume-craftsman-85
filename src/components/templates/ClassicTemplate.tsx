import { ResumeData } from "@/types/resume";

interface TemplateProps {
  data: ResumeData;
}

export const ClassicTemplate = ({ data }: TemplateProps) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="h-full p-8 text-gray-900 bg-white text-xs leading-tight">
      {/* Header */}
      <div className="mb-3 text-center border-b border-gray-800 pb-2">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <div className="text-xs text-gray-600 space-x-2">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>|</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>|</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-3">
          <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-snug">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && experience[0].company && (
        <div className="mb-3">
          <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide">
            Work Experience
          </h2>
          <div className="space-y-2">
            {experience.map((exp) => (
              exp.company && (
                <div key={exp.id}>
                  <div className="flex justify-between mb-0.5">
                    <h3 className="font-semibold text-gray-900 text-xs">{exp.position || "Position"}</h3>
                    <span className="text-xs text-gray-600 whitespace-nowrap">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <p className="text-gray-700 italic mb-0.5 text-xs">{exp.company}</p>
                  {exp.bulletPoints && exp.bulletPoints.filter(b => b.trim()).length > 0 && (
                    <ul className="list-disc ml-4 mt-0.5 space-y-0.5">
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
          <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide">
            Education
          </h2>
          <div className="space-y-1.5">
            {education.map((edu) => (
              edu.school && (
                <div key={edu.id}>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-xs">{edu.degree || "Degree"}</h3>
                      <p className="text-gray-700 text-xs">{edu.school}</p>
                      {edu.field && <p className="text-xs text-gray-600 italic">{edu.field}</p>}
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
          <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide">
            Skills
          </h2>
          <p className="text-gray-700">{skills.filter(s => s.trim()).join(" • ")}</p>
        </div>
      )}
    </div>
  );
};

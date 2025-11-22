import { ResumeData } from "@/types/resume";
import { TemplateCustomization, defaultCustomization } from "@/types/templateCustomization";

interface TemplateProps {
  data: ResumeData;
  customization?: TemplateCustomization;
}

export const TechnicalTemplate = ({ data, customization = defaultCustomization }: TemplateProps) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="h-full p-8 text-gray-900 bg-white text-xs leading-tight font-mono">
      {/* Header */}
      <div className="mb-4 border-l-4 border-blue-600 pl-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-1 tracking-tight">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <div className="text-xs text-gray-600 flex flex-wrap gap-3">
          {personalInfo.email && <span className="bg-gray-100 px-2 py-0.5 rounded">{personalInfo.email}</span>}
          {personalInfo.phone && <span className="bg-gray-100 px-2 py-0.5 rounded">{personalInfo.phone}</span>}
          {personalInfo.location && <span className="bg-gray-100 px-2 py-0.5 rounded">{personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-4">
          <h2 className="text-sm font-bold text-blue-600 mb-1.5 uppercase tracking-wider border-b-2 border-blue-600 pb-0.5">
            // Profile
          </h2>
          <p className="text-gray-700 leading-snug bg-gray-50 p-2 rounded border-l-2 border-gray-300">{personalInfo.summary}</p>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && skills.filter(s => s.trim()).length > 0 && (
        <div className="mb-4">
          <h2 className="text-sm font-bold text-blue-600 mb-1.5 uppercase tracking-wider border-b-2 border-blue-600 pb-0.5">
            // Technical Skills
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {skills.filter(s => s.trim()).map((skill, index) => (
              <span key={index} className="bg-blue-50 border border-blue-200 text-blue-800 px-2 py-0.5 rounded text-xs font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && experience[0].company && (
        <div className="mb-4">
          <h2 className="text-sm font-bold text-blue-600 mb-1.5 uppercase tracking-wider border-b-2 border-blue-600 pb-0.5">
            // Work Experience
          </h2>
          <div className="space-y-2.5">
            {experience.map((exp) => (
              exp.company && (
                <div key={exp.id} className="bg-gray-50 p-2 rounded border-l-2 border-gray-300">
                  <div className="flex justify-between items-start mb-0.5">
                    <div>
                      <h3 className="font-bold text-gray-900 text-xs">{exp.position || "Position"}</h3>
                      <p className="text-gray-600 text-xs">{exp.company}</p>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap font-normal">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  {exp.bulletPoints && exp.bulletPoints.filter(b => b.trim()).length > 0 && (
                    <ul className="space-y-0.5 mt-1">
                      {exp.bulletPoints.filter(b => b.trim()).map((bullet, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start">
                          <span className="text-blue-600 mr-2">›</span>
                          <span>{bullet}</span>
                        </li>
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
        <div>
          <h2 className="text-sm font-bold text-blue-600 mb-1.5 uppercase tracking-wider border-b-2 border-blue-600 pb-0.5">
            // Education
          </h2>
          <div className="space-y-1.5">
            {education.map((edu) => (
              edu.school && (
                <div key={edu.id} className="flex justify-between bg-gray-50 p-2 rounded">
                  <div>
                    <h3 className="font-bold text-gray-900 text-xs">{edu.degree || "Degree"}</h3>
                    <p className="text-gray-700 text-xs">{edu.school}</p>
                    {edu.field && <p className="text-xs text-gray-600">{edu.field}</p>}
                  </div>
                  {edu.graduationDate && (
                    <span className="text-xs text-gray-500 whitespace-nowrap font-normal">{edu.graduationDate}</span>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

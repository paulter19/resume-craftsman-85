import { ResumeData } from "@/types/resume";
import { TemplateCustomization, defaultCustomization } from "@/types/templateCustomization";

interface TemplateProps {
  data: ResumeData;
  customization?: TemplateCustomization;
}

export const CompactTemplate = ({ data, customization = defaultCustomization }: TemplateProps) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="h-full p-6 text-gray-900 bg-white text-[10px] leading-tight">
      {/* Header - Very compact */}
      <div className="mb-2">
        <h1 className="text-xl font-bold text-gray-900 mb-0.5">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <div className="text-[9px] text-gray-600 flex flex-wrap gap-1.5">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
        </div>
      </div>

      <div className="border-t border-gray-300 mb-2"></div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-3 gap-3">
        {/* Left Column - Narrower */}
        <div className="col-span-1 space-y-2">
          {/* Skills */}
          {skills.length > 0 && skills.filter(s => s.trim()).length > 0 && (
            <div>
              <h2 className="text-[10px] font-bold text-gray-900 mb-1 uppercase bg-gray-200 px-1 py-0.5">
                Skills
              </h2>
              <ul className="space-y-0.5">
                {skills.filter(s => s.trim()).map((skill, index) => (
                  <li key={index} className="text-gray-700 text-[9px] flex items-start">
                    <span className="mr-1">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && education[0].school && (
            <div>
              <h2 className="text-[10px] font-bold text-gray-900 mb-1 uppercase bg-gray-200 px-1 py-0.5">
                Education
              </h2>
              <div className="space-y-1.5">
                {education.map((edu) => (
                  edu.school && (
                    <div key={edu.id}>
                      <h3 className="font-bold text-gray-900 text-[9px]">{edu.degree || "Degree"}</h3>
                      <p className="text-gray-700 text-[9px] leading-tight">{edu.school}</p>
                      {edu.field && <p className="text-[9px] text-gray-600">{edu.field}</p>}
                      {edu.graduationDate && (
                        <p className="text-[9px] text-gray-500">{edu.graduationDate}</p>
                      )}
                    </div>
                  )
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Wider */}
        <div className="col-span-2 space-y-2">
          {/* Summary */}
          {personalInfo.summary && (
            <div>
              <h2 className="text-[10px] font-bold text-gray-900 mb-1 uppercase bg-gray-200 px-1 py-0.5">
                Summary
              </h2>
              <p className="text-gray-700 leading-snug text-[9px]">{personalInfo.summary}</p>
            </div>
          )}

          {/* Experience */}
          {experience.length > 0 && experience[0].company && (
            <div>
              <h2 className="text-[10px] font-bold text-gray-900 mb-1 uppercase bg-gray-200 px-1 py-0.5">
                Experience
              </h2>
              <div className="space-y-1.5">
                {experience.map((exp) => (
                  exp.company && (
                    <div key={exp.id}>
                      <div className="flex justify-between items-start mb-0.5">
                        <div>
                          <h3 className="font-bold text-gray-900 text-[9px]">{exp.position || "Position"}</h3>
                          <p className="text-gray-600 text-[9px] italic">{exp.company}</p>
                        </div>
                        <span className="text-[9px] text-gray-500 whitespace-nowrap">
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                      {exp.bulletPoints && exp.bulletPoints.filter(b => b.trim()).length > 0 && (
                        <ul className="space-y-0.5 ml-2">
                          {exp.bulletPoints.filter(b => b.trim()).map((bullet, idx) => (
                            <li key={idx} className="text-gray-700 text-[9px] flex items-start">
                              <span className="mr-1">-</span>
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
        </div>
      </div>
    </div>
  );
};

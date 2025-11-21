import { ResumeData } from "@/types/resume";
import { TemplateCustomization, defaultCustomization } from "@/types/templateCustomization";

interface TemplateProps {
  data: ResumeData;
  customization?: TemplateCustomization;
}

export const ExecutiveTemplate = ({ data, customization = defaultCustomization }: TemplateProps) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="h-full p-8 text-gray-900 bg-white text-xs leading-tight">
      {/* Header */}
      <div className="text-center mb-3 border-b-4 border-double border-gray-800 pb-3">
        <h1 className="text-3xl font-bold text-gray-900 mb-1 tracking-wide uppercase">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <div className="flex justify-center gap-3 text-xs text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>•</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>•</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-3 text-center">
          <p className="text-gray-700 leading-snug italic text-sm max-w-3xl mx-auto">
            "{personalInfo.summary}"
          </p>
        </div>
      )}

      <div className="border-t border-gray-300 mb-3"></div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-3 gap-4">
        {/* Left Column - Experience */}
        <div className="col-span-2 space-y-3">
          {/* Experience */}
          {experience.length > 0 && experience[0].company && (
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-2 tracking-widest uppercase">
                Professional Experience
              </h2>
              <div className="space-y-2.5">
                {experience.map((exp) => (
                  exp.company && (
                    <div key={exp.id} className="border-l-2 border-gray-400 pl-3">
                      <div className="flex justify-between items-start mb-0.5">
                        <div>
                          <h3 className="font-bold text-gray-900 text-xs uppercase">{exp.position || "Position"}</h3>
                          <p className="text-gray-700 text-xs font-semibold">{exp.company}</p>
                        </div>
                        <span className="text-xs text-gray-600 whitespace-nowrap font-medium">
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                      {exp.bulletPoints && exp.bulletPoints.filter(b => b.trim()).length > 0 && (
                        <ul className="list-none ml-0 mt-1 space-y-0.5">
                          {exp.bulletPoints.filter(b => b.trim()).map((bullet, idx) => (
                            <li key={idx} className="text-gray-700 before:content-['▪'] before:mr-2 before:text-gray-400">
                              {bullet}
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

        {/* Right Column - Education & Skills */}
        <div className="space-y-3">
          {/* Education */}
          {education.length > 0 && education[0].school && (
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-2 tracking-widest uppercase">
                Education
              </h2>
              <div className="space-y-2 bg-gray-50 p-2 rounded">
                {education.map((edu) => (
                  edu.school && (
                    <div key={edu.id}>
                      <h3 className="font-bold text-gray-900 text-xs">{edu.degree || "Degree"}</h3>
                      <p className="text-gray-700 text-xs">{edu.school}</p>
                      {edu.field && <p className="text-xs text-gray-600">{edu.field}</p>}
                      {edu.graduationDate && (
                        <p className="text-xs text-gray-500 font-medium">{edu.graduationDate}</p>
                      )}
                    </div>
                  )
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {skills.length > 0 && skills.filter(s => s.trim()).length > 0 && (
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-2 tracking-widest uppercase">
                Expertise
              </h2>
              <div className="bg-gray-50 p-2 rounded">
                <ul className="space-y-1">
                  {skills.filter(s => s.trim()).map((skill, index) => (
                    <li key={index} className="text-gray-700 text-xs before:content-['✓'] before:mr-2 before:text-gray-500 before:font-bold">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
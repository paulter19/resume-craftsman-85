import { ResumeData } from "@/types/resume";
import { TemplateCustomization, defaultCustomization } from "@/types/templateCustomization";

interface TemplateProps {
  data: ResumeData;
  customization?: TemplateCustomization;
}

export const BoldTemplate = ({ data, customization = defaultCustomization }: TemplateProps) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="h-full text-gray-900 bg-white text-xs leading-tight">
      {/* Header - Bold colored background */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 mb-4">
        <h1 className="text-4xl font-black mb-2 tracking-tight uppercase">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <div className="text-xs font-semibold flex flex-wrap gap-4 opacity-95">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </div>

      <div className="px-8 pb-8">
        {/* Summary */}
        {personalInfo.summary && (
          <div className="mb-4">
            <div className="bg-orange-600 text-white px-3 py-1 inline-block mb-2 font-black uppercase text-sm tracking-wide">
              Profile
            </div>
            <p className="text-gray-700 leading-snug font-medium">{personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && experience[0].company && (
          <div className="mb-4">
            <div className="bg-orange-600 text-white px-3 py-1 inline-block mb-2 font-black uppercase text-sm tracking-wide">
              Experience
            </div>
            <div className="space-y-3">
              {experience.map((exp) => (
                exp.company && (
                  <div key={exp.id}>
                    <div className="flex justify-between items-start mb-0.5">
                      <div>
                        <h3 className="font-black text-gray-900 text-sm uppercase tracking-wide">{exp.position || "Position"}</h3>
                        <p className="text-orange-600 font-bold text-xs">{exp.company}</p>
                      </div>
                      <span className="text-xs text-gray-600 font-bold whitespace-nowrap bg-gray-100 px-2 py-1">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    {exp.bulletPoints && exp.bulletPoints.filter(b => b.trim()).length > 0 && (
                      <ul className="space-y-1 mt-1">
                        {exp.bulletPoints.filter(b => b.trim()).map((bullet, idx) => (
                          <li key={idx} className="text-gray-700 flex items-start font-medium">
                            <span className="text-orange-600 font-black mr-2 text-sm">▸</span>
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

        <div className="grid grid-cols-2 gap-6">
          {/* Education */}
          {education.length > 0 && education[0].school && (
            <div>
              <div className="bg-orange-600 text-white px-3 py-1 inline-block mb-2 font-black uppercase text-sm tracking-wide">
                Education
              </div>
              <div className="space-y-2">
                {education.map((edu) => (
                  edu.school && (
                    <div key={edu.id}>
                      <h3 className="font-black text-gray-900 text-xs uppercase">{edu.degree || "Degree"}</h3>
                      <p className="text-gray-700 font-bold text-xs">{edu.school}</p>
                      {edu.field && <p className="text-xs text-gray-600 font-medium">{edu.field}</p>}
                      {edu.graduationDate && (
                        <p className="text-xs text-gray-500 font-semibold">{edu.graduationDate}</p>
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
              <div className="bg-orange-600 text-white px-3 py-1 inline-block mb-2 font-black uppercase text-sm tracking-wide">
                Skills
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skills.filter(s => s.trim()).map((skill, index) => (
                  <span key={index} className="bg-gray-900 text-white px-2 py-1 text-xs font-bold uppercase tracking-wide">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

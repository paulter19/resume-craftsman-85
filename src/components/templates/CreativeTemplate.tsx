import { ResumeData } from "@/types/resume";
import { TemplateCustomization, defaultCustomization } from "@/types/templateCustomization";

interface TemplateProps {
  data: ResumeData;
  customization?: TemplateCustomization;
}

export const CreativeTemplate = ({ data, customization = defaultCustomization }: TemplateProps) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="h-full flex text-gray-900 bg-white text-xs leading-tight">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-gradient-to-b from-indigo-600 to-purple-700 text-white p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1 break-words">
            {personalInfo.fullName || "Your Name"}
          </h1>
        </div>

        {/* Contact */}
        <div className="mb-6">
          <h2 className="text-sm font-bold mb-2 border-b border-white/30 pb-1">CONTACT</h2>
          <div className="space-y-1.5 text-xs">
            {personalInfo.email && <div className="break-words">{personalInfo.email}</div>}
            {personalInfo.phone && <div>{personalInfo.phone}</div>}
            {personalInfo.location && <div>{personalInfo.location}</div>}
          </div>
        </div>

        {/* Skills */}
        {skills.length > 0 && skills.filter(s => s.trim()).length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-bold mb-2 border-b border-white/30 pb-1">SKILLS</h2>
            <div className="space-y-1">
              {skills.filter(s => s.trim()).map((skill, index) => (
                <div key={index} className="text-xs bg-white/20 px-2 py-1 rounded backdrop-blur">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && education[0].school && (
          <div>
            <h2 className="text-sm font-bold mb-2 border-b border-white/30 pb-1">EDUCATION</h2>
            <div className="space-y-2">
              {education.map((edu) => (
                edu.school && (
                  <div key={edu.id}>
                    <h3 className="font-bold text-xs">{edu.degree || "Degree"}</h3>
                    <p className="text-xs opacity-90">{edu.school}</p>
                    {edu.field && <p className="text-xs opacity-75 italic">{edu.field}</p>}
                    {edu.graduationDate && (
                      <p className="text-xs opacity-75">{edu.graduationDate}</p>
                    )}
                  </div>
                )
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6">
        {/* Summary */}
        {personalInfo.summary && (
          <div className="mb-4">
            <h2 className="text-sm font-bold text-indigo-600 mb-1.5 uppercase">About Me</h2>
            <p className="text-gray-700 leading-snug border-l-4 border-indigo-600 pl-3">{personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && experience[0].company && (
          <div>
            <h2 className="text-sm font-bold text-indigo-600 mb-2 uppercase">Experience</h2>
            <div className="space-y-3">
              {experience.map((exp) => (
                exp.company && (
                  <div key={exp.id} className="border-l-4 border-purple-400 pl-3">
                    <div className="flex justify-between items-start mb-0.5">
                      <div>
                        <h3 className="font-bold text-gray-900 text-xs">{exp.position || "Position"}</h3>
                        <p className="text-gray-700 text-xs italic">{exp.company}</p>
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
      </div>
    </div>
  );
};
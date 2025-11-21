import { ResumeData } from "@/types/resume";
import { TemplateCustomization, defaultCustomization } from "@/types/templateCustomization";

interface TemplateProps {
  data: ResumeData;
  customization?: TemplateCustomization;
}

export const MinimalTemplate = ({ data, customization = defaultCustomization }: TemplateProps) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="h-full p-8 text-gray-900 bg-white text-xs leading-tight">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-light text-gray-900 mb-1.5">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <div className="flex flex-wrap gap-2 text-xs text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-3">
          <p className="text-gray-700 leading-snug">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && experience[0].company && (
        <div className="mb-3">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
            Experience
          </h2>
          <div className="space-y-2.5">
            {experience.map((exp) => (
              exp.company && (
                <div key={exp.id}>
                  <h3 className="font-medium text-gray-900 text-xs mb-0.5">
                    {exp.position || "Position"}
                  </h3>
                  <div className="flex justify-between items-baseline mb-0.5">
                    <p className="text-gray-700 text-xs">{exp.company}</p>
                    <span className="text-xs text-gray-500 whitespace-nowrap">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  {exp.bulletPoints && exp.bulletPoints.filter(b => b.trim()).length > 0 && (
                    <ul className="list-disc ml-4 mt-0.5 space-y-0.5">
                      {exp.bulletPoints.filter(b => b.trim()).map((bullet, idx) => (
                        <li key={idx} className="text-gray-600">{bullet}</li>
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
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
            Education
          </h2>
          <div className="space-y-1.5">
            {education.map((edu) => (
              edu.school && (
                <div key={edu.id}>
                  <h3 className="font-medium text-gray-900 text-xs">{edu.degree || "Degree"}</h3>
                  <div className="flex justify-between items-baseline">
                    <p className="text-gray-700 text-xs">{edu.school}</p>
                    {edu.graduationDate && (
                      <span className="text-xs text-gray-500 whitespace-nowrap">{edu.graduationDate}</span>
                    )}
                  </div>
                  {edu.field && <p className="text-xs text-gray-600">{edu.field}</p>}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && skills.filter(s => s.trim()).length > 0 && (
        <div>
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
            Skills
          </h2>
          <p className="text-gray-700">{skills.filter(s => s.trim()).join(", ")}</p>
        </div>
      )}
    </div>
  );
};

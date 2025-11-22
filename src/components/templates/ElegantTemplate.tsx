import { ResumeData } from "@/types/resume";
import { TemplateCustomization, defaultCustomization } from "@/types/templateCustomization";

interface TemplateProps {
  data: ResumeData;
  customization?: TemplateCustomization;
}

export const ElegantTemplate = ({ data, customization = defaultCustomization }: TemplateProps) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="h-full p-10 text-gray-900 bg-white text-xs leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
      {/* Header - Centered elegant */}
      <div className="text-center mb-6 pb-4 border-b-2 border-gray-300">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
          {personalInfo.fullName || "Your Name"}
        </h1>
        <div className="text-xs text-gray-600 space-x-3" style={{ fontFamily: 'Georgia, serif' }}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>•</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>•</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-5 text-center">
          <p className="text-gray-700 leading-relaxed italic text-sm max-w-3xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
            "{personalInfo.summary}"
          </p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && experience[0].company && (
        <div className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 mb-3 text-center uppercase tracking-widest border-b border-gray-300 pb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
            Professional Experience
          </h2>
          <div className="space-y-3">
            {experience.map((exp) => (
              exp.company && (
                <div key={exp.id}>
                  <div className="text-center mb-1">
                    <h3 className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {exp.position || "Position"}
                    </h3>
                    <p className="text-gray-600 text-xs italic" style={{ fontFamily: 'Georgia, serif' }}>
                      {exp.company} • {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                  {exp.bulletPoints && exp.bulletPoints.filter(b => b.trim()).length > 0 && (
                    <ul className="space-y-1 max-w-2xl mx-auto">
                      {exp.bulletPoints.filter(b => b.trim()).map((bullet, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start" style={{ fontFamily: 'Georgia, serif' }}>
                          <span className="text-gray-400 mr-2">—</span>
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

      {/* Education & Skills Side by Side */}
      <div className="grid grid-cols-2 gap-6">
        {/* Education */}
        {education.length > 0 && education[0].school && (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2 text-center uppercase tracking-widest border-b border-gray-300 pb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
              Education
            </h2>
            <div className="space-y-2">
              {education.map((edu) => (
                edu.school && (
                  <div key={edu.id} className="text-center">
                    <h3 className="font-bold text-gray-900 text-xs" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {edu.degree || "Degree"}
                    </h3>
                    <p className="text-gray-700 text-xs" style={{ fontFamily: 'Georgia, serif' }}>{edu.school}</p>
                    {edu.field && <p className="text-xs text-gray-600 italic" style={{ fontFamily: 'Georgia, serif' }}>{edu.field}</p>}
                    {edu.graduationDate && (
                      <p className="text-xs text-gray-500" style={{ fontFamily: 'Georgia, serif' }}>{edu.graduationDate}</p>
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
            <h2 className="text-lg font-bold text-gray-900 mb-2 text-center uppercase tracking-widest border-b border-gray-300 pb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
              Skills
            </h2>
            <div className="text-center">
              <p className="text-gray-700 text-xs leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                {skills.filter(s => s.trim()).join(" • ")}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

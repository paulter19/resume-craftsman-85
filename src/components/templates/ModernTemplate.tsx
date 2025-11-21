import { ResumeData } from "@/types/resume";
import { TemplateCustomization, defaultCustomization } from "@/types/templateCustomization";

interface TemplateProps {
  data: ResumeData;
  customization?: TemplateCustomization;
}

export const ModernTemplate = ({ data, customization = defaultCustomization }: TemplateProps) => {
  const { personalInfo, experience, education, skills } = data;
  const { fontSize, fontFamily, colors, spacing, lineHeight } = customization;

  return (
    <div 
      className="h-full bg-white" 
      style={{ 
        padding: `${spacing}px`,
        fontFamily: fontFamily,
        fontSize: `${fontSize.body}px`,
        lineHeight: lineHeight,
        color: colors.text
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: `${spacing * 0.75}px`, paddingBottom: `${spacing * 0.5}px`, borderBottom: `2px solid ${colors.primary}` }}>
        <h1 style={{ fontSize: `${fontSize.heading}px`, fontWeight: 'bold', marginBottom: `${spacing * 0.25}px` }}>
          {personalInfo.fullName || "Your Name"}
        </h1>
        <div className="flex flex-wrap gap-2" style={{ fontSize: `${fontSize.body}px`, opacity: 0.7 }}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>•</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>•</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ marginBottom: `${spacing * 0.75}px` }}>
          <h2 style={{ fontSize: `${fontSize.subheading}px`, fontWeight: 'bold', color: colors.primary, marginBottom: `${spacing * 0.375}px` }}>Professional Summary</h2>
          <p>{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && experience[0].company && (
        <div style={{ marginBottom: `${spacing * 0.75}px` }}>
          <h2 style={{ fontSize: `${fontSize.subheading}px`, fontWeight: 'bold', color: colors.primary, marginBottom: `${spacing * 0.375}px` }}>Work Experience</h2>
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
        <div style={{ marginBottom: `${spacing * 0.75}px` }}>
          <h2 style={{ fontSize: `${fontSize.subheading}px`, fontWeight: 'bold', color: colors.primary, marginBottom: `${spacing * 0.375}px` }}>Education</h2>
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
          <h2 style={{ fontSize: `${fontSize.subheading}px`, fontWeight: 'bold', color: colors.primary, marginBottom: `${spacing * 0.375}px` }}>Skills</h2>
          <div className="flex flex-wrap gap-1.5">
            {skills.filter(s => s.trim()).map((skill, index) => (
              <span
                key={index}
                style={{ 
                  backgroundColor: `${colors.primary}20`,
                  color: colors.primary,
                  padding: '2px 8px',
                  borderRadius: '999px',
                  fontSize: `${fontSize.body}px`
                }}
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

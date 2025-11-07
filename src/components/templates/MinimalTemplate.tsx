import { ResumeData } from "@/types/resume";

interface TemplateProps {
  data: ResumeData;
}

export const MinimalTemplate = ({ data }: TemplateProps) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="h-full p-12 text-gray-900 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-light text-gray-900 mb-3">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && experience[0].company && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              exp.company && (
                <div key={exp.id}>
                  <h3 className="font-medium text-gray-900 text-lg mb-1">
                    {exp.position || "Position"}
                  </h3>
                  <div className="flex justify-between items-baseline mb-2">
                    <p className="text-gray-700">{exp.company}</p>
                    <span className="text-sm text-gray-500">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && education[0].school && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              edu.school && (
                <div key={edu.id}>
                  <h3 className="font-medium text-gray-900">{edu.degree || "Degree"}</h3>
                  <div className="flex justify-between items-baseline">
                    <p className="text-gray-700">{edu.school}</p>
                    {edu.graduationDate && (
                      <span className="text-sm text-gray-500">{edu.graduationDate}</span>
                    )}
                  </div>
                  {edu.field && <p className="text-sm text-gray-600">{edu.field}</p>}
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Skills
          </h2>
          <p className="text-gray-700">{skills.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

import { ResumeData } from "@/types/resume";

interface TemplateProps {
  data: ResumeData;
}

export const ProfessionalTemplate = ({ data }: TemplateProps) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="h-full p-8 text-gray-900 bg-white text-xs leading-tight">
      {/* Header with sidebar layout */}
      <div className="flex gap-6 mb-3">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            {personalInfo.fullName || "Your Name"}
          </h1>
          <p className="text-gray-600 text-sm italic mb-2">Professional Profile</p>
        </div>
        <div className="text-right text-xs text-gray-600">
          {personalInfo.email && <div>{personalInfo.email}</div>}
          {personalInfo.phone && <div>{personalInfo.phone}</div>}
          {personalInfo.location && <div>{personalInfo.location}</div>}
        </div>
      </div>

      <div className="border-t-2 border-gray-800 mb-3"></div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-3">
          <h2 className="text-sm font-bold text-gray-800 mb-1 uppercase">Executive Summary</h2>
          <p className="text-gray-700 leading-snug bg-gray-50 p-2 rounded">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && experience[0].company && (
        <div className="mb-3">
          <h2 className="text-sm font-bold text-gray-800 mb-1.5 uppercase border-b border-gray-300 pb-1">
            Professional Experience
          </h2>
          <div className="space-y-2.5">
            {experience.map((exp) => (
              exp.company && (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-0.5">
                    <div>
                      <h3 className="font-bold text-gray-900 text-xs">{exp.position || "Position"}</h3>
                      <p className="text-gray-700 text-xs font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-xs text-gray-600 whitespace-nowrap bg-gray-100 px-2 py-0.5 rounded">
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
        <div className="mb-3">
          <h2 className="text-sm font-bold text-gray-800 mb-1.5 uppercase border-b border-gray-300 pb-1">
            Education
          </h2>
          <div className="space-y-1.5">
            {education.map((edu) => (
              edu.school && (
                <div key={edu.id} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900 text-xs">{edu.degree || "Degree"}</h3>
                    <p className="text-gray-700 text-xs">{edu.school}</p>
                    {edu.field && <p className="text-xs text-gray-600 italic">{edu.field}</p>}
                  </div>
                  {edu.graduationDate && (
                    <span className="text-xs text-gray-600 whitespace-nowrap bg-gray-100 px-2 py-0.5 rounded">
                      {edu.graduationDate}
                    </span>
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
          <h2 className="text-sm font-bold text-gray-800 mb-1.5 uppercase border-b border-gray-300 pb-1">
            Core Competencies
          </h2>
          <div className="grid grid-cols-3 gap-1.5">
            {skills.filter(s => s.trim()).map((skill, index) => (
              <div key={index} className="bg-gray-100 px-2 py-1 text-center rounded text-xs font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
import { ResumeData } from "@/types/resume";
import { ModernTemplate } from "./templates/ModernTemplate";
import { ClassicTemplate } from "./templates/ClassicTemplate";
import { MinimalTemplate } from "./templates/MinimalTemplate";
import { ProfessionalTemplate } from "./templates/ProfessionalTemplate";
import { CreativeTemplate } from "./templates/CreativeTemplate";
import { ExecutiveTemplate } from "./templates/ExecutiveTemplate";
import { RefObject } from "react";

interface ResumePreviewProps {
  data: ResumeData;
  template: "modern" | "classic" | "minimal" | "professional" | "creative" | "executive";
  resumeRef?: RefObject<HTMLDivElement>;
}

export const ResumePreview = ({ data, template, resumeRef }: ResumePreviewProps) => {
  const templates = {
    modern: ModernTemplate,
    classic: ClassicTemplate,
    minimal: MinimalTemplate,
    professional: ProfessionalTemplate,
    creative: CreativeTemplate,
    executive: ExecutiveTemplate
  };

  const Template = templates[template];

  return (
    <div className="bg-card rounded-lg border border-border shadow-lg overflow-hidden">
      <div className="bg-muted px-4 py-3 border-b border-border print:hidden">
        <p className="text-sm text-muted-foreground">Preview</p>
      </div>
      <div className="p-8 print:p-0">
        <div 
          ref={resumeRef}
          className="bg-white text-gray-900 aspect-[8.5/11] overflow-auto shadow-inner print:shadow-none print:aspect-auto"
        >
          <Template data={data} />
        </div>
      </div>
    </div>
  );
};

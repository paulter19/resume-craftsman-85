import { ResumeData } from "@/types/resume";
import { TemplateCustomization } from "@/types/templateCustomization";
import { ModernTemplate } from "./templates/ModernTemplate";
import { ClassicTemplate } from "./templates/ClassicTemplate";
import { MinimalTemplate } from "./templates/MinimalTemplate";
import { ProfessionalTemplate } from "./templates/ProfessionalTemplate";
import { CreativeTemplate } from "./templates/CreativeTemplate";
import { ExecutiveTemplate } from "./templates/ExecutiveTemplate";
import { TechnicalTemplate } from "./templates/TechnicalTemplate";
import { CompactTemplate } from "./templates/CompactTemplate";
import { BoldTemplate } from "./templates/BoldTemplate";
import { ElegantTemplate } from "./templates/ElegantTemplate";
import { RefObject } from "react";

interface ResumePreviewProps {
  data: ResumeData;
  template: "modern" | "classic" | "minimal" | "professional" | "creative" | "executive" | "technical" | "compact" | "bold" | "elegant";
  resumeRef?: RefObject<HTMLDivElement>;
  customization?: TemplateCustomization;
}

export const ResumePreview = ({ data, template, resumeRef, customization }: ResumePreviewProps) => {
  const templates = {
    modern: ModernTemplate,
    classic: ClassicTemplate,
    minimal: MinimalTemplate,
    professional: ProfessionalTemplate,
    creative: CreativeTemplate,
    executive: ExecutiveTemplate,
    technical: TechnicalTemplate,
    compact: CompactTemplate,
    bold: BoldTemplate,
    elegant: ElegantTemplate
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
          <Template data={data} customization={customization} />
        </div>
      </div>
    </div>
  );
};

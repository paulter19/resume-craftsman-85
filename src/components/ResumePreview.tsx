import { ResumeData } from "@/types/resume";
import { ModernTemplate } from "./templates/ModernTemplate";
import { ClassicTemplate } from "./templates/ClassicTemplate";
import { MinimalTemplate } from "./templates/MinimalTemplate";

interface ResumePreviewProps {
  data: ResumeData;
  template: "modern" | "classic" | "minimal";
}

export const ResumePreview = ({ data, template }: ResumePreviewProps) => {
  const templates = {
    modern: ModernTemplate,
    classic: ClassicTemplate,
    minimal: MinimalTemplate
  };

  const Template = templates[template];

  return (
    <div className="bg-card rounded-lg border border-border shadow-lg overflow-hidden">
      <div className="bg-muted px-4 py-3 border-b border-border print:hidden">
        <p className="text-sm text-muted-foreground">Preview</p>
      </div>
      <div className="p-8 print:p-0">
        <div className="bg-white text-gray-900 aspect-[8.5/11] overflow-auto shadow-inner print:shadow-none print:aspect-auto">
          <Template data={data} />
        </div>
      </div>
    </div>
  );
};

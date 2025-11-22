import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { exampleResumeData } from "@/data/exampleResume";
import { ModernTemplate } from "@/components/templates/ModernTemplate";
import { ClassicTemplate } from "@/components/templates/ClassicTemplate";
import { MinimalTemplate } from "@/components/templates/MinimalTemplate";
import { ProfessionalTemplate } from "@/components/templates/ProfessionalTemplate";
import { CreativeTemplate } from "@/components/templates/CreativeTemplate";
import { ExecutiveTemplate } from "@/components/templates/ExecutiveTemplate";
import { TechnicalTemplate } from "@/components/templates/TechnicalTemplate";
import { CompactTemplate } from "@/components/templates/CompactTemplate";
import { BoldTemplate } from "@/components/templates/BoldTemplate";
import { ElegantTemplate } from "@/components/templates/ElegantTemplate";

const Templates = () => {
  const navigate = useNavigate();

  const templates = [
    {
      id: "modern",
      name: "Modern",
      description: "Clean and contemporary design with bold accents",
      component: ModernTemplate,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "classic",
      name: "Classic",
      description: "Traditional layout perfect for conservative industries",
      component: ClassicTemplate,
      color: "from-gray-700 to-gray-900"
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "Elegant simplicity with maximum impact",
      component: MinimalTemplate,
      color: "from-slate-600 to-slate-800"
    },
    {
      id: "professional",
      name: "Professional",
      description: "Polished format ideal for experienced professionals",
      component: ProfessionalTemplate,
      color: "from-gray-600 to-gray-800"
    },
    {
      id: "creative",
      name: "Creative",
      description: "Stand out with a vibrant two-column layout",
      component: CreativeTemplate,
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: "executive",
      name: "Executive",
      description: "Sophisticated design for senior-level positions",
      component: ExecutiveTemplate,
      color: "from-slate-700 to-gray-900"
    },
    {
      id: "technical",
      name: "Technical",
      description: "Developer-focused with monospace font and code aesthetics",
      component: TechnicalTemplate,
      color: "from-blue-600 to-blue-800"
    },
    {
      id: "compact",
      name: "Compact",
      description: "Maximize content with efficient two-column layout",
      component: CompactTemplate,
      color: "from-gray-500 to-gray-700"
    },
    {
      id: "bold",
      name: "Bold",
      description: "Make a statement with strong colors and typography",
      component: BoldTemplate,
      color: "from-orange-600 to-red-600"
    },
    {
      id: "elegant",
      name: "Elegant",
      description: "Sophisticated serif design for refined professionals",
      component: ElegantTemplate,
      color: "from-amber-700 to-amber-900"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-1 md:gap-2 text-sm md:text-base"
            size="sm"
          >
            <ArrowLeft className="h-3 w-3 md:h-4 md:w-4" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Back</span>
          </Button>
          <Button 
            onClick={() => navigate("/builder")} 
            className="gap-1 md:gap-2 bg-gradient-to-r from-primary to-accent text-sm md:text-base"
            size="sm"
          >
            <span className="hidden sm:inline">Start Building</span>
            <span className="sm:hidden">Build</span>
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              Choose Your Perfect{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Template
              </span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Select a professionally designed template that matches your style and industry. 
              Each template is optimized to fit perfectly on one page.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8">
            {templates.map((template) => {
              const TemplateComponent = template.component;
              return (
                <div
                  key={template.id}
                  className="bg-card rounded-xl border border-border shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="grid lg:grid-cols-2 gap-4 md:gap-6 p-4 md:p-6">
                    {/* Template Info */}
                    <div className="flex flex-col justify-center space-y-3 md:space-y-4">
                      <div>
                        <div className={`inline-block bg-gradient-to-r ${template.color} text-white px-3 py-0.5 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-semibold mb-2 md:mb-3`}>
                          {template.name}
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold mb-1.5 md:mb-2">{template.name} Template</h2>
                        <p className="text-muted-foreground text-sm md:text-base lg:text-lg">{template.description}</p>
                      </div>
                      <Button
                        onClick={() => navigate(`/builder?template=${template.id}`)}
                        className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent"
                      >
                        Use This Template
                      </Button>
                    </div>

                    {/* Template Preview */}
                    <div className="bg-gray-100 rounded-lg p-2 md:p-4 shadow-inner max-w-sm mx-auto lg:max-w-none lg:mx-0">
                      <div className="bg-white aspect-[8.5/11] shadow-lg overflow-hidden">
                        <div className="scale-[0.35] sm:scale-[0.5] md:scale-[0.65] lg:scale-[0.85] origin-top-left w-[285.71%] sm:w-[200%] md:w-[153.85%] lg:w-[117.65%] h-[285.71%] sm:h-[200%] md:h-[153.85%] lg:h-[117.65%]">
                          <TemplateComponent data={exampleResumeData} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
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
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <Button 
            onClick={() => navigate("/builder")} 
            className="gap-2 bg-gradient-to-r from-primary to-accent"
          >
            Start Building
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your Perfect{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Template
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select a professionally designed template that matches your style and industry. 
              Each template is optimized to fit perfectly on one page.
            </p>
          </div>

          <div className="grid gap-8">
            {templates.map((template) => {
              const TemplateComponent = template.component;
              return (
                <div
                  key={template.id}
                  className="bg-card rounded-xl border border-border shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="grid lg:grid-cols-2 gap-6 p-6">
                    {/* Template Info */}
                    <div className="flex flex-col justify-center space-y-4">
                      <div>
                        <div className={`inline-block bg-gradient-to-r ${template.color} text-white px-4 py-1 rounded-full text-sm font-semibold mb-3`}>
                          {template.name}
                        </div>
                        <h2 className="text-2xl font-bold mb-2">{template.name} Template</h2>
                        <p className="text-muted-foreground text-lg">{template.description}</p>
                      </div>
                      <Button
                        onClick={() => navigate("/builder")}
                        className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent"
                      >
                        Use This Template
                      </Button>
                    </div>

                    {/* Template Preview */}
                    <div className="bg-gray-100 rounded-lg p-4 shadow-inner">
                      <div className="bg-white aspect-[8.5/11] shadow-lg overflow-hidden">
                        <div className="scale-[0.85] origin-top-left w-[117.65%] h-[117.65%]">
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
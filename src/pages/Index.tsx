import { Button } from "@/components/ui/button";
import { FileText, Sparkles, Download, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ResumeForge
            </span>
          </div>
          <Button onClick={() => navigate("/builder")} className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
            Create Resume
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="h-4 w-4" />
            Professional Resume Builder
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Create Your Perfect{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Resume
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Build professional resumes in minutes with our easy-to-use templates. 
            Stand out from the crowd and land your dream job.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button 
              size="lg"
              onClick={() => navigate("/builder")}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8"
            >
              <Zap className="mr-2 h-5 w-5" />
              Start Building
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate("/templates")}
              className="text-lg px-8"
            >
              View Templates
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20 border-t border-border">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all">
            <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Multiple Templates</h3>
            <p className="text-muted-foreground">
              Choose from professionally designed templates that make you stand out.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all">
            <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Customization</h3>
            <p className="text-muted-foreground">
              Simply fill in your information and watch your resume come to life.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all">
            <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Download className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Download & Print</h3>
            <p className="text-muted-foreground">
              Export your resume as PDF or print it directly from your browser.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-6 py-8 text-center text-muted-foreground">
          <p>© 2024 ResumeForge. Build your future with confidence.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

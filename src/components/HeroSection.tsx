import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ExternalLink } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="hero-gradient bg-clip-text text-transparent">
            Muditha Madushanka 
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-text-light mb-6 font-medium">
            Software Engineer Student & Wedding Photographer
          </h2>
          
          <p className="text-lg md:text-xl text-text-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about capturing life's precious moments and creating innovative technology solutions.
            Blending technical expertise with creative vision to tell beautiful stories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="hero-gradient hover:opacity-90 transition-smooth px-8 py-6 text-lg"
            >
              View My Work
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            
            <a 
  href="https://drive.google.com/file/d/1Eti3gSUTDdRjVJbPyi8nBRnYkQKhUyHz/view?usp=sharing" 
  download="Muditha_Madushanka_CV.png"
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    size="lg"
    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
  >
    Download CV
    <Download className="ml-2 h-5 w-5" />
  </Button>
</a>

          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
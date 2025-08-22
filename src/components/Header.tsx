import { BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Web Optimizer</h1>
              <p className="text-xs text-muted-foreground">Page 360</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#demo" className="text-foreground hover:text-primary transition-colors">Demo</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#login" className="text-foreground hover:text-primary transition-colors">Login</a>
          </div>
          
          <Button variant="hero" size="default">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
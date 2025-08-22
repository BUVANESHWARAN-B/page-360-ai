import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Start Your Free <br />
            <span className="text-primary-light">Page 360 Analysis</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get instant insights into your website's performance, SEO, and user 
            experience. No credit card required.
          </p>
          
          {/* URL Input Form */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-glass backdrop-blur-md rounded-xl p-6 border border-glass shadow-large">
              <div className="flex flex-col md:flex-row gap-4">
                <Input 
                  placeholder="Enter your website URL (e.g., https://example.com)"
                  className="flex-1 h-12 bg-white border-white/20 text-foreground placeholder:text-muted-foreground"
                />
                <Button variant="hero" size="lg" className="h-12 px-8">
                  Analyze Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              
              {/* Features checklist */}
              <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Free analysis
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Instant results
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  No registration required
                </div>
              </div>
            </div>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/80">Pages Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white/80">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
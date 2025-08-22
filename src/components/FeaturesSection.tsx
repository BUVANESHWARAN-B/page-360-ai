import { 
  BarChart3, 
  Shield, 
  Zap, 
  TrendingUp, 
  Heart, 
  Search,
  Globe
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: BarChart3,
    title: "Overview",
    description: "Comprehensive dashboard with all KPIs consolidated and key performance metrics at a glance.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Compliance",
    description: "Cookie policies, accessibility (WCAG), and security compliance checks to ensure your site meets standards.",
    color: "text-success"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Detailed performance metrics for both mobile and desktop with optimization recommendations.",
    color: "text-warning"
  },
  {
    icon: TrendingUp,
    title: "Analytics",
    description: "Page analytics with visitor insights, device breakdowns, and traffic patterns analysis.",
    color: "text-primary-light"
  },
  {
    icon: Heart,
    title: "Sentiment",
    description: "AI-powered sentiment analysis of your page content with suggestions for improvement.",
    color: "text-destructive"
  },
  {
    icon: Search,
    title: "SEO",
    description: "Complete SEO audit with content optimization suggestions for better search engine ranking.",
    color: "text-primary"
  },
  {
    icon: Globe,
    title: "Regional",
    description: "Location-based content analysis with regional recommendations for global optimization.",
    color: "text-success"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Complete Page Analysis Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seven powerful analysis modules working together to give you the complete picture of 
            your website's performance and optimization opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-medium transition-all duration-300 bg-gradient-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
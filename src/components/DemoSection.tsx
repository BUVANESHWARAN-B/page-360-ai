import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Shield, 
  Zap, 
  TrendingUp, 
  Heart, 
  Search,
  Globe,
  CheckCircle,
  AlertTriangle,
  XCircle
} from "lucide-react";

const tabs = [
  { id: "overview", label: "Overview", icon: BarChart3 },
  { id: "compliance", label: "Compliance", icon: Shield },
  { id: "performance", label: "Performance", icon: Zap },
  { id: "analytics", label: "Analytics", icon: TrendingUp },
  { id: "sentiment", label: "Sentiment", icon: Heart },
  { id: "seo", label: "SEO", icon: Search },
  { id: "regional", label: "Regional", icon: Globe }
];

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState("regional");

  const renderTabContent = () => {
    switch (activeTab) {
      case "regional":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2 flex items-center gap-2">
                <Globe className="w-6 h-6 text-primary" />
                Regional Analysis
              </h3>
              <p className="text-muted-foreground">
                Location-based content analysis and regional recommendations
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Top Regions</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-foreground">North America</span>
                    <span className="text-primary font-semibold">45%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-foreground">Europe</span>
                    <span className="text-primary font-semibold">32%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-foreground">Asia Pacific</span>
                    <span className="text-primary font-semibold">23%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Recommendations</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm text-foreground">Add localized content for European markets</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-warning/10 rounded-lg border border-warning/20">
                    <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                    <span className="text-sm text-foreground">Optimize loading times for Asian users</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <Globe className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-sm text-foreground">Consider regional payment methods</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case "compliance":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Compliance Analysis
              </h3>
              <p className="text-muted-foreground">
                Cookie policies, accessibility, and security compliance
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg border border-success/20">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-medium text-foreground">Cookie Policy</span>
                </div>
                <Badge variant="outline" className="bg-success text-success-foreground border-success">
                  Compliant
                </Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-warning/10 rounded-lg border border-warning/20">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  <span className="font-medium text-foreground">Accessibility (WCAG)</span>
                </div>
                <Badge variant="outline" className="bg-warning text-warning-foreground border-warning">
                  3 Issues
                </Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg border border-success/20">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-medium text-foreground">Security Headers</span>
                </div>
                <Badge variant="outline" className="bg-success text-success-foreground border-success">
                  Secure
                </Badge>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                {tabs.find(tab => tab.id === activeTab)?.label} Analysis
              </h3>
              <p className="text-muted-foreground">
                Detailed insights and recommendations for your page optimization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">94</div>
                  <div className="text-muted-foreground">Performance Score</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-success mb-2">87</div>
                  <div className="text-muted-foreground">SEO Score</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-warning mb-2">76</div>
                  <div className="text-muted-foreground">Accessibility</div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="py-20 bg-muted/30" id="demo">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            See Web Optimizer in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our analysis modules and see how we provide comprehensive insights into your website's performance.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Card className="border-border shadow-large">
            {/* Tab Navigation */}
            <div className="border-b border-border p-4">
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab(tab.id)}
                    className="flex items-center gap-2"
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Tab Content */}
            <CardContent className="p-8">
              {renderTabContent()}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
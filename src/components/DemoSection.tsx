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
      case "overview":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                Overview Dashboard
              </h3>
              <p className="text-muted-foreground">
                Comprehensive dashboard with all KPIs consolidated and key performance metrics
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary mb-1">94</div>
                  <div className="text-sm text-muted-foreground">Overall Score</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-success mb-1">2.3s</div>
                  <div className="text-sm text-muted-foreground">Load Time</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-warning mb-1">12.4K</div>
                  <div className="text-sm text-muted-foreground">Monthly Visits</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary mb-1">87%</div>
                  <div className="text-sm text-muted-foreground">SEO Health</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Performance Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">First Contentful Paint</span>
                    <span className="text-success font-medium">1.2s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Largest Contentful Paint</span>
                    <span className="text-warning font-medium">2.8s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Cumulative Layout Shift</span>
                    <span className="text-success font-medium">0.05</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Quick Issues</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-foreground">SSL Certificate Valid</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-warning" />
                    <span className="text-foreground">3 Accessibility Issues</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-foreground">Mobile Responsive</span>
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Security Score</h4>
                <div className="text-center p-6 bg-success/10 rounded-lg">
                  <div className="text-4xl font-bold text-success mb-2">92/100</div>
                  <div className="text-muted-foreground">Security Rating</div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Accessibility Issues</h4>
                <div className="space-y-2">
                  <div className="text-sm text-warning">• Missing alt text on 2 images</div>
                  <div className="text-sm text-warning">• Low contrast ratio detected</div>
                  <div className="text-sm text-warning">• Missing ARIA labels on forms</div>
                </div>
              </div>
            </div>
          </div>
        );

      case "performance":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Performance Analysis
              </h3>
              <p className="text-muted-foreground">
                Detailed performance metrics for mobile and desktop with optimization recommendations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  📱 Mobile Performance
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Performance Score</span>
                    <span className="text-xl font-bold text-warning">78</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">First Contentful Paint</span>
                    <span className="text-warning font-medium">2.1s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Speed Index</span>
                    <span className="text-warning font-medium">3.4s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Blocking Time</span>
                    <span className="text-destructive font-medium">890ms</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  💻 Desktop Performance
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Performance Score</span>
                    <span className="text-xl font-bold text-success">94</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">First Contentful Paint</span>
                    <span className="text-success font-medium">0.9s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Speed Index</span>
                    <span className="text-success font-medium">1.2s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Blocking Time</span>
                    <span className="text-success font-medium">120ms</span>
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Optimization Opportunities</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-warning/10 rounded-lg border border-warning/20">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Optimize Images</div>
                    <div className="text-sm text-muted-foreground">Potential savings: 1.2s</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-warning/10 rounded-lg border border-warning/20">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Eliminate Render-blocking Resources</div>
                    <div className="text-sm text-muted-foreground">Potential savings: 0.8s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Analytics Dashboard
              </h3>
              <p className="text-muted-foreground">
                Page analytics with visitor insights, device breakdowns, and traffic patterns
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary mb-1">12.4K</div>
                  <div className="text-sm text-muted-foreground">Monthly Visits</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-success mb-1">3.2min</div>
                  <div className="text-sm text-muted-foreground">Avg. Session</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-warning mb-1">68%</div>
                  <div className="text-sm text-muted-foreground">Bounce Rate</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary mb-1">4.2</div>
                  <div className="text-sm text-muted-foreground">Pages/Session</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Device Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-foreground flex items-center gap-2">
                      📱 Mobile
                    </span>
                    <span className="text-primary font-semibold">58%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-foreground flex items-center gap-2">
                      💻 Desktop
                    </span>
                    <span className="text-primary font-semibold">35%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-foreground flex items-center gap-2">
                      📟 Tablet
                    </span>
                    <span className="text-primary font-semibold">7%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Top Traffic Sources</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Organic Search</span>
                    <span className="text-success font-medium">42%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Direct</span>
                    <span className="text-primary font-medium">28%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Social Media</span>
                    <span className="text-warning font-medium">18%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Referral</span>
                    <span className="text-muted-foreground font-medium">12%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "sentiment":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2 flex items-center gap-2">
                <Heart className="w-6 h-6 text-primary" />
                Sentiment Analysis
              </h3>
              <p className="text-muted-foreground">
                AI-powered sentiment analysis of your page content with improvement suggestions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl mb-2">😊</div>
                  <div className="text-2xl font-bold text-success mb-1">72%</div>
                  <div className="text-sm text-muted-foreground">Positive</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl mb-2">😐</div>
                  <div className="text-2xl font-bold text-warning mb-1">18%</div>
                  <div className="text-sm text-muted-foreground">Neutral</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl mb-2">😞</div>
                  <div className="text-2xl font-bold text-destructive mb-1">10%</div>
                  <div className="text-sm text-muted-foreground">Negative</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Sentiments Detected</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
                    <div className="text-lg">💪</div>
                    <div>
                      <div className="font-medium text-foreground">Confidence</div>
                      <div className="text-sm text-muted-foreground">Strong, professional language</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
                    <div className="text-lg">🎯</div>
                    <div>
                      <div className="font-medium text-foreground">Clarity</div>
                      <div className="text-sm text-muted-foreground">Clear value proposition</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-warning/10 rounded-lg border border-warning/20">
                    <div className="text-lg">⚡</div>
                    <div>
                      <div className="font-medium text-foreground">Urgency</div>
                      <div className="text-sm text-muted-foreground">Could be more compelling</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Improvement Suggestions</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-sm text-foreground">Add more emotional triggers in headlines</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-sm text-foreground">Include customer testimonials for trust</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-sm text-foreground">Use more action-oriented language</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "seo":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2 flex items-center gap-2">
                <Search className="w-6 h-6 text-primary" />
                SEO Analysis
              </h3>
              <p className="text-muted-foreground">
                Complete SEO audit with content optimization suggestions for better search ranking
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-success mb-1">87</div>
                  <div className="text-sm text-muted-foreground">SEO Score</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-warning mb-1">23</div>
                  <div className="text-sm text-muted-foreground">Keywords</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary mb-1">156</div>
                  <div className="text-sm text-muted-foreground">Backlinks</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-success mb-1">92%</div>
                  <div className="text-sm text-muted-foreground">Technical SEO</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Top Keywords</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-foreground">web analytics</span>
                    <span className="text-primary font-semibold">#3</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-foreground">page optimization</span>
                    <span className="text-success font-semibold">#1</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-foreground">website performance</span>
                    <span className="text-warning font-semibold">#7</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">SEO Issues & Fixes</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-sm text-foreground">Meta descriptions are optimized</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-warning/10 rounded-lg border border-warning/20">
                    <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                    <span className="text-sm text-foreground">Add more internal linking</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-warning/10 rounded-lg border border-warning/20">
                    <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                    <span className="text-sm text-foreground">Optimize image alt texts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

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

      default:
        return null;
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
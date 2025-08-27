import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";

const Index = () => {
  const [backendData, setBackendData] = useState<any | null>(null);

  // 🔹 Function to call backend
  const handleAnalyze = async (url: string) => {
    try {
      const res = await fetch("http://127.0.0.1:8000/v1/analyze/url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!res.ok) {
        console.error("Backend error:", res.statusText);
        return;
      }

      const data = await res.json();

      // 🔹 Transform response: page_stats → stats
      setBackendData({
        stats: data.page_stats || {},
        issues: [], // placeholder (extend later when backend sends issues)
      });
    } catch (error) {
      console.error("Error fetching backend:", error);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      {/* Pass backendData + handleAnalyze function */}
      <DemoSection backendData={backendData} onAnalyze={handleAnalyze} />
    </div>
  );
};

export default Index;

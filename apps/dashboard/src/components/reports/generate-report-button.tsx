"use client";

import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useState } from "react";

export function GenerateReportButton() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false);
      alert("Report generation started!");
    }, 1000);
  };

  return (
    <Button onClick={handleGenerate} disabled={isGenerating}>
      <FileText className="mr-2 h-4 w-4" />
      {isGenerating ? "Generating..." : "Generate Report"}
    </Button>
  );
}

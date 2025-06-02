"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign } from "lucide-react";
import { useState } from "react";

interface ReportTemplate {
  id: string;
  name: string;
  description: string;
  iconName: "TrendingUp" | "Users" | "DollarSign";
  category: string;
}

interface ReportTemplateCardProps {
  template: ReportTemplate;
}

const iconMap = {
  TrendingUp,
  Users,
  DollarSign,
};

export function ReportTemplateCard({ template }: ReportTemplateCardProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const IconComponent = iconMap[template.iconName];

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false);
      alert(`Generating ${template.name} report...`);
    }, 1000);
  };

  return (
    <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
      <div className="flex items-center space-x-3 mb-3">
        <div className="p-2 bg-blue-100 rounded-lg">
          <IconComponent className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h3 className="font-medium">{template.name}</h3>
          <Badge variant="outline" className="mt-1">
            {template.category}
          </Badge>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        {template.description}
      </p>
      <Button
        variant="outline"
        size="sm"
        className="w-full"
        onClick={handleGenerate}
        disabled={isGenerating}
      >
        {isGenerating ? "Generating..." : "Generate Report"}
      </Button>
    </div>
  );
}

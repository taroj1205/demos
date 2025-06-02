"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";

interface DownloadButtonProps {
  reportName: string;
  reportId: string;
}

export function DownloadButton({ reportName, reportId }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    // Simulate download
    setTimeout(() => {
      setIsDownloading(false);
      alert(`Downloaded: ${reportName}`);
    }, 1000);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleDownload}
      disabled={isDownloading}
    >
      <Download className="h-4 w-4" />
    </Button>
  );
}

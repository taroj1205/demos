import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GenerateReportButton } from "@/components/reports/generate-report-button";
import { DownloadButton } from "@/components/reports/download-button";
import { ReportTemplateCard } from "@/components/reports/report-template-card";
import {
  ReportsOverview,
  ReportsOverviewSkeleton,
} from "@/components/dashboard/reports-overview";
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
} from "lucide-react";

// Force dynamic rendering
export const dynamic = "force-dynamic";

// Mock reports data
async function getReportsData() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return {
    reports: [
      {
        id: "1",
        name: "Monthly Sales Report",
        type: "Sales",
        date: "2024-02-01",
        status: "completed",
        format: "PDF",
        size: "2.3 MB",
      },
      {
        id: "2",
        name: "User Activity Report",
        type: "Analytics",
        date: "2024-02-01",
        status: "completed",
        format: "CSV",
        size: "1.1 MB",
      },
      {
        id: "3",
        name: "Financial Summary Q1",
        type: "Financial",
        date: "2024-01-31",
        status: "processing",
        format: "PDF",
        size: "-",
      },
      {
        id: "4",
        name: "Customer Insights",
        type: "Analytics",
        date: "2024-01-30",
        status: "completed",
        format: "XLSX",
        size: "3.7 MB",
      },
    ],
    templates: [
      {
        id: "t1",
        name: "Sales Performance",
        description: "Comprehensive sales metrics and trends",
        iconName: "TrendingUp" as const,
        category: "Sales",
      },
      {
        id: "t2",
        name: "User Engagement",
        description: "User activity and engagement metrics",
        iconName: "Users" as const,
        category: "Analytics",
      },
      {
        id: "t3",
        name: "Revenue Analysis",
        description: "Financial performance and revenue breakdown",
        iconName: "DollarSign" as const,
        category: "Financial",
      },
    ],
  };
}

async function ReportsTable() {
  const data = await getReportsData();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Reports</CardTitle>
        <GenerateReportButton />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.reports.map((report) => (
            <div
              key={report.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <FileText className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium">{report.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Badge variant="outline">{report.type}</Badge>
                    <span>•</span>
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(report.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{report.format}</span>
                    {report.size !== "-" && (
                      <>
                        <span>•</span>
                        <span>{report.size}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={
                    report.status === "completed" ? "default" : "secondary"
                  }
                >
                  {report.status}
                </Badge>
                {report.status === "completed" && (
                  <DownloadButton
                    reportName={report.name}
                    reportId={report.id}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

async function ReportTemplates() {
  const data = await getReportsData();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Report Templates</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.templates.map((template) => (
            <ReportTemplateCard key={template.id} template={template} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Loading skeletons
function ReportsTableSkeleton() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Reports</CardTitle>
        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="h-9 w-9 bg-gray-200 rounded-lg animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
                  <div className="h-3 w-60 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-5 w-16 bg-gray-200 rounded animate-pulse" />
                <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ReportTemplatesSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Report Templates</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="p-4 border rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="h-9 w-9 bg-gray-200 rounded-lg animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
              <div className="h-3 w-full bg-gray-200 rounded animate-pulse mb-4" />
              <div className="h-8 w-full bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function ReportsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Reports & Analytics</h1>
      </div>

      <Suspense fallback={<ReportsOverviewSkeleton />}>
        <ReportsOverview />
      </Suspense>

      <div className="grid gap-4 md:gap-8 grid-cols-1 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <Suspense fallback={<ReportsTableSkeleton />}>
            <ReportsTable />
          </Suspense>
        </div>

        <div className="xl:col-span-1">
          <Suspense fallback={<ReportTemplatesSkeleton />}>
            <ReportTemplates />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

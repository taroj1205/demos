import { AnalyticsCardsSkeleton } from "@/components/dashboard/analytics-cards";
import { SalesChartSkeleton } from "@/components/dashboard/sales-chart";

export default function AnalyticsLoading() {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Analytics Overview</h1>
      </div>

      <AnalyticsCardsSkeleton />

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
        <SalesChartSkeleton />

        <div className="space-y-4">
          <div className="h-[400px] bg-gray-200 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
}

import { Suspense } from "react";
import {
  AnalyticsCards,
  AnalyticsCardsSkeleton,
} from "@/components/dashboard/analytics-cards";
import {
  SalesChart,
  SalesChartSkeleton,
} from "@/components/dashboard/sales-chart";

// Force dynamic rendering
export const dynamic = "force-dynamic";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Analytics Overview</h1>
      </div>

      <Suspense fallback={<AnalyticsCardsSkeleton />}>
        <AnalyticsCards />
      </Suspense>

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
        <Suspense fallback={<SalesChartSkeleton />}>
          <SalesChart />
        </Suspense>

        <div className="space-y-4">
          <div className="h-[400px] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Additional Charts
              </h3>
              <p className="text-gray-500">
                More analytics visualizations would go here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

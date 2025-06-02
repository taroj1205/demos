import { Suspense } from "react";
import {
  SalesChart,
  SalesChartSkeleton,
} from "@/components/dashboard/sales-chart";
import {
  MonthlyTargetCard,
  MonthlyTargetCardSkeleton,
} from "@/components/dashboard/monthly-target-card";
import {
  AverageOrderValueCard,
  AverageOrderValueCardSkeleton,
} from "@/components/dashboard/average-order-value-card";
import {
  ConversionRateCard,
  ConversionRateCardSkeleton,
} from "@/components/dashboard/conversion-rate-card";
import {
  TopProducts,
  TopProductsSkeleton,
} from "@/components/dashboard/top-products";

// Force dynamic rendering
export const dynamic = "force-dynamic";

export default function SalesPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Sales Dashboard</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Suspense fallback={<MonthlyTargetCardSkeleton />}>
          <MonthlyTargetCard />
        </Suspense>

        <Suspense fallback={<AverageOrderValueCardSkeleton />}>
          <AverageOrderValueCard />
        </Suspense>

        <Suspense fallback={<ConversionRateCardSkeleton />}>
          <ConversionRateCard />
        </Suspense>
      </div>

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
        <Suspense fallback={<SalesChartSkeleton />}>
          <SalesChart />
        </Suspense>

        <Suspense fallback={<TopProductsSkeleton />}>
          <TopProducts />
        </Suspense>
      </div>
    </div>
  );
}

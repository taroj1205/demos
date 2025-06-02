import { Suspense } from "react";
import {
  AnalyticsCards,
  AnalyticsCardsSkeleton,
} from "@/components/dashboard/analytics-cards";
import {
  UsersTable,
  UsersTableSkeleton,
} from "@/components/dashboard/users-table";
import {
  SalesChart,
  SalesChartSkeleton,
} from "@/components/dashboard/sales-chart";
import { QuickAddUser } from "@/components/dashboard/quick-add-user";

// Force dynamic rendering
export const dynamic = "force-dynamic";

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      {/* Analytics Cards */}
      <Suspense fallback={<AnalyticsCardsSkeleton />}>
        <AnalyticsCards />
      </Suspense>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {/* Sales Chart */}
        <div className="xl:col-span-2">
          <Suspense fallback={<SalesChartSkeleton />}>
            <SalesChart />
          </Suspense>
        </div>

        {/* Quick Add User */}
        <div>
          <QuickAddUser />
        </div>
      </div>

      {/* Users Table */}
      <Suspense fallback={<UsersTableSkeleton />}>
        <UsersTable />
      </Suspense>
    </div>
  );
}

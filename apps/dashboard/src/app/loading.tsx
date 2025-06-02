import { AnalyticsCardsSkeleton } from "@/components/dashboard/analytics-cards";
import { UsersTableSkeleton } from "@/components/dashboard/users-table";
import { SalesChartSkeleton } from "@/components/dashboard/sales-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      {/* Analytics Cards Loading */}
      <AnalyticsCardsSkeleton />

      {/* Main Content Grid Loading */}
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {/* Sales Chart Loading */}
        <div className="xl:col-span-2">
          <SalesChartSkeleton />
        </div>

        {/* Quick Add User Loading */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Quick Add User</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                  <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                  <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Users Table Loading */}
      <UsersTableSkeleton />
    </div>
  );
}

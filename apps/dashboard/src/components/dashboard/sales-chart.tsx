import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSalesData } from "@/actions/dashboard";

export async function SalesChart() {
  const salesData = await getSalesData();

  // Find max value for scaling
  const maxRevenue = Math.max(...salesData.map((d) => d.revenue));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {salesData.map((data, index) => (
            <div key={data.month} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{data.month}</span>
                <div className="flex items-center space-x-4">
                  <span className="text-muted-foreground">
                    {data.orders} orders
                  </span>
                  <span className="font-medium">
                    ${data.revenue.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${(data.revenue / maxRevenue) * 100}%`,
                    animationDelay: `${index * 100}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-600">
                $
                {salesData
                  .reduce((sum, d) => sum + d.revenue, 0)
                  .toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground">Total Revenue</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">
                {salesData.reduce((sum, d) => sum + d.orders, 0)}
              </p>
              <p className="text-sm text-muted-foreground">Total Orders</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Loading skeleton for sales chart
export function SalesChartSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="h-4 w-8 bg-gray-200 rounded animate-pulse" />
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-gray-300 h-2.5 rounded-full animate-pulse w-full" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="h-8 w-20 bg-gray-200 rounded animate-pulse mx-auto mb-2" />
              <div className="h-3 w-16 bg-gray-200 rounded animate-pulse mx-auto" />
            </div>
            <div>
              <div className="h-8 w-12 bg-gray-200 rounded animate-pulse mx-auto mb-2" />
              <div className="h-3 w-16 bg-gray-200 rounded animate-pulse mx-auto" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

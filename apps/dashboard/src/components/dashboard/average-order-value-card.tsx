import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, TrendingUp } from "lucide-react";
import { getAverageOrderValue } from "@/actions/dashboard";

export async function AverageOrderValueCard() {
  const data = await getAverageOrderValue();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{data.value}</div>
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <Badge
            variant="secondary"
            className={data.isPositive ? "text-green-600" : "text-red-600"}
          >
            <TrendingUp className="h-3 w-3 mr-1" />
            {data.change}
          </Badge>
          <span>{data.period}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function AverageOrderValueCardSkeleton() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="h-8 w-16 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="flex items-center space-x-2">
          <div className="h-5 w-16 bg-gray-200 rounded animate-pulse" />
          <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
        </div>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp } from "lucide-react";
import { getMonthlyTarget } from "@/actions/dashboard";

export async function MonthlyTargetCard() {
  const data = await getMonthlyTarget();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Monthly Target</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
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
        </div>
      </CardContent>
    </Card>
  );
}

export function MonthlyTargetCardSkeleton() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Monthly Target</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="h-8 w-20 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="flex items-center space-x-2">
          <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
        </div>
      </CardContent>
    </Card>
  );
}

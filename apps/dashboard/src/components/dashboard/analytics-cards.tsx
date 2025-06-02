import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  ShoppingCart,
  Target,
} from "lucide-react";
import { getAnalytics } from "@/actions/dashboard";
import { cn } from "@/lib/utils";

export async function AnalyticsCards() {
  const analytics = await getAnalytics();

  const cards = [
    {
      title: "Total Users",
      value: analytics.totalUsers.toLocaleString(),
      icon: Users,
      trend: "+12.5%",
      trendUp: true,
      description: "from last month",
    },
    {
      title: "Total Revenue",
      value: `$${(analytics.totalRevenue / 1000).toFixed(0)}k`,
      icon: DollarSign,
      trend: "+8.2%",
      trendUp: true,
      description: "from last month",
    },
    {
      title: "Total Orders",
      value: analytics.totalOrders.toLocaleString(),
      icon: ShoppingCart,
      trend: "+5.4%",
      trendUp: true,
      description: "from last month",
    },
    {
      title: "Conversion Rate",
      value: `${analytics.conversionRate}%`,
      icon: Target,
      trend: "-0.3%",
      trendUp: false,
      description: "from last month",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Badge
                variant="secondary"
                className={cn(
                  "flex items-center gap-1",
                  card.trendUp ? "text-green-600" : "text-red-600"
                )}
              >
                {card.trendUp ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {card.trend}
              </Badge>
              <span>{card.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Loading skeleton for analytics cards
export function AnalyticsCardsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="h-8 w-16 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="flex items-center space-x-2">
              <div className="h-5 w-12 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

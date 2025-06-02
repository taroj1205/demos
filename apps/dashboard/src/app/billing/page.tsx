import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, Download, Eye, MoreHorizontal } from "lucide-react";
import {
  BillingOverview,
  BillingOverviewSkeleton,
} from "@/components/dashboard/billing-overview";

// Force dynamic rendering
export const dynamic = "force-dynamic";

// Mock billing data
async function getBillingData() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    currentPlan: {
      name: "Pro Plan",
      price: 29,
      period: "month",
      features: [
        "Up to 10 users",
        "100GB storage",
        "Priority support",
        "Advanced analytics",
      ],
    },
    usage: {
      users: 7,
      storage: 65,
      apiCalls: 8500,
    },
    invoices: [
      { id: "INV-001", date: "2024-01-01", amount: 29, status: "paid" },
      { id: "INV-002", date: "2024-02-01", amount: 29, status: "paid" },
      { id: "INV-003", date: "2024-03-01", amount: 29, status: "pending" },
    ],
  };
}

async function CurrentPlan() {
  const data = await getBillingData();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Plan</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{data.currentPlan.name}</h3>
              <p className="text-sm text-muted-foreground">
                ${data.currentPlan.price}/{data.currentPlan.period}
              </p>
            </div>
            <Button variant="outline">Change Plan</Button>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Features included:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {data.currentPlan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Usage this month:</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Users</span>
                  <span>{data.usage.users}/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${(data.usage.users / 10) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Storage</span>
                  <span>{data.usage.storage}GB/100GB</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${data.usage.storage}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>API Calls</span>
                  <span>{data.usage.apiCalls.toLocaleString()}/10,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${(data.usage.apiCalls / 10000) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

async function BillingHistory() {
  const data = await getBillingData();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.invoices.map((invoice) => (
            <div key={invoice.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{invoice.id}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(invoice.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="font-medium">${invoice.amount}</p>
                  <Badge
                    variant={
                      invoice.status === "paid" ? "default" : "secondary"
                    }
                  >
                    {invoice.status}
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function CurrentPlanSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Plan</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="h-10 w-24 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-4 w-full bg-gray-200 rounded animate-pulse"
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function BillingHistorySkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="flex items-center space-x-4">
                <div className="space-y-2">
                  <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                  <div className="h-5 w-16 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="flex space-x-2">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div
                      key={j}
                      className="h-8 w-8 bg-gray-200 rounded animate-pulse"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function BillingPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Billing & Usage</h1>
      </div>

      <Suspense fallback={<BillingOverviewSkeleton />}>
        <BillingOverview />
      </Suspense>

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
        <Suspense fallback={<CurrentPlanSkeleton />}>
          <CurrentPlan />
        </Suspense>

        <Suspense fallback={<BillingHistorySkeleton />}>
          <BillingHistory />
        </Suspense>
      </div>
    </div>
  );
}

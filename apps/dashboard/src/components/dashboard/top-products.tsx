import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTopProducts } from "@/actions/dashboard";

export async function TopProducts() {
  const products = await getTopProducts();

  // Find the maximum sales for scaling progress bars
  const maxSales = Math.max(...products.map((p) => p.sales));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="flex items-center justify-between"
            >
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-muted-foreground">
                  {product.sales} sales
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">
                  ${product.revenue.toLocaleString()}
                </p>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${(product.sales / maxSales) * 100}%`,
                      animationDelay: `${index * 100}ms`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function TopProductsSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="text-right">
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-300 h-2 rounded-full animate-pulse w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

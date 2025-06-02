import { Suspense } from "react";
import {
  UsersTable,
  UsersTableSkeleton,
} from "@/components/dashboard/users-table";
import { QuickAddUser } from "@/components/dashboard/quick-add-user";

// Force dynamic rendering
export const dynamic = "force-dynamic";

export default function UsersPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Users Management</h1>
      </div>

      <div className="grid gap-4 md:gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Suspense fallback={<UsersTableSkeleton />}>
            <UsersTable />
          </Suspense>
        </div>
        <div>
          <QuickAddUser />
        </div>
      </div>
    </div>
  );
}

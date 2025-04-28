import { Suspense } from "react";
import { someFunc } from "@/utils";
import { Slower } from "@/components/slower";


export default async function Dashboard() {
  const data = await someFunc();
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Suspense>
        <div>{data}</div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Slower />
      </Suspense>
      <a href="/" className="text-blue-500 underline hover:text-blue-600 font-bold text-2xl">Home</a>
    </div>
  );
}

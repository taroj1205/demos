import { Suspense } from "react";
import { someFunc } from "@/utils";


export default async function Dashboard() {
  const data = await someFunc();
  return (
    <div>
      <Suspense>
        <div>{data}</div>
      </Suspense>
      <a href="/">Home</a>
    </div>
  );
}

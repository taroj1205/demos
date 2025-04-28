import { memo } from "react";
import { someFunc } from "@/utils";

export const Slower = memo(async () => {
  const {data, error} = await someFunc(5000);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return <div>{data}</div>;
});

Slower.displayName = "Slower";
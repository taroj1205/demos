import { memo } from "react";
import { someFunc } from "@/utils";

export const Slower = memo(async () => {
  const data = await someFunc(5000);
  return <div>{data}</div>;
});

Slower.displayName = "Slower";
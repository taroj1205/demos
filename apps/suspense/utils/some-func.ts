
export const someFunc = async (sleep = 3000): Promise<{data: string, error: Error | null}> => {
  'use server'
  console.log("someFunc called");
  await new Promise((resolve) => setTimeout(resolve, sleep));
  console.log("someFunc resolved");
  return {data: "Hello, world!", error: null};
};


export const someFunc = async (sleep = 3000) => {
  'use server'
  console.log("someFunc called");
  await new Promise((resolve) => setTimeout(resolve, sleep));
  console.log("someFunc resolved");
  return "Hello, world!";
};

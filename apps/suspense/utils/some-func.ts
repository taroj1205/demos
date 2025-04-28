
export const someFunc = async (sleep = 3000) => {
  'use server'
  await new Promise((resolve) => setTimeout(resolve, sleep));
  return "Hello, world!";
};

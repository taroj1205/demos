export const someFunc = async () => {
  'use server'
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return "Hello, world!";
};

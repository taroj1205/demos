import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suspense in Next.js",
  description: "A demonstration of Suspense in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <p>HELLO</p>
      {children}
    </>
  );
}

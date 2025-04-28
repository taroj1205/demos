import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Loading state in Next.js</h1>
      <Link href="/dashboard" className="text-blue-500 underline hover:text-blue-600 font-bold text-2xl">Go to Dashboard</Link>
    </div>
  );
}

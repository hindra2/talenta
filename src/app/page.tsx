import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="font-medium">
        <Link href="/dashboard-teachers">
          <p>dashboard</p>
        </Link>
        <Link href="/login-page">
          <p>login</p>
        </Link>
      </div>
    </main>
  );
}


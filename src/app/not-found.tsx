import Link from "next/link";

export const metadata = { title: "Not found" };

export default function NotFound() {
  return (
    <main className="page notfound">
      <h1 className="nf-title">404</h1>
      <p className="nf-text">This page doesn&apos;t exist.</p>
      <Link href="/" className="nf-link">
        ← Back to skymanlabs
      </Link>
    </main>
  );
}

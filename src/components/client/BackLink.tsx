"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

interface BackLinkProps {
  fallbackHref?: string;   // e.g. "/ailments" or "/remedies"
  label?: string;          // default: "← Back"
  className?: string;      // optional Tailwind overrides
}

export default function BackLink({
  fallbackHref = "/",
  label = "← Back",
  className = "text-green-700 hover:underline",
}: BackLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Try browser history first; fall back if none
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <Link href={fallbackHref} onClick={handleClick} className={className}>
      {label}
    </Link>
  );
}

import Link from "next/link";
export function AilmentCard({ title, slug }: { title: string; slug: string }) {
  return (
    <Link
      href={`/ailments/${slug}`}
      className="block rounded-lg border border-slate-200 bg-white p-3 text-center text-sm hover:border-green-200 hover:bg-green-50"
    >
      {title}
    </Link>
  );
}
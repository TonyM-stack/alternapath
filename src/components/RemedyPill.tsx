import Link from "next/link";
export function RemedyPill({ id, name }: { id: number; name: string }) {
  return (
    <Link
      href={`/remedies/${id}`}
      className="inline-block rounded-full bg-green-50 px-3 py-1 text-sm hover:bg-green-100"
    >
      {name}
    </Link>
  );
}
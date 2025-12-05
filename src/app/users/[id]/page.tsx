
export default async function UserPage({ params }: { params: { id: string } }) {
  console.log(params.id); // "1", "abc123", etc.

  //  fetch the specific user
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`);
  const user = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">{user.name}</h1>
      <p className="text-gray-600">{user.email}</p>
    </main>
  );
}



type UserPageParams = { id: string };

export default async function UserPage({
  params,
}: {
  params: Promise<UserPageParams>;
}) {
  const { id } = await params;

  // your existing logic here, e.g.:
  // const user = await getUserById(id);
  // if (!user) return <div>User not found</div>;

  return (
    <main className="...">
      {/* render your user with that id */}
    </main>
  );
}


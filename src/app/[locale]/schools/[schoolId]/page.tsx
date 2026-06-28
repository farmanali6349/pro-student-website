export default async function SchoolsPage({
  params,
}: {
  params: Promise<{ schoolId: string }>;
}) {
  const { schoolId } = await params;
  return (
    <div className="bg-linear-to-b from-dark-orange via-light-orange to-white w-full">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h2>My School {schoolId}</h2>
      </div>
    </div>
  );
}

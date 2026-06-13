export default function Loading() {
  return (
    <main className="min-h-screen bg-black p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-pulse">
        <div className="h-40 rounded-3xl bg-zinc-800 lg:col-span-2" />
        <div className="h-40 rounded-3xl bg-zinc-800" />

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-32 rounded-3xl bg-zinc-800"
          />
        ))}
      </div>
    </main>
  );
}
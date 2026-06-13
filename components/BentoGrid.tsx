export default function BentoGrid({
  hero,
  activity,
  courses,
}: {
  hero: React.ReactNode;
  activity: React.ReactNode;
  courses: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        {hero}
      </div>

      <div>
        {activity}
      </div>

      <div className="lg:col-span-3">
        {courses}
      </div>
    </div>
  );
}
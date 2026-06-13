console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);
import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import ActivityCard from "@/components/ActivityCard";
import CourseCard from "@/components/CourseCard";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
  console.log(error);

  return (
    <main className="text-white p-10">
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </main>
  );
}

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="flex">
        <Sidebar />

        <section className="flex-1 p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <HeroCard />
            <ActivityCard />

            {courses?.map((course, index) => (
  <CourseCard
    key={course.id}
    course={course}
    index={index}
  />
))}
          </div>
        </section>
      </div>
    </main>
  );
}
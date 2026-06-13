"use client";

import { motion } from "framer-motion";
import {
  Code,
  Rocket,
  FileCode,
  Sparkles,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
}

interface Props {
  course: Course;
  index: number;
}

export default function CourseCard({
  course,
  index,
}: Props) {
  const icons = {
    Code,
    Rocket,
    FileCode,
    Sparkles,
  };

  const Icon =
    icons[course.icon_name as keyof typeof icons] || Code;

  return (
    <motion.div
      whileHover={{
    y: -5,
    scale: 1.02,
      }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <Icon className="w-8 h-8 text-indigo-400 mb-4" />

      <h3 className="text-2xl font-semibold mb-6">
        {course.title}
      </h3>

      <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${course.progress}%` }}
          transition={{ duration: 1 }}
          className="h-full bg-indigo-500"
        />
      </div>

      <p className="mt-4 text-zinc-400">
        {course.progress}% Complete
      </p>
    </motion.div>
  );
}
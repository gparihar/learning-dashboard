"use client";

import { motion } from "framer-motion";

export default function ActivityCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <h2 className="font-semibold mb-4">
        Activity
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className="h-4 rounded bg-green-500/50"
          />
        ))}
      </div>
    </motion.article>
  );
}
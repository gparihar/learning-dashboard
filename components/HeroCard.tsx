"use client";

import { motion } from "framer-motion";

export default function HeroCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="lg:col-span-2 rounded-3xl border border-zinc-800 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 p-8"
    >
      <h1 className="text-3xl font-bold">
        Welcome Back 👋
      </h1>

      <p className="mt-3 text-zinc-400">
        Learning streak: 12 days
      </p>
    </motion.article>
  );
}
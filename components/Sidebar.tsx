"use client";

import { Home, BookOpen, User } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-20 h-screen border-r border-zinc-800 bg-zinc-900">
      <div className="flex flex-col items-center gap-6 mt-8">
        <Home className="w-6 h-6 text-zinc-400 hover:text-white cursor-pointer" />
        <BookOpen className="w-6 h-6 text-zinc-400 hover:text-white cursor-pointer" />
        <User className="w-6 h-6 text-zinc-400 hover:text-white cursor-pointer" />
      </div>
    </aside>
  );
}
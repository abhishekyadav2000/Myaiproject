"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-10 md:p-16">
      <motion.h1
        initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-6xl font-extrabold leading-tight"
      >
        ProjectX — <span className="text-px-orange">Learn. Work. Earn.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mt-4 max-w-2xl text-lg opacity-90"
      >
        A futuristic learning-work ecosystem with STREAMS+ kits for schools, parents, and communities — from
        Starter to Mastery levels. Real projects. Real skills. Real outcomes.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap gap-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
      >
        <Link href="/kits" className="rounded-xl2 bg-px-orange px-5 py-3 font-semibold text-black shadow-soft">
          Explore Kits
        </Link>
        <a href="#contact" className="rounded-xl2 border border-white/20 px-5 py-3 font-semibold">
          Book a Demo
        </a>
      </motion.div>

      {/* molten X backdrop */}
      <div className="pointer-events-none absolute right-[-8%] top-[-20%] h-72 w-72 rotate-12 rounded-[30%] bg-px-orange/20 blur-3xl" />
    </div>
  );
}

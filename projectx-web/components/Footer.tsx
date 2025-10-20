export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container-px flex flex-col items-center gap-4 py-10 text-center text-sm opacity-80">
        <p>© {new Date().getFullYear()} The ProjectX Co. All rights reserved.</p>
        <p className="max-w-2xl">
          Learn. Work. Earn. — STREAMS+ education powered by real-world kits and a molten-orange spark.
        </p>
      </div>
    </footer>
  );
}

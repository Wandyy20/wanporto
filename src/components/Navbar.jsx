import { useEffect, useState } from "react";
import { clsx } from "clsx";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const els = LINKS.map(l => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const NavLink = ({ id, label }) => (
    <a
      href={`#${id}`}
      onClick={() => setOpen(false)}
      className={clsx(
        "px-3 py-1.5 rounded-lg transition-colors text-sm font-medium",
        active === id 
          ? "text-cyan-400 border-b-2 border-cyan-400" 
          : "text-white/70 hover:text-white hover:border-b-2 hover:border-white/50 border-transparent"
      )}
    >
      {label}
    </a>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-5xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="font-semibold text-cyan-400">wanporto.</a>

            <button
              className="md:hidden border border-white/20 rounded-lg px-3 py-1.5 text-white/80 transition hover:border-cyan-400/50"
              onClick={() => setOpen(v => !v)}
            >
              {open ? "Close" : "Menu"} 
            </button>

            <div className="hidden md:flex gap-4">
              {LINKS.map((l) => <NavLink key={l.id} {...l} />)}
            </div>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 grid gap-2">
              {LINKS.map((l) => <NavLink key={l.id} {...l} />)}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
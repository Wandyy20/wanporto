import { projects } from "../data";

export default function Projects() {
  return (
    <section className="py-12">
      <div className="flex flex-col items-center text-center">
        <h2
          className="text-3xl md:text-4xl font-semibold 
          bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent
          inline-block leading-tight pb-1"
        >
          My Projects
        </h2>
        <p className="mt-2 mb-4 max-w-2xl text-lg text-white/80">
          A showcase of my recent work in web and mobile development, demonstrating my skills across various technologies.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(projects ?? []).slice(0, 5).map((p, i) => (
          <article
            key={i}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 
            hover:bg-white/10 transition duration-300 hover:shadow-xl
            flex flex-col min-h-full transform hover:-translate-y-1" 
          >
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${p.title}`}
              className="block rounded-xl overflow-hidden border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            >
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title || "Project screenshot"}
                  className="absolute inset-0 w-full h-full object-contain object-center" 
                />
              </div>
            </a>

            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-xl font-bold group-hover:text-cyan-400 transition" 
            >
              {p.title}
            </a>

            <p className="mt-1 text-white/70 line-clamp-3">{p.desc}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags?.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-cyan-400/10 text-cyan-300 px-3 py-1 text-xs font-medium border border-cyan-400/20" 
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 pt-2 flex-1 flex items-end">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 px-4 py-2 text-sm 
                text-cyan-300 hover:bg-cyan-400/10 transition focus:outline-none focus:ring-2 focus:ring-cyan-400/60 font-semibold" 
              >
                Visit site
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
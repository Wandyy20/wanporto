import { experiences } from "../data";

export default function Experience() {
  return (
    <section className="pt-16 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2
            className="text-3xl md:text-4xl font-semibold 
            bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent
            inline-block leading-tight pb-1"
          >
            My Experience
          </h2>
          <p className="mt-2 mb-10 max-w-2xl text-lg text-white/80">
            A chronological view of my academic journey and professional activities, highlighting key achievements and growth.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((job, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 
              transition duration-300 hover:bg-white/10 hover:shadow-xl
              transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <div className="text-xl font-bold">{job.company}</div> 
                  <div className="text-base text-white/60">{job.role}</div> 
                </div>
                <div className="text-base text-cyan-400/80 italic shrink-0">{job.time}</div>
              </div>

              {job.summary ? (
                <p className="mt-5 text-lg leading-relaxed text-white/70">
                  {job.summary}
                </p>
              ) : (
                <ul className="mt-5 pl-0 space-y-3 text-lg leading-relaxed text-white/70">
                  {job.points?.map((p, idx) => (
                    <li key={idx} className="grid grid-cols-[1rem,1fr] items-start gap-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 mt-2 text-cyan-400/80 shrink-0" 
                        viewBox="0 0 24 24" 
                        strokeWidth="2.5" 
                        stroke="currentColor" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 6l6 6l-6 6" />
                      </svg>
                      <span className="text-white/85">{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
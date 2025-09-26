import { profile } from "../data";
import profilePic from "../assets/profile.jpg";
import Typewriter from "./Typewriter";

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 items-center gap-12">
      <div>
        <p className="text-cyan-400 font-medium tracking-widest uppercase">
          <Typewriter text="Hello there," speed={70} />
        </p>

        <h1 className="mt-3 text-5xl md:text-6xl font-semibold leading-tight text-white">
          I’m{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        <p className="mt-6 text-white/80 max-w-xl leading-relaxed">
          I’m an undergraduate{" "}
          <span className="text-cyan-400 font-bold">Computer Science</span> student at{" "}
          <span className="text-cyan-400 font-bold">BINUS University – Alam Sutera</span>, deeply
          interested in Intelligent Systems. I love experimenting, building, and learning
          through real projects that challenge my creativity. My goal is to design
          intelligent technologies that are both innovative and impactful.
        </p>

        <div className="mt-8 flex gap-3">
          <a href="#projects" 
            className="px-4 py-3 rounded-xl bg-cyan-400/90 text-slate-950 font-semibold transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            View Projects
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-xl border border-white/15 text-white/80 font-semibold transition hover:bg-white/10 hover:border-white/30"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="relative flex justify-center">
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 blur-2xl -z-10" />
        <img
          src={profilePic}
          alt={profile.name}
          className="relative rounded-2xl shadow-2xl ring-1 ring-white/20 transition-transform duration-300
          w-full max-w-[320px] md:max-w-[360px] lg:max-w-[400px]
          h-[380px] md:h-[420px] object-cover object-[50%_30%] mx-auto"
        />
      </div>
    </div>
  );
}
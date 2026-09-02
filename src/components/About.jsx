import { profile } from "../data";
import profilePic from "../assets/profile1.jpg";
import Stat from "./Stat";

export default function About() {
  return (
    <div className="grid md:grid-cols-2 items-center gap-12">
      <div className="relative flex justify-center order-1 md:order-1">
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 blur-2xl -z-10" />
        <img
          src={profilePic}
          alt={profile.name}
          className="relative rounded-2xl shadow-2xl ring-1 ring-white/20 transition-transform duration-300
          w-full max-w-[320px] md:max-w-[360px] lg:max-w-[400px]
          h-[380px] md:h-[420px] object-cover object-[50%_30%] mx-auto"
        />
      </div>

      <div className="order-2 md:order-2">
        <h2 
          className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent pb-1"
        >
          About Me
        </h2>

        <p className="mt-4 text-white/70 leading-relaxed max-w-2xl">
          As an undergraduate <span className="text-cyan-400 font-bold">Computer Science</span>
          {" "}student at <span className="text-cyan-400 font-bold">BINUS University – Alam Sutera</span>, 
          I focus on building reliable backend systems and full-stack applications. I have hands-on
          experience with{" "}
          <span className="text-cyan-300 font-bold">Go, TypeScript, JavaScript, Python, PostgreSQL, React, and Next.js</span>,
          and I'm currently applying automation and data analysis skills in a data analyst internship.
        </p>
        
        <p className="mt-4 text-white/70 leading-relaxed max-w-2xl">
          Beyond academics, I actively engage in nonprofit campus organizations, where I develop skills in
          teamwork, communication, and project management. My focus right now is building production-ready
          backend systems — from designing concurrency-safe APIs to deploying full-stack applications end to end.
        </p>

        <div className="mt-8 grid grid-cols-3 gap-4">
          <Stat value="3+" label="Full-Stack Projects" />
          <Stat value="2" label="Deployed Live Apps" />
          <Stat value="5+" label="Languages & Frameworks" />
        </div>
      </div>
    </div>
  );
}
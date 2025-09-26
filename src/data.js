import wanporto from "./assets/wanporto.jpg"
import Cateringz from "./assets/Cateringz.jpg";
import AutoCare from "./assets/AutoCare.jpg"
import CareerScope from "./assets/CareerScope.jpg"

export const profile = {
  name: "Wandy",
  email: "wandylims20@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/Wandyy20" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/wandy-reynand-lim-0b491b384/"},
  ],
  tools: ["React", "Vite", "Tailwind", "Framer Motion", "Supabase"],
};

export const experiences = [
  {
    company: "Undergraduate Computer Science",
    role: "Bina Nusantara University",
    time: "September 2023 – Present",
    summary:
      "Specializing in Intelligent Systems within Computer Science, covering machine learning, deep learning, data analysis, and advanced algorithms. Built real projects including training AI models, developing responsive web applications, and using data to support clear decisions, with a focus on turning learning into practical results.",
  },
  {
    company: "Keluarga Mahasiswa Buddhis Dhammavaddhana",
    role: "Bina Nusantara University",
    time: "January 2024 – Present",
    points: [
      "Active in organizational management, event committees, and volunteer programs (internal & external).",
      "Drove community development while strengthening leadership, teamwork, and communication.",
      "Managed logistics for PMB x Welcome Party 2025 and led equipment & logistics for Social Service Event II 2024, ensuring smooth execution.",
    ],
  }
];

export const projects = [
  {
    title: "Web Portofolio",
    desc: "Personal portfolio built with React + Vite and Tailwind.",
    img: wanporto,
    href: "https://your-site.com/ai-classifier", // Silakan ganti link ini
    tags: ["React", "Vite", "Tailwind", "Framer Motion"],
  },
  {
    title: "AutoCare",
    desc: "Mobile app for tracking service history, scheduling car maintenance, and receiving reminders.",
    img: AutoCare,
    href: "https://your-site.com/autocare", // Silakan ganti link ini
    tags: ["Html", "Css", "Javascript", "Firebase"],
  },
  {
    title: "CareerScope",
    desc: "AI-powered career matcher for CS students based on skills and interests.",
    img: CareerScope,
    href: "https://your-site.com/careerscope", // Silakan ganti link ini
    tags: ["Html", "Tailwind Css", "Python", "Flask"],
  },
  {
    title: "CAteriNgz — Catering Website",
    desc: "A promotional website for a catering service that showcases signature dishes and package options.",
    img: Cateringz,
    href: "https://your-site.com/cateringz", // Silakan ganti link ini
    tags: ["Html", "Css", "Javascript"],
  }
];
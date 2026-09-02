import wanporto from "./assets/wanporto.jpg"
import Cateringz from "./assets/Cateringz.jpg";
import AutoCare from "./assets/AutoCare.jpg"
import CareerScope from "./assets/CareerScope.jpg"
import TicketBooking from "./assets/TicketBooking.png"
import FashionStore from "./assets/FashionStore.png"

export const profile = {
  name: "Wandy",
  email: "wandylims20@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/Wandyy20" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/wandy-reynand-lim-0b491b384/"},
  ],
  tools: ["Go", "React", "PostgreSQL", "Next.js", "Express.js", "Tailwind"],
};

export const experiences = [
  {
    company: "Bank of China (Hong Kong) Limited, Jakarta Branch",
    role: "Data Analyst Intern",
    time: "February 2026 – Present",
    points: [
      "Developed Python automation (openpyxl) to replace manual report generation, reducing weekly reporting time and eliminating recurring formatting errors.",
      "Built a second automation script for automated report-ready notifications, streamlining team workflow.",
      "Designed a Power BI dashboard to visualize customer and product performance data.",
      "Performed data reconciliation and root cause analysis to identify discrepancies across internal and head-office datasets.",
    ],
  },
  {
    company: "Bina Nusantara University",
    role: "Undergraduate Computer Science, Intelligent Systems",
    time: "September 2023 – Present",
    summary:
      "Specializing in Intelligent Systems within Computer Science, covering machine learning, deep learning, data analysis, and advanced algorithms. Built real projects including training AI models, developing full-stack web applications, and designing backend systems, with a focus on turning learning into practical, production-ready results.",
  },
  {
    company: "Keluarga Mahasiswa Buddhis Dhammavaddhana",
    role: "Logistics Lead",
    time: "January 2024 – December 2025",
    points: [
      "Active in organizational management, event committees, and volunteer programs (internal & external).",
      "Drove community development while strengthening leadership, teamwork, and communication.",
      "Managed logistics for PMB x Welcome Party 2025 and led equipment & logistics for Social Service Event II 2024, ensuring smooth execution.",
    ],
  }
];

export const projects = [
  {
    title: "Flight Ticket Booking System",
    desc: "Full-stack flight booking system with a concurrency-safe Go REST API, preventing double-booking when multiple users select the same seat. Deployed with a PostgreSQL database and a React frontend.",
    img: TicketBooking,
    href: "https://ticket-booking-nine-steel.vercel.app/",
    tags: ["React", "Go", "PostgreSQL", "Chi"]
  },
  {
    title: "FashionStore — E-Commerce",
    desc: "Full-stack e-commerce platform with product catalog, cart, checkout, and an admin dashboard. Includes JWT authentication and Midtrans payment integration.",
    img: FashionStore,
    href: "https://e-commerce-fashionstore.vercel.app/",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma"]
  },
  {
    title: "CareerScope",
    desc: "Career matcher for CS students, using a Python/Flask backend to process skills and interests into relevant career suggestions.",
    img: CareerScope,
    href: "https://github.com/Wandyy20/CareerScope.git",
    tags: ["Python", "Flask", "HTML", "Tailwind CSS"]
  },
  {
    title: "Web Portfolio",
    desc: "Personal portfolio built with React + Vite and Tailwind.",
    img: wanporto,
    href: "https://github.com/Wandyy20/wanporto.git",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "AutoCare",
    desc: "Mobile app for tracking service history, scheduling car maintenance, and receiving reminders.",
    img: AutoCare,
    href: "https://github.com/Wandyy20/AutoCare.git",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"]
  },
  {
    title: "CAteriNgz — Catering Website",
    desc: "A promotional website for a catering service that showcases signature dishes and package options.",
    img: Cateringz,
    href: "https://github.com/Wandyy20/CAteriNgz.git",
    tags: ["HTML", "CSS", "JavaScript"]
  }
];
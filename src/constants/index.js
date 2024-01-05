import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  outcomex,
  chatgpt,
  three,
  fullstack,
  nextapp,
  D3,
  Panel
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Typescript/Next.Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: three,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Service Desk Analyst",
    company_name: "Outcomex Pvt.ltd",
    icon: outcomex,
    iconBg: "#9EB8D9",
    date: "July 2019 - October 2020",
    points: [
      "Network support and Resolution with device configurations and diagrams",
      "Ticket Management and provided technical support",
      "Troubleshotting complex multi-vendor network service provider issues",
    ],
  },
  {
    title: "Network Engineer",
    company_name: "Outcomex Pvt.ltd",
    icon: outcomex,
    iconBg: "#9EB8D9",
    date: "October 2020 - August 2023",
    points: [
      "Created onCall websites using React with tailwindCSS",
      "Automation of Network operations using Python",
      "Configured, troubleshoot, and optimized wireless networks to ensure reliable connectivity and minimal downtime for end users.",
    ],
  },
  {
    title: "Software Developer/Student",
    icon: meta,
    iconBg: "#9EB8D9",
    date: "September 2023 - January 2024",
    points: [
      "Self-Directed Learning in Front-End Development: Dedicated six months to intensive self-learning and skill enhancement in modern front-end technologies.",
      "Extensive Project in GitHub: Created and managed over 95 repositories on GitHub, showcasing a wide range of front-end projects and collaboration",
      "Project development using Next.js: Focused on Next.js for several Projects to leverage its server-side rendering capabilites for improved Performance and SEO resulting web applications.",
      "Developed a deep understanding of Javascript and Typescript with integration of TailwindCSS",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Kushal Overflow",
    description:
      "Front-end stack overflow which allows users to login and ask sepefic questions related to programming, this is design inspired from stackoverflow",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
        link: "https://react.dev/",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
        link: "https://www.mongodb.com/",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
        link: "https://tailwindcss.com",
      },
      {
        name: "Nextjs",
        color: "green-text-gradient",
        link: "https://nextjs.org",
      },
    ],
    image: nextapp,
    source_code_link: "https://github.com/kushalBhetuwal/NextJSProject",
    live_link: "https://next-js-project-eta-sepia.vercel.app/",
  },
  {
    name: "Research_GPT",
    description: "ChatGPT created using Pure HTML, CSS and Vanilla Javascript",
    tags: [
      {
        name: "HTML5",
        color: "orange-text-gradient",
        link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "Vanilla_Javascript",
        color: "orange-text-gradient",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
    image: chatgpt,
    source_code_link: "https://github.com/kushalBhetuwal/ChatGPT",
    live_link: "https://chat-gpt-hazel-alpha.vercel.app/",
  },
  {
    name: "3D_Portfolio_Design",
    description: "Created a 3dPortFolio design using three.js and react/Fiber",
    tags: [
      {
        name: "Three.js",
        color: "pink-text-gradient",
        link: "https://threejs.org",
      },
    ],
    image: D3,
    source_code_link: "https://github.com/kushalBhetuwal/kushalPortfolio3D",
    live_link: "https://kushal-portfolio3-d.vercel.app/",
  },
  {
    name: "PricingPanelDesign",
    description:
      "Simple CSS design",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
        link: "https://react.dev/",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
    image: Panel,
    source_code_link: "https://github.com/kushalBhetuwal/pricing-panel",
  },

  {
    name: "User-Management App",
    description:
      "This project helps the user to add the user , delete the user and update the user",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
        link: "https://www.docker.com/",
      },
      {
        name: "Prisma",
        color: "blue-text-gradient",
        link: "https://www.prisma.io",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
        link: "https://www.postgresql.org",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
        link: "https://nodejs.org/en",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
        link: "https://nextjs.org",
      },
      {
        name: "tailwindCSS",
        color: "blue-text-gradient",
        link: "https://tailwindcss.com",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
        link: "https://www.typescriptlang.org",
      },
    ],
    image: fullstack,
    source_code_link: "https://github.com/kushalBhetuwal/fullstackapp",
  },
];

export { services, technologies, experiences, testimonials, projects };

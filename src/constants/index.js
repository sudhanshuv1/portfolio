import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    alarmClock,
    communityHealthcare,
    technotes,
    summaryGenerator,
    zoomClone
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const education = [
    {
        degree: "Master of Computer Applications",
        school: "Harcourt Butler Technical University",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "August 2023 - August 2025",
        points: [
            "Completed my master's degree in Computer Applications",
            "Took many courses of Computer Applications as part of the curriculum",
        ],
    },
    {
        degree: "Bachelor of Science",
        school: "Kumaun University",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "August 2018 - August 2021",
        points: [
            "Completed my bachelor's degree in Science with Mathematics, Physics, and Chemistry",
            "Achieved an overall percentage of 67.37%",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sudhanshuv1',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sudhanshu-tiwari-198185287/',
    }
];

export const projects = [
    {
        iconUrl: summaryGenerator,
        theme: 'btn-back-orange',
        name: 'Summary Generator',
        description: 'A Next.js app that takes any document (PDF/Image) and generates smart summaries.',
        link: 'https://summary-generator-beryl.vercel.app',
    },
    {
        iconUrl: zoomClone,
        theme: 'btn-back-yellow',
        name: 'ROOM - The Video Conferencing App',
        description: 'A video conferencng app using Next.js and Stream API',
        link: 'https://zoom-clone-stream.vercel.app',
    },
    {
        iconUrl: technotes,
        theme: 'btn-back-blue',
        name: 'Technotes',
        description: 'A task management MERN app for organizing notes',
        link: 'https://technotes-frontend-5ffq.onrender.com',
    },
    {
        iconUrl: alarmClock,
        theme: 'btn-back-red',
        name: 'React Alarm Clock',
        description: 'An alarm clock app using React.js',
        link: 'https://reactjs-alarm-clock.netlify.app',
    },
    {
        iconUrl: communityHealthcare,
        theme: 'btn-back-green',
        name: 'Community Healthcare',
        description: 'Landing page for a community healthcare service',
        link: 'https://community-healthcare.netlify.app/',
    },
];
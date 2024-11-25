import { NavbarTypes, ProjectType } from "@/types";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import {
  FaBitbucket,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNode,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiGradle, SiNextdotjs, SiPostgresql } from "react-icons/si";

export const navbarData: NavbarTypes[] = [
  {
    name: "Home",
    path: "/",
    type: "home",
  },
  {
    name: "Projects",
    path: "/projects",
    type: "projects",
  },
  {
    name: "Skills",
    path: "/skills",
    type: "skills",
  },
  {
    name: "Contact",
    path: "/contact",
    type: "contact",
  },
];

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Digilegal Pro : Legal Research App (Mobile)",
    image: "/digimain.jpg",
    url: "",
    type: "mobile",
    tech: "React Native",
    tech2: "",
    status: "Online",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.digilegalpro&hl=en",
    iosUrl:
      "https://apps.apple.com/in/app/digilegal-pro/id1659192741?platform=iphone",
    techUsed: [
      "React Native",
      "Redux",
      "OneSignal",
      "Rest API",
      "Java",
      "SpringBoot",
    ],
    des: [
      {
        id: 1,
        para: "A comprehensive React Native application designed to simplify legal research for lawyers and professionals. This feature-rich app enables users to search cases effortlessly using free text, act, court, citation, or judge name. It provides detailed case results, including headnotes and full case readings with customizable font sizes. Users can bookmark cases, download and print documents, and even focus on specific paragraphs for precise insights. Built with Redux for state management, the app ensures a seamless and efficient user experience, making legal research more accessible and convenient.",
      },
    ],
    images: [
      {
        id: 1,
        url: "/digi1.webp",
      },
      {
        id: 2,
        url: "/digi2.webp",
      },
      {
        id: 3,
        url: "/digi3.webp",
      },
      {
        id: 4,
        url: "/digi4.webp",
      },
      {
        id: 5,
        url: "/digi5.webp",
      },
      {
        id: 6,
        url: "/digi6.webp",
      },
      {
        id: 7,
        url: "/digi7.webp",
      },
      {
        id: 8,
        url: "/digi8.webp",
      },
    ],
  },
  {
    id: 2,
    title: "Legitquest Research - Legal case management app (Mobile)",
    image: "/lgmain.jpg",
    url: "",
    type: "mobile",
    tech: "React Native",
    tech2: "",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.legitquest&hl=en",
    status: "Online",
    techUsed: [
      "React Native",
      "Redux",
      "Rest API",
      "Elasticsearch",
      "PHP/Laravel",
    ],
    des: [
      {
        id: 1,
        para: "Developed a comprehensive legal app and management tool using React Native and Redux for the frontend, and PHP Laravel with Elasticsearch for the backend. Streamlined case management for lawyers and users, offering features such as case management, research capabilities, webview integration with two websites, and customizable options for personalized user experiences.",
      },
    ],
    images: [
      {
        id: 1,
        url: "/lq1.webp",
      },
      {
        id: 2,
        url: "/lq2.webp",
      },
      {
        id: 3,
        url: "/lq3.webp",
      },
      {
        id: 4,
        url: "/lq4.webp",
      },
      {
        id: 5,
        url: "/lq5.webp",
      },
      {
        id: 6,
        url: "/lq6.webp",
      },
      {
        id: 7,
        url: "/lq7.webp",
      },
      {
        id: 8,
        url: "/lq8.webp",
      },
      {
        id: 9,
        url: "/lq9.webp",
      },
      {
        id: 10,
        url: "/lq10.webp",
      },
      {
        id: 11,
        url: "/lq11.webp",
      },
      {
        id: 12,
        url: "/lq12.webp",
      },
      {
        id: 13,
        url: "/lq13.webp",
      },
    ],
  },
  {
    id: 3,
    title: "Digilegal Books - Legal books buying plotform. (Web)",
    image: "/digilegalbooks.webp",
    url: "https://digilegalbooks.com/",
    type: "web",
    tech: "Next JS",
    tech2: "",
    status: "Online",
    techUsed: ["NextJS", "Prisma", "Postgresql", "Typescript", "TailwindCSS"],
    des: [
      {
        id: 1,
        para: "Digilegalbooks.com built with Next.js, designed specifically for selling legal books. The platform offers a seamless shopping experience with features like adding items to the cart, secure checkout, integrated Razorpay payment gateway, and real-time inventory updates. Users can manage their order history, track delivery statuses, and enjoy a responsive, user-friendly interface. This project highlights expertise in building scalable, high-performance web applications with advanced e-commerce functionality.",
      },
    ],
    images: [
      {
        id: 1,
        url: "/digi1.webp",
      },
      {
        id: 2,
        url: "/digi2.webp",
      },
      {
        id: 3,
        url: "/digi3.webp",
      },
      {
        id: 4,
        url: "/digi4.webp",
      },
      {
        id: 5,
        url: "/digi5.webp",
      },
      {
        id: 6,
        url: "/digi6.webp",
      },
      {
        id: 7,
        url: "/digi7.webp",
      },
      {
        id: 8,
        url: "/digi8.webp",
      },
    ],
  },
  {
    id: 4,
    title: "Digireader - Legal books reading website. (Web)",
    image: "/digireader.webp",
    url: "https://digireader.co.in/",
    type: "web",
    tech: "Next JS",
    tech2: "",
    status: "Online",
    techUsed: [
      "NextJS",
      "Prisma",
      "Postgresql",
      "Typescript",
      "TailwindCSS",
      "FlipHTML5",
    ],
    des: [
      {
        id: 1,
        para: "A web application built with Next.js that allows users to browse and read a variety of legal books. The platform includes features like saving books to favorites for quick access and an eBook reader with customizable settings. With a clean and responsive design, it provides a smooth and user-friendly reading experience across all devices.",
      },
    ],
    images: [
      {
        id: 1,
        url: "/digi1.webp",
      },
      {
        id: 2,
        url: "/digi2.webp",
      },
      {
        id: 3,
        url: "/digi3.webp",
      },
      {
        id: 4,
        url: "/digi4.webp",
      },
      {
        id: 5,
        url: "/digi5.webp",
      },
      {
        id: 6,
        url: "/digi6.webp",
      },
      {
        id: 7,
        url: "/digi7.webp",
      },
      {
        id: 8,
        url: "/digi8.webp",
      },
    ],
  },
  {
    id: 5,
    title: "PRIC - Medical appointment website. (Web)",
    image: "/pric.webp",
    url: "https://praic.in/",
    type: "web",
    tech: "Next JS",
    tech2: "",
    status: "Online",
    techUsed: ["NextJS", "TailwindCSS"],
    des: [
      {
        id: 1,
        para: "Praic.in built with Next.js 14 to optimize SEO and enhance accessibility. Designed for India’s largest Rheumatology Daycare Centre, the platform allows users to book appointments online, check prescriptions, download reports, and access a range of healthcare services conveniently. This project demonstrates expertise in building responsive, efficient, and feature-rich web applications tailored for healthcare needs.",
      },
    ],
    images: [
      {
        id: 1,
        url: "/digi1.webp",
      },
      {
        id: 2,
        url: "/digi2.webp",
      },
      {
        id: 3,
        url: "/digi3.webp",
      },
      {
        id: 4,
        url: "/digi4.webp",
      },
      {
        id: 5,
        url: "/digi5.webp",
      },
      {
        id: 6,
        url: "/digi6.webp",
      },
      {
        id: 7,
        url: "/digi7.webp",
      },
      {
        id: 8,
        url: "/digi8.webp",
      },
    ],
  },
  {
    id: 6,
    title: "Architect Engineer - A complete house planning website. (Web)",
    image: "/ae.webp",
    url: "https://web.architectengineer.in/",
    type: "web",
    tech: "Next JS",
    tech2: "Node JS",
    status: "Devlopment",
    techUsed: [
      "NextJS",
      "Prisma",
      "Postgresql",
      "Typescript",
      "TailwindCSS",
      "NodeJS",
      "Express",
      "Turborepo",
    ],
    des: [
      {
        id: 1,
        para: "A comprehensive platform for house planning and architectural services, built using TurboRepo, Next.js, and Node.js for optimized performance and scalability. The website offers contractors the ability to purchase ready-made plans for use in their projects, while users can create custom plans that are further developed by the platform's team. It includes features like real-time chat for project discussions, notifications for updates and alerts, and a seamless user experience for browsing interior designs, elevations, and plan-books. This project highlights expertise in creating feature-rich, scalable solutions tailored for the architecture and construction industry.",
      },
    ],
    images: [
      {
        id: 1,
        url: "/digi1.webp",
      },
      {
        id: 2,
        url: "/digi2.webp",
      },
      {
        id: 3,
        url: "/digi3.webp",
      },
      {
        id: 4,
        url: "/digi4.webp",
      },
      {
        id: 5,
        url: "/digi5.webp",
      },
      {
        id: 6,
        url: "/digi6.webp",
      },
      {
        id: 7,
        url: "/digi7.webp",
      },
      {
        id: 8,
        url: "/digi8.webp",
      },
    ],
  },
];

export const skills = [
  {
    id: 1,
    icon: "/reactNativeIcon.png",
    name: "React Native",
    des: "Expertise in building cross-platform mobile applications with React Native, delivering seamless performance and native-like user experiences for iOS and Android.",
  },
  {
    id: 2,
    icon: RiNextjsFill,
    name: "React/Next JS",
    des: "Proficient in creating dynamic, high-performance web applications using React and Next.js, with a focus on server-side rendering and optimized SEO.",
  },
  {
    id: 3,
    icon: FaNodeJs,
    name: "Node/Express JS",
    des: "Skilled in developing scalable, efficient backend APIs and services with Node.js and Express, ensuring secure and robust server-side solutions.",
  },

  {
    id: 4,
    icon: SiPostgresql,
    name: "PostgreSQL",
    des: "Experienced in designing and managing relational databases using PostgreSQL, leveraging its advanced features for scalable and efficient data storage.",
  },
  {
    id: 5,
    icon: "/xcodeIcon.png",
    name: "Xcode",
    des: "Experienced in developing, testing, and deploying iOS applications using Xcode, with a strong emphasis on performance and usability.",
  },
  {
    id: 6,
    icon: "/androidStudioIcon.png",
    name: "Android Studio",
    des: "Skilled in using Android Studio to debug and optimize mobile applications, ensuring compatibility and excellent user experiences on Android devices.",
  },
  {
    id: 7,
    icon: RiTailwindCssFill,
    name: "TailwindCSS",
    des: "Proficient in crafting responsive and modern user interfaces with Tailwind CSS, ensuring clean and consistent design systems.",
  },
  {
    id: 8,
    icon: BiLogoTypescript,
    name: "Typescript/Javascript",
    des: "Adept at building reliable and maintainable applications with TypeScript and JavaScript, ensuring type safety and enhanced developer productivity.",
  },
];

export const extraSkills = [
  {
    id: 1,
    icon: FaReact,
  },
  {
    id: 2,
    icon: FaJs,
  },
  {
    id: 3,
    icon: BiLogoTypescript,
  },
  {
    id: 4,
    icon: SiNextdotjs,
  },
  {
    id: 5,
    icon: FaHtml5,
  },
  {
    id: 6,
    icon: FaCss3Alt,
  },
  {
    id: 7,
    icon: IoLogoFigma,
  },
  {
    id: 8,
    icon: FaGithub,
  },
  {
    id: 9,
    icon: FaGitAlt,
  },
  {
    id: 10,
    icon: FaBitbucket,
  },
  {
    id: 11,
    icon: RiTailwindCssFill,
  },
  {
    id: 12,
    icon: BiLogoPostgresql,
  },
  {
    id: 13,
    icon: SiGradle,
  },
  {
    id: 14,
    icon: DiMongodb,
  },
  {
    id: 15,
    icon: FaDocker,
  },
  {
    id: 16,
    icon: FaNode,
  },
  {
    id: 17,
    icon: SiExpress,
  },
];

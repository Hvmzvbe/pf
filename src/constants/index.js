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
  sante,
  tgr,
  jobit,
  blinker,
  threejs, carrent, python, java, spark, airflow, postgres, azure, hadoop, postman,
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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Data Engineer / Scientist",
    icon: mobile,
  },
  {
    title: "QA & Test Automation",
    icon: backend,
  },
  {
    title: "Cloud Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python ",
    icon: python,
  },
  {
    name: "Java ",
    icon: java,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Apache Airflow",
    icon: hadoop,
  },
  {
    name: "Apache Spark",
    icon: spark,
  },
  {
    name: "Apache Airflow",
    icon: airflow,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "Azure ",
    icon: azure,
  },
  {
    name: "React ",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MLOps Engineer Intern",
    company_name: "Trésorerie Générale du Royaume",
    icon: tgr,
    iconBg: "#383E56",
    date: "July 2025 - September 2025",
    points: [
      "Designing and training a Machine Learning model (XGBoost) to predict ATM withdrawal amounts and optimize treasury management.",
      "Developing a secure REST API with FastAPI, including JWT authentication and an intuitive user interface for prediction visualization.",
      "Deploying the solution on Azure Cloud Services through Docker containerization and implementing a CI/CD pipeline with GitHub Actions..",

    ],
  },
  {
    title: "Cybersecurity Intern",
    company_name: "Ministère de la Santé et de la Protection Sociale",
    icon: sante,
    iconBg: "#E6DEDD",
    date: "July 2024 - August 2024",
    points: [
      "Installing and configuring pfSense as the main network firewall to secure the organization's infrastructure.",
      "Defining filtering rules to secure incoming and outgoing traffic and implementing security policies across the network.",
      "Setting up a VPN (IPsec) for secure remote access and ensuring encrypted communication channels.",

    ],
  }/*,
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/
];

const testimonials = [
  {
    testimonial:
      "Thank you for the opportunity to collaborate. As an IT engineering student, this experience helped me grow technically and professionally, and I truly appreciate the support and teamwork.",
    name: "Yahya",
    designation: "Intern",
    company: "DXC Technology",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    testimonial:
      "Thank you for this opportunity. This experience helped me grow both technically and professionally, and I truly appreciate the support and teamwork.",
    name: "Ahmad",
    designation: "Intern",
    company: "Viseo",
    image: "https://randomuser.me/api/portraits/men/89.jpg",
  },
  {
    testimonial:
      "Hamza is a highly skilled developer who brings both technical depth and creative problem-solving to the table. His ability to build scalable software while maintaining clean code is impressive.",
    name: "Aya",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
  },
];

const projects = [
  {
    name: "MyMed",
    description:
      "Web-based platform that allows patients to search, book, and manage medical appointments with various healthcare providers, providing a convenient and efficient solution for healthcare needs.",
    tags: [
      {
        name: "angular",
        color: "pink-text-gradient",
      },
      {
        name: "spring boot",
        color: "green-text-gradient",
      },
      {
        name: "microservice",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Hvmzvbe/Systeme-de-gestion-medicale-springboot",
  },
  {
    name: "Olymp BI",
    description:
      "Analytics platform that enables users to discover medal rankings compare athlete performances across sports, and explore diversity metrics through Azure pipelines and BI reports.",
    tags: [
      {
        name: "azure",
        color: "blue-text-gradient",
      },
      {
        name: "dax",
        color: "green-text-gradient",
      },
      {
        name: "pyspark",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Hvmzvbe/azure-data-engineering-project-olympics",
  },
  {
    name: "Blinkers",
    description:
      "Social platform that enables students to join campus events, share posts with classmates, discuss topics in forums, and get instant support through an AI-powered chatbot assistant.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      /*{
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },*/
    ],
    image: blinker,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

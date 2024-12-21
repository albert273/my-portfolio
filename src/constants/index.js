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
  teamBdaya,
  dashboard,
  portfolio,
  ice,
  tripguide,
  material_UI,
  githubLogo,
  online_pharmacy,
  onlineStore,
  next,
  prisma,
  SelfTraining,
  Freelancer,
  mongodb,
  expressJs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-end Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Designer",
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
    name: "next.js",
    icon: next,
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
    name: "Material UI",
    icon: material_UI,
  },
  {
    name: "GitHub",
    icon: githubLogo,
  },
  {
    name: "prisma",
    icon: prisma,
  },
  {
    name: "Mongo DB",
    icon: mongodb,
  },
  {
    name: "Express.js",
    icon: expressJs,
  },
];

const experiences = [
  {
    title: "Front-end developer",
    company_name: "Team Bdaya",
    icon: teamBdaya,
    iconBg: "#ffffff",
    date: "May 2021 - September 2021",
    width: "45",
    hight:"45",
    points: [
      "Web Design: Designing user interfaces (UI) and user experiences (UX) that are visually appealing, easy to use, and intuitive.",
      "HTML/CSS/JavaScript: Writing code in HTML, CSS, and JavaScript to build and style web pages, ensuring they are responsive and compatible across different devices and browsers.",
      "Frameworks and Libraries: Using frameworks and libraries such as, React, to streamline development and enhance functionality.",
      "Testing and Debugging: Conducting testing and debugging to identify and fix issues related to front-end functionality, usability, and performance.",
      "Version Control: Using version control systems (e.g., Git) to manage and track changes to the codebase, collaborate with team members, and ensure code integrity.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancer",
    icon: Freelancer,
    iconBg: "red",
    date: "Jan 2023 - Jan 2024",
    width: "57",
    hight:"57",
    points: [
      "Client Consultation and Requirement Gathering, Initial Meetings: Discuss project requirements, goals, and timelines with clients.",
      "Website Design and PlanningUI/UX Design: Design user-friendly and visually appealing interfaces using Adobe XD.",
      "HTML/CSS: Build the structural and styling components of the website.",
      "JavaScript: Add interactivity and dynamic content to the site.",
      "Frameworks and Libraries: Utilize frameworks like React",
      "Back-End Development Server-Side Scripting: Develop server-side logic using languages ​​like Node.js",
      "Database Management: Set up and manage databases (SQL or NoSQL) to store and retrieve data.",
      "API Development: Create and integrate APIs for data exchange between the front end and back end."
    ],
  },
  {
    title: "Self-training",
    company_name: "in Home",
    icon: SelfTraining,
    iconBg: "#ffffff",
    date: "Jan 2021 - Present",
    width: "145",
    hight:"145",
    points: [
      "Develop and maintain web applications using React.js and other related technologies.",
      "Consistent and easy-to-use website design",
      "Implement responsive design and ensure cross-browser compatibility.",
      "Participate in code reviews and provide constructive feedback to other developers.",
      "Always learn new techniques for developing websites",
    ],
  },
];


const projects = [
  {
    name: "Admin Dashboard",
    description:
      " Admin Dashboard, your one-stop solution for managing and monitoring your business operations seamlessly and efficiently. This powerful, user-friendly platform is designed to provide administrators with real-time insights and control over all aspects of their operations, from analytics and reporting to user management and system monitoring.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "text-violet-600",
      },
      {
        name: "material_ui",
        color: "text-blue-600",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/albert273/Dashbourd",
  },
  {
    name: "Online Pharmacy",
    description:
      "An online pharmacy website allows customers to purchase medications and health products over the internet Users can browse products, submit prescriptions, place orders, and choose from various payment and delivery options. Key features include detailed product information, customer support, and a secure checkout process.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: ".Net",
        color: "green-text-gradient",
      },
      {
        name: "material_ui",
        color: "text-blue-600",
      },
    ],
    image: online_pharmacy,
    source_code_link: "https://github.com/albert273/PharmaPro",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Online Store",
    description:
      "Discover top-quality products at unbeatable prices. Enjoy a seamless shopping experience with fast shipping, secure transactions, and excellent customer service. Shop now for fashion, electronics, home essentials, and more. Sign up for exclusive deals and promotions. Happy shopping!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "text-violet-600",
      },
      {
        name: "material_ui",
        color: "text-blue-600",
      },
    ],
    image: onlineStore,
    source_code_link: "https://github.com/",
  },
  {
    name: "portfolio",
    description:
      " portfolio website is a crucial platform for showcasing the skills, projects, and professional journey. It serves as a dynamic resume, demonstrating my expertise and creativity to potential employers, clients, and collaborators,Responsive Design: Ensures seamless viewing on all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "text-violet-600",
      },
      {
        name: "material_ui",
        color: "text-blue-600",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/albert273/Portfolio",
  },
  {
    name: "Online Ice cream",
    description:
      " ice cream e-commerce website provides a convenient and delightful way for customers to purchase their favorite ice cream flavors online. This platform allows customers to explore a wide variety of ice cream options, place orders, and have their selections delivered directly to their doorstep.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "text-violet-600",
      },
      {
        name: "material_ui",
        color: "text-blue-600",
      },
    ],
    image: ice,
    source_code_link: "https://github.com/albert273/ice-Cream",
  },
];

export { services, technologies, experiences, projects };


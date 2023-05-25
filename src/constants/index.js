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
  starbucks,
  tesla,
  shopify,
  swipesetup,
  threejs,
  uc,
  gs,
  ga,
  chakraui,
  socketio,
  mernchatapp,
  reactWeatherApp,
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
    title: "React Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "socket.io",
    icon: socketio,
  },
  {
    name: "chakraui",
    icon: chakraui,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "General Assembly Singapore",
    icon: ga,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - May 2023",
    points: [
      "Skilled in developing front-end web applications using React and other modern JavaScript frameworks",
      "Proficient in creating full-stack applications using React with Next.js, Python with Django, and Express with Node.js",
      "Experienced in building secure applications by utilizing design patterns like MVC and REST",
      "Proficient in version control using Git and GitHub for efficient code management",
      "Modelling & storing data using SQL and NoSQL databases",
      "Capable of integrating third-party APIs to enhance web applications with additional functionalities",
      "Experienced in working on both group and solo projects, adapting to different collaborative environments and taking ownership of tasks",
    ],
  },
  {
    title: "Projects Manager",
    company_name: "GS Media",
    icon: gs,
    iconBg: "#383E56",
    date: "Nov 2017 - Present",
    points: [
      "Experienced in overseeing event planning, coordination, budgeting, vendor management, and client relations",
      "Proven track record of successfully executing diverse events",
      "Skilled in developing profitable business strategies",
      "Proficient in managing teams and optimizing budgets",
      "Implementing effective digital strategies to enhance event outcomes",
    ],
  },
  {
    title: "Event Production Supervisor",
    company_name: "Urban Creations Pte Ltd",
    icon: uc,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of collaborating with Wei Liang on our full-stack MERN project at GA. Wei Liang's remarkable analytical and logical dexterity were key in implementing complex sorting and filtering algorithms. His attention to detail, problem-solving abilities, and contributions significantly enhanced our app's user experience, particularly in relation to products, ratings, and reviews. I have full confidence that he will continue to excel in future projects.",
    name: "Alvin Lee",
    designation: "Founder ",
    company: "Omniv3rse",
    image:
      "https://media.licdn.com/dms/image/D5603AQGn2G7mYZfGMA/profile-displayphoto-shrink_800_800/0/1676371323564?e=1690416000&v=beta&t=2j36mP8KN7inC_1qU_NIpZsseYt09kCuY62PxUfNunU",
  },
  {
    testimonial:
      "Wei Liang is a highly skilled and talented full stack developer who works effectively with his classmates. Throughout our time studying together, Wei Liang consistently impressed us with his technical prowess in Javascript and ReactJS, and collaborative abilities. Given his exceptional work ethic and expertise in the field, I am confident that Wei Liang will be a successful developer. He will be a valuable asset for anyone in search of a dedicated and skilled team player.",
    name: "Irvinn Lim",
    designation: "Student ",
    company: "General Assembly",
    image:
      "https://media.licdn.com/dms/image/D5603AQFw-UsxhtOiVw/profile-displayphoto-shrink_800_800/0/1672741334061?e=1690416000&v=beta&t=dyrQeKdQJCYRAZ5xx7kYIxQgCsJO95tCz513OdLDcB0",
  },
];

const projects = [
  {
    name: "Mern Chat App",
    description:
      "Developed a simple realtime chat application made using React JS, a JavaScript library for building user interfaces by Facebook, Node JS, Express JS, Socket.io, and MongoDB",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "chakraui",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: mernchatapp,
    newIcon: false,
    source_code_link: "https://github.com/weilianglee87/mern-chat-app",
  },
  {
    name: "swipe-setups",
    description:
      "Collaborating with other developers on creating a rating and review website for computer desk setups using MongoDB, Express, React and Node",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "chakraui",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: swipesetup,
    newIcon: true,
    source_code_link: "https://swipe-setups.netlify.app/",
  },
  {
    name: "React-Weather-App",
    description:
      "Developed a frontend weather app that utilizes the OpenWeatherMap API to fetch and display weather data to users",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: reactWeatherApp,
    newIcon: false,
    source_code_link: "https://github.com/weilianglee87/React-Weather-App",
  },
];

export { services, technologies, experiences, testimonials, projects };

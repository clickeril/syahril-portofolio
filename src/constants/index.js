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
    tailwind,
    nodejs,
    php,
    laravel,
    git,
    figma,
    carrent,
    jobit,
    tripguide,
    projectSkifte,
    skifte,
    jagoit,
    lingian,
    monkeys,
    curaweda,
    vite,
    projectCompany,
    projectcalenderize,
    projectmonkeys,
    projecthrd,
    projecterp,
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
      title: "UI / UX Designer",
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
      name: "Vite",
      icon: vite,
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
      name: "PHP",
      icon: php,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Ecommerce Website",
      company_name: "Skifte",
      icon: skifte,
      iconBg: "#EEEEEE",
      date: "year of 2022",
      points: [
        "Developed a fully responsive e-commerce website using only HTML and CSS.",
        "Designed a clean, modern, and user-friendly interface to enhance the shopping experience.",
        "Implemented structured layouts, intuitive navigation, and engaging product displays.",
        "Ensured cross-browser compatibility and mobile responsiveness for seamless access on all devices.",
      ],
    },
    {
      title: "CRM & CM",
      company_name: "PT Jago Talenta Indonesia",
      icon: jagoit,
      iconBg: "#EEEEEE",
      date: "year of 2023",
      points: [
        "Contributed to the CRM & CM web-based project, designed to manage customer data and enhance business relationships through technology.",
        "Worked as part of a six-member Back-End team, utilizing Laravel framework, SQL, and PHP.",
        "Designed and analyzed database structures, including UML modeling for efficient data management.",
      ],
    },
    {
      title: "Lingian Hotel",
      company_name: "PT Curaweda Palagan Innotech",
      icon: curaweda,
      iconBg: "#EEEEEE",
      date: "year of 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Monkeys (NFT Platform)",
      icon: monkeys,
      iconBg: "#EEEEEE",
      date: "year 2024",
      points: [
        "NFT Minting, Integrated smart contracts to allow users to mint and own unique NFTs.",
        "Blockchain & Web3, Utilized Solidity, Web3.js, and Ethereum blockchain to power the platform.",
        "React.js UI, Designed an interactive and responsive front-end for an intuitive user experience.",
        "Secure & Scalable, Implemented backend logic to ensure smooth, secure NFT transactions.",
      ],
    },
    {
      title: "UI / UX Designer",
      company_name: "PT Curaweda Palagan Innotech",
      icon: curaweda,
      iconBg: "#EEEEEE",
      date: "year 2024 - present",
      points: [
        "User Research & Wireframing, Conducted research to understand user needs and translated insights into wireframes & prototypes.",
        "UI Design, Designed clean and modern interfaces with a focus on usability and accessibility.",
        "Collaboration, Worked closely with developers, product managers, and stakeholders to align design with business goals.",
        "Interactive Prototyping, Developed interactive prototypes to enhance user testing and design validation.",
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
      name: "Skifte Store",
      description:
        "Skifte Store is the official e-commerce platform of the Skifte brand, offering high-quality products with a seamless and modern shopping experience",
      tags: [
        {
          name: "Vite",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
      ],
      image: projectSkifte,
      source_code_link: "https://github.com/",
    },
    {
      name: "Web Wordpress",
      description:
        "We create professional and high-performing landing pages using WordPress, ensuring a visually appealing design, seamless functionality, and a great user experience.",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
      ],
      image: projectCompany,
      source_code_link: "https://github.com/",
    },
    {
      name: "Calenderize",
      description:
      "web-based platform that simplifies the management of employee leave, and permissions within a company, ensuring a more efficient and organized administration.",
      tags: [
        {
          name: "React Js",
          color: "blue-text-gradient",
        },
        {
          name: "Express Js",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: projectcalenderize,
      source_code_link: "https://github.com/",
    },
    {
      name: "Monkeys",
      description:
      "Monkeys is an NFT platform that enables users to easily mint their own NFTs, providing a seamless, secure, and efficient experience for digital asset creation and management.",
      tags: [
        {
          name: "React Js",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Solidity",
          color: "pink-text-gradient",
        },
      ],
      image: projectmonkeys,
      source_code_link: "https://github.com/",
    },
    {
      name: "HRD",
      description:
        "Designing an intuitive and efficient UI/UX for HRD to streamline employee payroll management, ensuring a seamless and user-friendly experience.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
      ],
      image: projecthrd,
      source_code_link: "https://github.com/",
    },
    {
      name: "ERP",
      description:
        "Designing UI/UX for an ERP system tailored to managing poultry farming operations, ensuring efficiency, usability, and seamless farm management.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
      ],
      image: projecterp,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
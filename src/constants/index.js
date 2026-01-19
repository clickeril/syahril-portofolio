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
  python,
  projectCompany,
  projectcalenderize,
  projectmonkeys,
  projecthrd,
  projecterp,
  projectpark,
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
    {
      name: "Pyhton",
      icon: python,
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
      title: "Full stack Dev",
      company_name: "PT Ramat Loka Teknologi-Monkeys (NFT Platform)",
      icon: monkeys,
      iconBg: "#EEEEEE",
      date: "year of 2024",
      points: [
        "NFT Minting, Integrated smart contracts to allow users to mint and own unique NFTs.",
        "Blockchain & Web3, Utilized Solidity, Web3.js, and Ethereum blockchain to power the platform.",
        "React.js UI, Designed an interactive and responsive front-end for an intuitive user experience.",
        "Secure & Scalable, Implemented backend logic to ensure smooth, secure NFT transactions.",
      ],
    },
    {
      title: "Front-End Dev & (UI/UX)",
      company_name: "PT Curaweda Palagan Innotech",
      icon: curaweda,
      iconBg: "#EEEEEE",
      date: "year of 2024",
      points: [
        "Build modern interfaces tailored to project requirements and UX principles.",
        "Conduct user research and create wireframes, translating insights into prototypes.",
        "Design clean, consistent, and accessible user interfaces.",
        "Collaborate across teams to align design with business goals.",
        "Develop interactive prototypes for user testing and design validation before full development.",
      ],
    },
    {
      title: "Operations Team",
      company_name: "PT Curaweda Palagan Innotech",
      icon: curaweda,
      iconBg: "#EEEEEE",
      date: "2025 - present",
      points: [
        "Create and maintain clear documentation (SOPs, process notes, and project records).",
        "Write meeting minutes and track action items with owners and due dates.",
        "Build project timelines/roadmaps and keep progress up to date.",
        "Draft PRDs (problem definition, scope, user stories, acceptance criteria).",
        "Prepare PKS (partnership/collaboration agreements) drafts with stakeholders and legal.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial: "Pengerjaan cepat, komunikasi baik.",
      name: "Hafizh",
      designation: "Freelancer Mobile Apps",
      company: "-",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      testimonial:
        "Tampilan yang dibuat keren, hasil pengerjaan sangat sesuai dengan yang diharapkan.",
      name: "Adi Rachmadi",
      designation: "Manager",
      company: "Inhoftank Motor",
      image: "https://randomuser.me/api/portraits/men/66.jpg",
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
        {
          name: "Laravel",
          color: "green-text-gradient",
        },
      ],
      image: projecterp,
      source_code_link: "https://github.com/",
    },
    {
      name: "Parking Management",
      description:
        "A Parking Management System designed to manage parking operations with an analytics dashboard, detailed reports of vehicle entries and exits, and a member management feature that applies discounted pricing.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
      ],
      image: projectpark,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
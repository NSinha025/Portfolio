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
    etfinal,
    mongodb,
    git,
    figma,
    smtfinal,
    cppfinal,
    docker,
    meta,
    tesla,
    shopify,
    carrent,
    jobit,
    thirdeyefinal,
    tripguide,
    threejs,
    fwsfinal,
    ccfinal
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
      id: "Works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Web Developer ",
      icon: web,
      details: "HTML, CSS, JavaScript, ReactJS"
    },
    {
      title: "Backend Web Developer",
      icon: mobile,
      details: "NodeJS, Go, MongoDB, PostgreSQL, MySQL, NextJS"
    },
    {
      title: "AI/ML",
      icon: creator,
      details: "Python, LLM, NLP, CNN"
    },
    {
      title: "Data Analyst",
      icon: backend,
      details: "Python, Scikit-learn, Tableau, MS Excel"
    }
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
      name: "Three JS",
      icon: threejs,
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
      title: "Software Developer Intern",
      company_name: "Flatworld Solutions",
      icon: fwsfinal,
      iconBg: "#383E56",
      date: "May 2023 - June 2023",
      points: [
        "Developed C Sharp and Dotnet website",
        "Learned Asp.net"
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "CodeClause",
      icon: ccfinal,
      iconBg: "#E6DEDD",
      date: "May 2023 - June 2023",
      points: [
        "Made a To-Do-List using Python, JavaScript and PHP as backend",
        "Made a Timer and Stopwatch website using HTML, CSS, JS",
        "Made a GitHub Explorer Website using HTML, CSS, JS",
      ]
    }
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Third Eye",
      description:
        "Decentralized video-sharing platform on blockchain with EYEs cryptocurrency. Transparent transactions, smart contracts for creator earnings, micro-payments, balanced moderation, recommednation system and user-friendly interface.",
      tags: [
        {
          name: "blockchain",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "ML",
          color: "pink-text-gradient",
        },
      ],
      image: thirdeyefinal,
      source_code_link: "https://github.com/Jayanti2919/ThirdEye",
    },
    {
      name: "Car-Price Predictor",
      description:
        "Developed a website using Flask serving as the backend with HTML as the frontend. Trained on Quickr Dataset. Get prices of your car using linear regression model",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "ML",
          color: "pink-text-gradient",
        },
      ],
      image: cppfinal,
      source_code_link: "https://github.com/NSinha025/Car-Price-Predictor",
    },
    {
      name: "Stock-market Tracker",
      description:
        "Developed a Website using Flask which uses API to fetch Stocks and HTML as Frontend. It shows the graph and current price of the stocks using real time APIs. Implemented dark mode and light mode",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
      ],
      image: smtfinal,
      source_code_link: "https://github.com/NSinha025/Stock-Market-Tracker",
    },
    {
      name: "Expense Tracker",
      description:
        "Developed a Full Stack Website using MERN stack. Track all your Outgoings and Incoming Income and expenses using this friendly and Responsive Website",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node",
          color: "green-text-gradient",
        },
        {
          name: "Mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: etfinal,
      source_code_link: "https://github.com/NSinha025/Expense_Tracker",
    },
  ];
  
  export { services, technologies, experiences, projects };
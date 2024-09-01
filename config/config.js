
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Sumeet",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Experience",
      link: "#experience",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
   
  ],
}
export const intro = {
  title: "Hey, I'm Sumeet",
  description: "A Software Developer specializing in building full-stack applications, mobile apps, and websites.",
  image: profile.src ,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1ug8s5upy15xx0d40TIShNrpqTYHNJzbK/view?usp=drive_link",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I graduated with a B.Tech in 2024 and embarked on my career as a Full Stack Developer specializing in the MERN stack. Currently, I am a Software Developer at Cloudastra Technologies. I began developing applications using React Native and have cultivated strong expertise in AWS, Docker, microfrontends, and microservices.",
    "The tech landscape is continually evolving, and I am passionate about growing alongside it while reinforcing the core principles. I am dedicated to open-sourcing my code to assist future developers, teammates, and users, with a focus on accessibility. Additionally, I enjoy contributing to tech communities, mentoring new developers, and supporting initiatives that promote diversity in the industry.",
    "When I’m not coding, I engage in hobbies such as diary writing, doodling, meeting people, and expanding my network.",
  ],
}

export const work = {
  title: "What I Do",
  cards: [
    {
      title: "Full Stack Development",
      description: "I build dynamic web applications using the MERN stack, integrating both front-end and back-end technologies.",
      icons: null,
    },
    {
      title: "Cloud Technologies",
      description: "I leverage AWS for cloud solutions, including deployment and scaling of applications.",
      icons: null,
    },
    {
      title: "Containerization and Microservices",
      description: "I use Docker for containerization and work with microservices architecture to build scalable and maintainable systems.",
      icons: null,
    },
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Expense Tracker App",
      description: "A comprehensive app to manage your expenses, track your financial habits, and gain insights into your spending patterns over time.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/sumeetmishra1/Expense-Tracker-App",
        },
      ],
    },
    {
      title: "Group Chat App",
      description: "A real-time group chat application designed for seamless communication, featuring user authentication and message encryption.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/sumeetmishra1/Group-chatApp",
        },
      ],
    },
    {
      title: "ShopCart",
      description: "An e-commerce platform template with features for browsing products, managing a shopping cart, and a seamless checkout process.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/sumeetmishra1/Shopcart",
        },
      ],
    },
  ],
}

export const experience = {
  title: "Experience",
  cards: [
    {
      title: "Necxis",
      subtitle: "(Backend Developer)",
      description:"Focused on designing and implementing APIs, enhancing system communication with gRPC and Socket.io.",
      duration: "Jan 2024 - May 2024",
      
    },
    {
      title: "Cloudastra Technologies",
      subtitle: "(Full Stack Developer)",
      description: "Developed and maintained full-stack applications using the MERN stack. Leveraged AWS and Docker for scalable cloud solutions.",
      duration:"May 2024 - Present",
      
    }
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at sumitsfs0@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:sumitsfs0@gmail.com",
      isPrimary: true,
    },
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/sumeet630/",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Sumeet Mishra | Computer Engineer | Full Stack developer",
  description: "I create Full Stack Web Application And mobile application",
  image: profile.src,
}

import youstore from "./images/youstore.jpeg";
import audophile from "./images/audophile.jpeg";
import crwn from "./images/crwn.jpeg";
import crypto from "./images/crypto.jpeg";
import music from "./images/musicplayer.jpeg";

let resumeData = {
  imagebaseurl: "",
  name: "Victor Miene",
  role: "Software Engineer who works primarily on the backend",
  linkedinId: "https://www.linkedin.com/in/victormiene/",
  email: "viktormiene.vm@gmail.com",
  skypeid: "",
  roleDescription: "",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/victormiene/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "https://github.com/Douyemiene",
      className: "fa fa-github",
    },
    {
      name: "skype",
      url: "https://twitter.com/DouyeSzn",
      className: "fa fa-twitter",
    },
  ],
  aboutme:
    "👋🏽 Hi, my name is Victor. I am a graduate with a Bachelor's of Engineering, Electrical and Electronics Engineering . (July 2021). \n I am experienced in developing and maintaining the backend of enterprise applications. Interested about applying my understanding of distributed systems to help create reliable software systems.",
  address: "Lagos, Nigeria",
  website: "",
  education: [
    {
      UniversityName: "Niger Delta University",
      specialization: "Electrical and Electronics Engineering",
      MonthOfPassing: "Jul",
      YearOfPassing: "2020",
      Achievements: "First Class Honors (4.61/5.00)",
    },
  ],
  work: [
    {
      CompanyName: "Youverify",
      specialization: "Backend Engineer",
      MonthOfLeaving: "",
      YearOfLeaving: "Sept 2022 - Present",
      Achievements:
        "Contributed to the design and development of Youverify’s address verification product, which resulted in the automation of the confirmation of over a million physical addresses of individuals and businesses.",
    },
    {
      CompanyName: "",
      specialization: "Software Engineer Intern",
      MonthOfLeaving: "",
      YearOfLeaving: "Dec 2021 - Aug 2022",
      Achievements:
        "Optimized time duration for unit tests by 80% by redesigning test suites to utilize mocks to mimic asynchronous calls to external APIs",
    },
    {
      CompanyName: "Genesys Tech Hub",
      specialization: "Software Engineer Intern",
      MonthOfLeaving: "",
      YearOfLeaving: "Aug 2021 - Dec 2021",
      Achievements:
        "Collaborated, within a team of 5 developers, to build an educational platform that enlightens students about the African continent. ",
    },
  ],
  skillsDescription:
    "JavaScript, Nodejs, MongoDB, Elastic search, RabbitMQ, GRPC, Docker, Data structures and Algorithms, React, Nextjs, Python.",
  skills: [],
  portfolio: [
    {
      name: "Audophile E-commerce",
      description: "",
      imgurl: audophile,
      github: "https://github.com/Douyemiene/Audophile-Ecommerce",
      url: "https://audophile-ecommerce.vercel.app",
    },
    {
      name: "Music Player Dashboard",
      description: "Youstore",
      imgurl: music,
      github: "https://github.com/Douyemiene/music-player",
      url: "https://music-player-liard-rho.vercel.app/",
    },
    {
      name: "Crwn clothing",
      description: "Youstore",
      imgurl: crwn,
      github: "https://github.com/Douyemiene/e-shop",
      url: "https://e-shop-coral.vercel.app",
    },
    {
      name: "Youstore",
      description: "Youstore",
      imgurl: youstore,
      github: "https://github.com/Douyemiene/youstore-order-service",
      url: "https://youstore-staging.netlify.app/",
    },
    {
      name: "Crypto Dashboard",
      description: "Youstore",
      imgurl: crypto,
      github: "https://github.com/Douyemiene/crypto-dashboard",
      url: "https://dashboard-cs.vercel.app/",
    },
  ],
  testimonials: [],
};

export default resumeData;

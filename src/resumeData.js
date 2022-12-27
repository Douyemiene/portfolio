import youstore from "./images/youstore.jpeg";
import audophile from "./images/audophile.jpeg";
import crwn from "./images/crwn.jpeg"
import crypto from "./images/crypto.jpeg"

let resumeData = {
  imagebaseurl: "",
  name: "Victor Miene",
  role: "Backend Engineer",
  linkedinId: "https://www.linkedin.com/in/victormiene/",
  email: "viktormiene.vm@gmail.com",
  skypeid: "",
  roleDescription:
    " I like dabbling in various parts of software engineering and like to learn about new technologies.",
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
  email: "viktormiene.vm@gmail.com",
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
      Achievements: "",
    },
    {
      CompanyName: "Youverify",
      specialization: "Software Engineer intern",
      MonthOfLeaving: "",
      YearOfLeaving: "Dec 2021 - Aug 2022",
      Achievements: "",
    },
    {
      CompanyName: "Genesys Tech Hub",
      specialization: "Software Engineer Intern",
      MonthOfLeaving: "",
      YearOfLeaving: "Aug 2021 - Dec 2021",
      Achievements: "",
    },
  ],
  skillsDescription:
    "JavaScript, Nodejs, MongoDB, Elastic search, RabbitMQ, GRPC, Docker, Data structures and Algorithms, React, Nextjs, Python.",
  skills: [],
  portfolio: [
    {
      name: "Audophile",
      description: "mobileapp",
      imgurl: audophile,
      url: "https://audophile-ecommerce.vercel.app",
    },
    {
      name: "Crypto Dashboard",
      description: "Youstore",
      imgurl: crypto,
      url: "https://dashboard-cs.vercel.app/",
    },
    {
      name: "Youstore",
      description: "Youstore",
      imgurl: youstore,
      url: "https://youstore-staging.netlify.app/",
    },
    {
      name: "Crwn clothing",
      description: "Youstore",
      imgurl: crwn,
      url: "https://e-shop-coral.vercel.app",
    },
  ],
  testimonials: [],
};

export default resumeData;

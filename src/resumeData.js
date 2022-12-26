import youstore from "./images/youstore.jpeg";
import audophile from "./images/audophile.jpeg";

let resumeData = {
  imagebaseurl: "",
  name: "Victor Miene",
  role: "Backend Engineer",
  linkedinId: "https://www.linkedin.com/in/victormiene/",
  email: "viktormiene.vm@gmail.com",
  skypeid: "",
  roleDescription:
    "I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",
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
  website: "https://rbhatia46.github.io",
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
      specialization: "Software Engineer",
      MonthOfLeaving: "",
      YearOfLeaving: "Dec 2021 - Present",
      Achievements: "Some Achievements",
    },
    {
      CompanyName: "Genesys Tech Hub",
      specialization: "Software Engineer Intern",
      MonthOfLeaving: "",
      YearOfLeaving: "Aug 2021 - Dec 2021",
      Achievements: "Some Achievements",
    },
  ],
  skillsDescription:
    "JavaScript, Nodejs, MongoDB, Elastic search, RabbitMQ, GRPC, Docker Data structures and Algorithms, React, Python.",
  skills: [],
  portfolio: [
    {
      name: "Audophile",
      description: "mobileapp",
      imgurl: audophile,
    },
    {
      name: "Youstore",
      description: "Youstore",
      imgurl: youstore,
      url: "https://youstore-staging.netlify.app/",
    },
    {
      name: "Youstore",
      description: "Youstore",
      imgurl: youstore,
      url: "https://youstore-staging.netlify.app/",
    },
    {
      name: "Youstore",
      description: "Youstore",
      imgurl: youstore,
      url: "https://youstore-staging.netlify.app/",
    },
  ],
  testimonials: [],
};

export default resumeData;

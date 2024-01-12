// To change portfolio colors globally go to the  _globalColor.scss file
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "ALPHA",
  title: "Hi, I'm Albert Prido ",
  subTitle: emoji("ALPHA my chosen code name, represents my journey as a budding coder aspiring to become a programmer with a ninja ways."),
  resumeLink:"https://drive.google.com/file/d/1K8aqCIBMUxTfviE4Bez1SwJePm7EpkFc/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

const socialMediaLinks = {
  github: "https://github.com/Albertt1509",
  linkedin: "https://www.linkedin.com/in/albertus-prido-nathanael-16273b262/",
  gmail: "nathanael3321@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100070822304567",
  wa:"https://wa.me/qr/T7TWBXQRR3LCN1 ",
  instagram:"https://www.instagram.com/albert.jsx/",
  display: true 
};

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [  
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql & non-sql -database",
      fontAwesomeClassname: "fas fa-database"
    },    
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
  {
    schoolName: "Soegijaprantana Catholic University",
    logo: require("./assets/images/scu.png"),
    subHeader: "Bachelor of Information Systems",
    duration: "2020 - Now",
  },
    {
      schoolName: "Xaverius Pringsewu High School",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Natural Sciences Major",
      duration: "2018 - 2020",
    }
  ]
};

const techStack = {
};

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fullstack Web Developer intern",
      company: "CV Medisimed",
      companylogo: require("./assets/images/Full-Stack-Developer.png"),
      date: "January 2023 – April 2023",
      desc: "Make a system for clinic Bina Sehat Semarang ",

    },
    {
      role: "Front-End Web Developer intern",
      company: "Sinergi Merah Putih",
      companylogo: require("./assets/images/Mengenal-Front-End-Web-Developer.webp"),
      date: "July 2023 – December 2023",
      desc: "Make a admin dashboard for Sinergy Merah Putih "
    },
    {
      role: "Freelancer",
      company: "Freelance",
      companylogo: require("./assets/images/Freelancer.jpg"),
      date: "-",
      desc: "Make a project for client"
    },
  
  ]
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/logo.png"),
      projectName: "AlphaNime",
      projectDesc: "Steaming anime with react & public api",
      footerLink: [
        {
          name: "Code",
          url: "https://github.com/Albertt1509/AlphaNime.git"
        }
      ]
    },
    {
      image: require("./assets/images/kurukuru1.png"),
      projectName: "Kuru Kuru Store",
      projectDesc: "Simple E-commerce using Laravel",
      footerLink: [
        {
          name: "Code",
          url: "https://github.com/Albertt1509/ecommerce.git"
        }
      ]
    },
    {
      image: require("./assets/images/Sakua.png"),
      projectName: "Sakura Kost",
      projectDesc: "Booking  boarding house using MERN Stack",
      footerLink: [
        {
          name: "Code",
          url: "https://github.com/Albertt1509/SakuraKost-skripsi.git"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "See More....",
      projectDesc: "All My Project",
      footerLink: [
        {
          name: "All My Project Code",
          url: "https://github.com/Albertt1509/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and I have done!",
  achievementsCards: [
    {
      title: "CV Medisimed",
      subtitle: "Completed Certifcation from CV Medisimed as a Web Developer",
      image: require("./assets/images/unika_1.png"),
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1rtUM7D8zjA9hz2SZcrYZoT0O4FZvzfCV/view?usp=sharing"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const blogSection = {

};


const talkSection = {
};

// Podcast Section

const podcastSection = {

};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:"Explore a project together or perhaps something else? My inbox eagerly awaits your ideas and collaboration.",
  number: "+62895613308484",
  email_address: "nathanael33210@gmail.com"
};

// Twitter Section

const twitterDetails = {

};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};

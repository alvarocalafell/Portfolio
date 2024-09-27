// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Alvaro Calafell",
  title: "Hi all, I'm Alvaro",
  subTitle: emoji(
    "A passionate AI/ML Researcher and Data Scientist with experience in developing cutting-edge machine learning models, vision-language models, and efficient AI systems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1DWtACOD1llYBXpTH0rYySPpTiE-am3h-/view?usp=sharing",
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/alvarocalafell",
  linkedin: "https://www.linkedin.com/in/alvarocalafell/",
  gmail: "alvarocalafell@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Ecole Polytechnique & HEC Paris",
      logo: require("./assets/images/HEC-X.jpg"), // Add this logo to your assets
      subHeader: "MSc in Data Science",
      duration: "2022 - 2024",
      desc: "Pursuing advanced studies in Data Science, Machine Learning, and Artificial Intelligence.",
      descBullets: [
        "Focused on cutting-edge ML/AI techniques and their applications",
        "Engaged in research projects pushing the boundaries of AI technology"
      ]
    },
    {
      schoolName: "Universitat Politecnica de Catalunya (Barcelona-Tech)",
      logo: require("./assets/images/upc.png"), // Add this logo to your assets
      subHeader: "BSc in Industrial Engineering",
      duration: "2017 - 2021",
      desc: "Graduated in the top 10% of the program. Specialized in data analysis and machine learning applications in industrial settings.",
      descBullets: [
        "Developed a strong foundation in mathematics, statistics, and programming",
        "Completed projects applying ML techniques to industrial problems"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Machine Learning / AI",
      progressPercentage: "95%"
    },
    {
      Stack: "Data Analysis & Visualization",
      progressPercentage: "90%"
    },
    {
      Stack: "Software Engineering",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "AI/ML Researcher",
      company: "Stanford University",
      companylogo: require("./assets/images/stanfordLogo.png"), // Add this logo to your assets
      date: "Feb 2024 – Present",
      desc: "Developing cutting-edge ML research focusing on meta-learning and hypernetworks for efficient tabular data classification.",
      descBullets: [
        "Leading the development of HyperFast v2, a highly distributed meta-trained hypernetwork",
        "Achieved 14% improvement in model generalization across diverse data scenarios",
        "Optimized model architecture, reducing inference time by 30%"
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "Criteo",
      companylogo: require("./assets/images/criteoLogo.png"), // Add this logo to your assets
      date: "Apr 2023 – Sep 2023",
      desc: "Developed tools and conducted analyses to improve ad targeting and campaign performance.",
      descBullets: [
        "Created a tailored audiences tool, increasing conversion rates by 17%",
        "Designed and executed A/B testing frameworks, improving ad spend efficiency by 13%"
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "Conecta2 Energia",
      companylogo: require("./assets/images/conecta2Logo.jpeg"), // Add this logo to your assets
      date: "Mar 2021 – Jun 2021",
      desc: "Optimized energy purchase strategies and developed models for photovoltaic solar plants.",
      descBullets: [
        "Developed a predictive model with <4% variability, resulting in €200k cost reduction",
        "Implemented an optimization model for new solar plants, reducing startup costs by 12%"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};


// Big projects section

const bigProjects = {
  title: "Major Projects",
  subtitle: "SIGNIFICANT AI AND ML PROJECTS I'VE WORKED ON",
  projects: [
    {
      //image: require("./assets/images/hyperfastLogo.png"), // Create and add this logo
      projectName: "HyperFast v2",
      projectDesc: "A highly distributed meta-trained hypernetwork for instant tabular data classification",
      footerLink: [
        {
          name: "View Project",
          //url: "https://github.com/alvarocalafell/hyperfast-v2" // Add the actual link when available
        }
      ]
    },
    {
      //image: require("./assets/images/stableDiffusionLogo.png"), // Create and add this logo
      projectName: "Stable Diffusion from Scratch",
      projectDesc: "Implementation of Stable Diffusion model using PyTorch",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/alvarocalafell/stable-diffusion-from-scratch"
        }
      ]
    },
    {
      //image: require("./assets/images/podcastsGraphRAGLogo.png"), // Create and add this logo
      projectName: "Podcasts GraphRAG",
      projectDesc: "Graph Retrieval-Augmented Generation system for podcast analysis",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/alvarocalafell/podcasts-graphrag"
        }
      ]
    }
  ],
  display: true
};



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  isHireable,
  resumeSection
};

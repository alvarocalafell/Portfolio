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
  title: emoji("Hi, I'm Alvaro 👋"),
  subTitle: emoji(
    "A passionate AI/ML Researcher and Data Scientist with expertise in efficient machine learning systems, vision-language models, and cutting-edge AI research. I combine technical innovation with practical solutions to solve complex problems in the AI space."
  ),
  description: emoji(
    "Welcome to my portfolio! Here you'll find my latest research, projects, and publications in artificial intelligence and machine learning. I'm currently focused on developing scalable AI systems and exploring the intersection of computer vision and natural language processing."
  ),
  callToAction:
    "Let's connect and explore how we can collaborate on innovative AI solutions!",
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
      logo: require("./assets/images/HEC-X.png"), // Add this logo to your assets
      subHeader: "MSc in Data Science",
      duration: "2022 - 2024",
      desc: "Pursuing advanced studies in Data Science, Machine Learning, and Artificial Intelligence.",
      descBullets: [
        "Specialized in **deep learning architectures** and **efficient AI systems**",
        "Conducted research on **meta-learning** and **hypernetworks** for tabular data",
        "Developed **vision-language models** and **multimodal systems**"
      ]
    },
    {
      schoolName: "Universitat Politecnica de Catalunya (Barcelona-Tech)",
      logo: require("./assets/images/upc.png"), // Add this logo to your assets
      subHeader: "BSc in Industrial Engineering",
      duration: "2017 - 2021",
      desc: "Graduated in the top 10% of the program. Specialized in data analysis and machine learning applications in industrial settings.",
      descBullets: [
        "Developed a strong foundation in **mathematics**, **statistics**, and **programming**",
        "Completed projects applying **ML techniques** to industrial problems",
        "Focused on **optimization algorithms** and **data-driven decision making**"
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
      Stack: "Deep Learning & Neural Networks",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Analysis & Visualization",
      progressPercentage: "90%"
    },
    {
      Stack: "Software Engineering",
      progressPercentage: "85%"
    },
    {
      Stack: "MLOps & AI Systems",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  subtitle: "MY PROFESSIONAL JOURNEY AND CONTRIBUTIONS",
  experience: [
    {
      role: "AI/ML Researcher",
      company: "Stanford University",
      companylogo: require("./assets/images/stanfordLogo.png"), // Add this logo to your assets
      companyUrl: "https://www.stanford.edu/",
      date: "Feb 2024 – Present",
      desc: "Leading cutting-edge ML research focusing on meta-learning and hypernetworks for efficient tabular data classification.",
      descBullets: [
        "Developing HyperFast v2, a highly distributed meta-trained hypernetwork for tabular data",
        "Achieved 14% improvement in model generalization across diverse data scenarios",
        "Optimized model architecture, reducing inference time by 30%",
        "Collaborating with cross-functional teams to implement research findings in production systems"
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "Criteo",
      companylogo: require("./assets/images/criteoLogo.png"), // Add this logo to your assets
      companyUrl: "https://www.criteo.com/",
      date: "Apr 2023 – Sep 2023",
      desc: "Developed tools and conducted analyses to improve ad targeting and campaign performance.",
      descBullets: [
        "Created a tailored audiences tool, increasing conversion rates by 17%",
        "Designed and executed A/B testing frameworks, improving ad spend efficiency by 13%",
        "Implemented data pipelines for real-time analytics and reporting",
        "Collaborated with marketing teams to optimize campaign strategies based on data insights"
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "Conecta2 Energia",
      companylogo: require("./assets/images/conecta2Logo.jpeg"), // Add this logo to your assets
      companyUrl: "https://www.conecta2energia.com/",
      date: "Mar 2021 – Jun 2021",
      desc: "Optimized energy purchase strategies and developed models for photovoltaic solar plants.",
      descBullets: [
        "Developed a predictive model with <4% variability, resulting in €200k cost reduction",
        "Implemented an optimization model for new solar plants, reducing startup costs by 12%",
        "Created dashboards for real-time monitoring of energy consumption and production",
        "Analyzed historical data to identify patterns and optimize energy purchasing decisions"
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
  subtitle: "INNOVATIVE AI AND ML PROJECTS I'VE DEVELOPED",
  projects: [
    {
      //image: require("./assets/images/transformerLogo.png"), // Create and add this logo
      projectName: "Transformer from Scratch",
      projectDesc:
        "Implemented a complete Transformer model based on the groundbreaking 'Attention Is All You Need' paper using PyTorch. Developed an English-to-Italian translator with a modular architecture that can be easily adapted to other language pairs through configuration files. The implementation includes multi-head attention mechanisms, positional encodings, and transformer encoder-decoder blocks.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/alvarocalafell/transformer-from-scratch"
        },
        {
          name: "Technical Report",
          url: "https://github.com/alvarocalafell/transformer-from-scratch/blob/main/README.md"
        }
      ]
    },
    {
      //image: require("./assets/images/paligemmaLogo.png"), // Create and add this logo
      projectName: "Multimodal Language Model from Scratch",
      projectDesc:
        "Built a vision-language model (similar to PaliGemma/Gemma) from scratch using only Python and PyTorch. Implemented cross-modal attention mechanisms to enable the model to understand and generate text based on visual inputs. The architecture includes a vision encoder, text encoder, and decoder components with efficient parameter sharing and optimization techniques.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/alvarocalafell/Gemma-MLM-from-scratch"
        },
        {
          name: "Technical Report",
          url: "https://github.com/alvarocalafell/Gemma-MLM-from-scratch/blob/main/README.md"
        }
      ]
    },
    {
      //image: require("./assets/images/stableDiffusionLogo.png"), // Create and add this logo
      projectName: "Stable Diffusion from Scratch",
      projectDesc:
        "Developed a complete implementation of Latent Diffusion Models (Stable Diffusion) using PyTorch. Built the U-Net architecture with attention mechanisms, implemented the diffusion process (forward and reverse), and integrated CLIP text conditioning. Optimized the model for efficient inference on consumer hardware and created a user-friendly interface for text-to-image generation.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/alvarocalafell/stable-diffusion-from-scratch"
        },
        {
          name: "Demo",
          url: "https://huggingface.co/spaces/alvarocalafell/stable-diffusion-demo"
        }
      ]
    },
    {
      //image: require("./assets/images/vectorDBLogo.png"), // Create and add this logo
      projectName: "Vector Database API",
      projectDesc:
        "Created a Python-based REST API for a vector database with comprehensive CRUD operations and k-Nearest Neighbors (kNN) search capabilities. Implemented efficient vector indexing for fast similarity search, optimized for high-dimensional embeddings used in AI applications. The system includes authentication, rate limiting, and comprehensive documentation using OpenAPI/Swagger.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/alvarocalafell/vector-database-api"
        },
        {
          name: "API Documentation",
          url: "https://github.com/alvarocalafell/vector-database-api/blob/main/README.md"
        }
      ]
    },
    {
      //image: require("./assets/images/methaneLogo.png"), // Create and add this logo
      projectName: "Methane Emission Detection",
      projectDesc:
        "Developed an AI system to detect methane plumes from infrared satellite imagery. Combined transfer learning with PyTorch-based CNNs in an ensemble approach with traditional machine learning methods on tabular data. The model achieved high accuracy in identifying environmental hazards, providing a valuable tool for monitoring and reducing greenhouse gas emissions.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/alvarocalafell/methane-emission-project"
        },
        {
          name: "Research Paper",
          url: "https://github.com/alvarocalafell/methane-emission-project/blob/main/README.md"
        }
      ]
    },
    {
      //image: require("./assets/images/schneiderLogo.png"), // Create and add this logo
      projectName: "AI-Powered Price Forecasting",
      projectDesc:
        "Developed a predictive analytics system for Schneider Electric to forecast plastic material costs using AI and historical data. Implemented time series forecasting models to predict prices for specific months, helping optimize procurement strategies and reduce financial risks. The system includes data preprocessing pipelines, model training workflows, and interactive visualization dashboards.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/alvarocalafell/schneider-electric"
        },
        {
          name: "Case Study",
          url: "https://github.com/alvarocalafell/schneider-electric/blob/main/README.md"
        }
      ]
    }
  ],
  display: true
};

// Publications Section
const publicationsSection = {
  title: "Publications",
  subtitle: "RESEARCH PAPERS I'VE CONTRIBUTED TO",
  publications: [
    {
      title:
        "Integrating Boosted Trees and Retrieval-Augmented Neural Networks via Meta-Trained Hypernetworks for Tabular Classification",
      authors:
        "David Bonet, Marçal Comajoan Cara, Alvaro Calafell, Daniel Mas Montserrat, Alexander G. Ioannidis",
      venue:
        "ICLR 2025 Workshop on Weight Space Learning (Spotlight) & ICML 2025 (Pending Acceptance)",
      year: "2025",
      abstract:
        "Recent progress in deep learning has not fully carried over to tabular data, where gradient-boosted decision trees (GBDTs) still dominate real-world applications. We introduce iLTM, an integrated Large Tabular Model that unifies GBDT embeddings, dimensionality-agnostic representations, meta-trained hypernetworks, strong multilayer perceptrons (MLPs), and retrieval components within a single architecture. Leveraging tree-based inductive biases and neural scalability, iLTM is pre-trained on over 1,800 heterogeneous datasets, achieving consistently superior performance on a wide range of disjoint classification tasks, from small datasets to large and high-dimensional real-world data.",
      links: [
        {
          name: "Paper",
          url: "https://openreview.net/forum?id=i3tNbNe1RC"
        },
        {
          name: "Code",
          url: "https://github.com/alvarocalafell/hyperfast"
        }
      ]
    },
    {
      title:
        "SNPUtils: A Python Library for Processing Genetic Variation and Population Structure",
      authors:
        "Bonet, D., Comajoan Cara, M., Barrabés, M., et al. (Contributor: Alvaro Calafell)",
      venue: "Bioinformatics Tools",
      year: "2023",
      abstract:
        "SNPUtils is a Python package designed to ease the processing and analysis of genomic datasets, while handling all the complexities of different genome formats and operations efficiently. Developed as a collaborative effort between Stanford University's Department of Biomedical Data Science, UC Santa Cruz Genomics Institute, and contributors worldwide, this library provides robust tools for handling sequencing and ancestry data, with a focus on performance, ease of use, and advanced visualization capabilities.",
      links: [
        {
          name: "Official Website",
          url: "https://snputils.org"
        },
        {
          name: "Documentation",
          url: "https://docs.snputils.org/snputils.html"
        },
        {
          name: "GitHub Repository",
          url: "https://github.com/AI-sandbox/snputils"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "My professional journey and qualifications",
  resumeLink:
    "https://drive.google.com/file/d/1DWtACOD1llYBXpTH0rYySPpTiE-am3h-/view?usp=sharing",
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
  publicationsSection,
  isHireable,
  resumeSection
};

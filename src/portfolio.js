/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jaya Miko's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Jaya Miko Yoga Pratama Portfolio",
    type: "website",
    url: "http://jayamiko.com/",
  },
};

export const SocialMediaLink = {
  Github: "https://github.com/jayamiko",
  Linkedin: "https://www.linkedin.com/in/jayamiko/",
  Youtube: "https://www.youtube.com/@_mjaya10",
  Email: "jayamiko4@gmail.com",
  Instagram: "https://www.instagram.com/jayamikoyp/",
  Threads: "https://www.threads.net/@jayamikoyp",
  Whatsapp: "https://wa.me/6281299585762",
};

export const EducationLink = {
  Dumbways: "https://dumbways.id/",
  Unisma: "https://unismabekasi.ac.id/",
};

//Home Page
const greeting = {
  title: "Jaya Miko Yoga Pratama",
  logo_name: "Jaya Miko Yoga Pratama",
  nickname: "jayamikoyp",
  subTitle: `
    Skilled in designing, developing, and maintaining high-performance software. Proficient in JavaScript, Typescript, Go, MySQL and software engineering principles. Experienced in building scalable, user-centric applications and solving complex problems.
  `,
  resumeLink:
    "https://drive.google.com/file/d/1Sx4dtHSNKDBbZOAdYnl1r4wqn2OPGvmE/view?usp=sharing",
  portfolio_repository: `${SocialMediaLink.Github}/Dewe-Tour-Web-Socket.io`,
  githubProfile: SocialMediaLink.Github,
};

const socialMediaLinks = [
  {
    name: "Github",
    link: SocialMediaLink.Github,
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: SocialMediaLink.Linkedin,
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: SocialMediaLink.Youtube,
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: `mailto:${SocialMediaLink.Email}`,
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: SocialMediaLink.Instagram,
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Threads",
    link: SocialMediaLink.Threads,
    fontAwesomeIcon: "fa-threads", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#000", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Whatsapp",
    link: SocialMediaLink.Whatsapp,
    fontAwesomeIcon: "fa-whatsapp", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#128C7E", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React and Next Js",
        "⚡ Creating application backend in Node, Express & Go",
        "⚡ Developing mobile applications using React Native",
        "⚡ Implementing state management using Redux for efficient application data flow",
        "⚡ Designing and managing relational databases using MySQL for scalable and optimized data storage",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Tailwindcss",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#00ADD8",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Data science with Python and R as programming language",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        // {
        //   skillName: "Deeplearning",
        //   imageSrc: "deeplearning_ai_logo.png",
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#D82C20",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Dumbways",
      iconifyClassname: null,
      imageSrc: "dumbways-logo.png",
      style: {
        width: 70,
        height: 70,
      },
      profileLink: EducationLink.Dumbways,
    },
    {
      siteName: "DQLab Indonesia",
      imageSrc: "dqlab-logo.webp",
      style: {
        width: 100,
        height: 35,
      },
      profileLink: "https://dqlab.id/",
    },
    {
      siteName: "Unisma Bekasi",
      imageSrc: "unisma.png",
      style: {
        width: 70,
        height: 70,
      },
      profileLink: EducationLink.Unisma,
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
        width: 60,
        height: 60,
      },
      profileLink: "https://www.hackerrank.com/jayamiko",
    },
    {
      siteName: "Google Developer Groups Bogor",
      imageSrc: "GDG_logo.webp",
      style: {
        width: 80,
        height: 40,
      },
      profileLink: "https://gdg.community.dev/gdg-bogor/",
    },
    {
      siteName: "EFE Indonesia",
      imageSrc: "efe-indonesia.webp",
      style: {
        width: 180,
        height: 40,
      },
      profileLink: "https://efeindonesia.id/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dumbways Teknologi Indonesia",
      subtitle: "Fullstack Developer in Computer Engineer",
      logo_path: "dumbways-logo.png",
      alt_name: "Dumbways.ID",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ I was selected for the ISA Scholarship which is given to talented coding students. I have received awards from respected directors for consistently excellent performance during my studies.",
        "⚡ I have studied basic application development subjects like Algorithms, Computer Architecture, DBMS, OS, Design Pattern, etc.",
        "⚡ I have mastered many libraries and frameworks in website & Android development using React and Express Js for 2 months",
        "⚡ Apart from this, I have done pre-class on Full Stack Development using HTML, CSS, Javascript, Node Js end-to-end",
        "⚡ I was taught how to design database architecture from various relationships",
        "⚡ I learned public speaking communication to clearly explain the code and structure of each weekly presentation",
      ],
      website_link: EducationLink.Dumbways,
    },
    {
      title: `Universitas Islam "45" Bekasi`,
      subtitle: "Islamic Education in Islamic Education Faculty",
      logo_path: "unisma.png",
      alt_name: "UNISMA Bekasi",
      duration: "2019 - present",
      descriptions: [
        "⚡ I have taken various courses related to Islamic Education, covering topics such as Contemporary Islamic Thought, Philosophy of Islamic Education, and Technology-Based Learning Methodologies.",
        "⚡ In addition, I have been involved in academic research, focusing on developing digital-based Islamic learning models and integrating Islamic values into modern education.",
        "⚡ During my time at university, I was also active in the multimedia department, where I contributed to documentary films and explored themes of Islamic studies, moral education, and social issues.",
      ],
      website_link: EducationLink.Unisma,
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Go Basic",
      subtitle: "Hackerrank",
      logo_path: "go_basic.png",
      certificate_link: "https://www.hackerrank.com/certificates/2f87b8b495f9",
      alt_name: "Go basic",
      color_code: "#00ADD8",
    },
    {
      title: "Pre Fullstack Developer",
      subtitle: "Dumbways Teknologi Indonesia",
      logo_path: "pre_fullstack_dumbways.png",
      certificate_link:
        "https://drive.google.com/file/d/1cbQPk2h7ICB79PG2mIloRMNXLureYtXU/view?usp=sharing",
      alt_name: "pre-fullstack-developer-dumbways",
      color_code: "#E34F26",
    },
    {
      title: "Graduate Fullstack Developer",
      subtitle: "Dumbways Teknologi Indonesia",
      logo_path: "graduate_dumbways.png",
      certificate_link:
        "https://drive.google.com/file/d/1ccpMioC2N3AG8j6B3a2M_NrEeIs9vk8p/view?usp=sharing",
      alt_name: "Graduate Certificate Dumbways",
      color_code: "#E34F26",
    },
    {
      title: "Python with Data Science",
      subtitle: "DQLab Indonesia",
      logo_path: "python_dqlab.png",
      certificate_link:
        "https://academy.dqlab.id/certificate/pdf/DQLABINTP1JUVFOB",
      alt_name: "Python Data Science",
      color_code: "#cf0",
    },
    {
      title: "R with Data Science",
      subtitle: "DQLab Indonesia",
      logo_path: "r_dqlab.png",
      certificate_link:
        "https://academy.dqlab.id/certificate/pdf/DQLABINTR1PLCPWO",
      alt_name: "R Data Science",
      color_code: "#cf0",
    },
    {
      title: "MySQL with Data Science",
      subtitle: "DQLab Indonesia",
      logo_path: "sql_dqlab.png",
      certificate_link:
        "https://academy.dqlab.id/certificate/pdf/DQLABSQLT1CJVOOT",
      alt_name: "MySQL Data Science",
      color_code: "#cf0",
    },
    {
      title: "English Beginner",
      subtitle: "EFE Indonesia",
      logo_path: "english_efeindonesia.png",
      certificate_link:
        "https://drive.google.com/file/d/1vir-lS3bTIXGGf9TqJ74nLspMMHTYBSM/view?usp=sharing",
      alt_name: "English Learning EFE Indonesia",
      color_code: "#650000",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

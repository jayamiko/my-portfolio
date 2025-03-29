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
  Email: "developer@jayamiko.tech",
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
    "https://drive.google.com/file/d/1qdh1t3sJTkwF_OAHmfYTV2voIAWiwJhj/view?usp=sharing",
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
      externalSrc: true,
      imageSrc: "https://avatars0.githubusercontent.com/u/53558593?v=4",
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
      title: "Software Engineer",
      subtitle: "Hackerrank",
      logo_path: "software-developer_hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/85de0ac4f679",
      alt_name: "Software Engineer Certificate",
      color_code: "#3c3c3c",
    },
    {
      title: "Go Basic",
      subtitle: "Hackerrank",
      logo_path: "go_basic.png",
      certificate_link: "https://www.hackerrank.com/certificates/2f87b8b495f9",
      alt_name: "Go Basic Certificate",
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
  subtitle: "Software Engineer",
  description: `I am a programmer, focused on developing web-based or mobile applications. Act as front-end and
    back-end. Let's start a journey of programming
    magic together!`,
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Fullstack Web Developer",
          company: "PT. Ruang Hening Indonesia",
          company_url: "https://www.ruanghening.com/",
          logo_path: "hening.png",
          duration: "14 April 2025 - Present",
          location: "Central Jakarta, Jakarta",
          description:
            "Create a website from scratch as well as a mobile application, which aims to make it easier for users to reach it with web-based applications and PWA",
          color: "#000000",
        },
        {
          title: "Backend Developer",
          company: "PT. Prosigmaka Mandiri",
          company_url: "https://prosigmaka.com/",
          logo_path: "prosigma.jpeg",
          duration: "13 March 2025 - Present",
          location: "Bintaro, Tangerang",
          description:
            "I am working on the backend side using Go language. The projects are from Xapiens Teknologi Indonesia as client's Primasys. where the project is to build a logistics application such as coal delivery on truck loads. This application is available both website-based and mobile app",
          color: "#000000",
        },
        {
          title: "Software Engineer",
          company: "PT. Phincon",
          company_url: "https://phincon.com/",
          logo_path: "phincon.png",
          duration: "12 September 2024 - 11 March 2025",
          location: "South Jakarta, Jakarta",
          description: `
            Experienced in web development for the MyTelkomsel website, focusing on enhancing security and user experience. Implemented the Diffie-Hellman method for improved tech security and integrated a face recognition feature for prepaid registration. Developed UI/UX based on Figma designs and handled API integration between client and backend using Next.js and Nest.js. Collaborated with frontend and backend teams to ensure seamless project execution and presented completed features to stakeholders.
          `,
          color: "#0879bf",
        },
        {
          title: "Web Programmer",
          company: "Anantarupa Studios",
          company_url: "https://anantarupa.com/",
          logo_path: "anantarupa.jpeg",
          duration: "21 March 2022 - 21 August 2024",
          location: "West Jakarta, Jakarta",
          description: `
             I always sought opportunities for constant improvement and have maintained a professional-star attitude in every project I took on. For example, when working on a large-scale web application, I noticed that our codebase was becoming increasingly hard to maintain due to lack of modularity.
          `,
          color: "#9b1578",
        },
        {
          title: "Merchandiser",
          company: "PT. Viva Teknik Mandiri",
          company_url: "https://www.kenmaster.co.id/",
          logo_path: "kenmaster.png",
          duration: "January 2020 - Mei 2021",
          location: "South Jakarta, Jakarta",
          description: `
            Managed KineMaster product inventory and availability across Transmart stores in the Jabodetabek area. Handled product stock checks, promotions, and display arrangements to optimize sales and customer engagement.
          `,
          color: "#FFB700",
        },
        {
          title: "Sales Promotion Boy (SPB)",
          company: "Gold Furniture",
          company_url: "",
          logo_path: "company-default.png",
          duration: "August 2018 - August 2019",
          location: "South Tangerang, Tangerang",
          description: `
            Manage stock and print product price updates based on ongoing promotions. Handle product stock checks, promotions furniture, assemble furniture, receiving goods, sending returned goods and displaying goods to customers.
          `,
          color: "#fc1f20",
        },
        {
          title: "Stock Controller Intern",
          company: "Transmart Carefour",
          company_url: "https://transmart.co.id/",
          logo_path: "transmart.png",
          duration: "January 2018 - Juni 2018",
          location: "Bekasi City, West Java",
          description: `
            Manage stock and print product price updates based on ongoing promotions. Handle product stock checks, promotions, and customer engagement.
          `,
          color: "#fc1f20",
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
      id: 1,
      name: "Kebudayaan Islam Sepanjang Masa",
      createdAt: "2022",
      description: "Paper published in Academia and Scribd",
      url:
        "https://www.academia.edu/71684787/KEBUDAYAAN_ISLAM_SEPANJANG_MASA",
      top: "0.5%",
      views: 14.443,
      pages: 318,
      bookmarks: 63,
    },
    {
      id: 2,
      name: "Sikap Tawakkal pada Kitab Ta'lim Muta'alim Pasal 7",
      createdAt: "2022",
      description: "Paper published in Academia",
      url:
        "https://www.academia.edu/67956906/Sikap_Tawakkal_pada_Kitab_Talim_Mutaalim_Pasal_7",
      views: 452,
      pages: 8,
      bookmarks: 19,
    },
    {
      id: 3,
      name: "PASAL 5 TA LIM MUTA ALIM",
      createdAt: "2022",
      description: "Paper published in Academia",
      url: "https://www.academia.edu/67858649/PASAL_5_TA_LIM_MUTA_ALIM/",
      views: 961,
      pages: 7,
      bookmarks: 31,
    },
  ],
};

// Project Page
export const competitiveBrands = {
  data: [
    {
      brandName: "MyTelkomsel",
      imageSrc: "mytelkomsel.png",
      brandLink: "http://my.telkomsel.com",
    },
    {
      brandName: "Bank Syariah Indonesia",
      imageSrc: "bank-bsi.webp",
      brandLink: "http://bankbsi.co.id",
    },
    {
      brandName: "Halodoc",
      imageSrc: "halodoc.png",
      brandLink: "https://www.halodoc.com/",
    },
    {
      brandName: "Xapiens",
      imageSrc: "xapiens.png",
      brandLink: "https://xapiens.id/id/",
    },
    {
      brandName: "Hening",
      imageSrc: "hening.png",
      brandLink: "https://www.ruanghening.com/",
      style: {
        width: 120,
      },
    },
    {
      brandName: "Lokapala",
      imageSrc: "lokapala.webp",
      brandLink: "http://lokapala.games",
    },
    {
      brandName: "Cakra Association",
      imageSrc: "cakra.webp",
      brandLink: "http://cakra.org",
      style: {
        width: 120,
        height: "auto",
        filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5))",
      },
    },
    {
      brandName: "Literature",
      imageSrc: "literature.png",
      brandLink: "",
    },
    {
      brandName: "Dewe Tour",
      imageSrc: "dewetour.png",
      brandLink: "",
    },
    {
      brandName: "Raise Call",
      imageSrc: "raisecall.png",
      brandLink: "http://appdev.raisecall.com",
    },
    {
      brandName: "Primasys",
      imageSrc: "primasys_logo.png",
      brandLink: "https://www.primasys.co.id/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "jayamiko_profile.jpg",
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
    subtitle: "Bintaro | South Jakarta | Bekasi Regency",
    locality: "South Jakarta",
    country: "Indonesia",
    region: "Jakarta",
    postalCode: "17510",
    streetAddress: "Bekasi Griya Pratama",
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

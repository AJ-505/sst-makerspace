export type Author = {
  name: string;
  role: string;
  avatarUrl: string;
  socials?: {
    linkedin?: string;
    instagram?: string;
  };
};

export type BlogCategory =
  | "article"
  | "research-paper"
  | "case-study"
  | "opinion";

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  category: BlogCategory;
  publishedIn?: string;
  date: string;
  coverImage: string;
  author: Author;
  readTime: string;
  featured?: boolean;
};

export const BLOG_CATEGORIES: { label: string; value: BlogCategory | "all" }[] =
  [
    { label: "All", value: "all" },
    { label: "Articles", value: "article" },
    { label: "Research Papers", value: "research-paper" },
    { label: "Case Studies", value: "case-study" },
    { label: "Opinion", value: "opinion" },
  ];

export const BLOG_POSTS: BlogPost[] = [
  {
    title:
      "Artificial Intelligence in Education: Transforming Learning in Nigerian Universities",
    slug: "ai-in-education",
    excerpt:
      "This article explores how artificial intelligence is reshaping educational delivery across Nigerian universities, from personalized learning paths to automated assessment systems that free up faculty for deeper mentorship.",
    category: "research-paper",
    publishedIn: "Pan Atlantic University",
    date: "2025-12-15",
    coverImage: "/makerspace-workshop-with-students-gathered-on-mult.webp",
    author: {
      name: "James John",
      role: "Undergraduate, Electrical Engineering",
      avatarUrl: "/professional-portrait-.webp",
      socials: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    readTime: "8 min read",
    featured: true,
  },
  {
    title: "How SST Makerspace Is Making Inroads in the Hardware Sector",
    slug: "sst-hardware-sector",
    excerpt:
      "From day one, our mission has been to create a world where students are not afraid to build. In Nigeria, too many young people graduate with ideas but without the tools, skills, or confidence to bring them to life.",
    category: "article",
    publishedIn: "SST Makerspace Impact Report 2025",
    date: "2025-11-02",
    coverImage: "/makerspace-workshop-with-students-gathered-on-mult.webp",
    author: {
      name: "Saviour Emmanuel Sunday",
      role: "President, SST Makerspace",
      avatarUrl: "/smiling-man-portrait.webp",
      socials: {
        linkedin: "https://www.linkedin.com/in/sst-makerspace-56b57a329",
        instagram: "https://www.instagram.com/sstmakerspace",
      },
    },
    readTime: "12 min read",
  },
  {
    title:
      "Bridging the Gap: Industry-Academia Partnerships for Hardware Innovation",
    slug: "industry-academia-partnerships",
    excerpt:
      "We need a stronger industry-academia handshake that helps students translate classroom principles into solutions for real community problems. This paper examines frameworks for effective collaboration.",
    category: "research-paper",
    publishedIn: "Pan Atlantic University",
    date: "2025-10-18",
    coverImage: "/makerspace-workshop-with-students-gathered-on-mult.webp",
    author: {
      name: "Dr. Desmond Moru",
      role: "Senior Lecturer, Computer Science (PAU)",
      avatarUrl: "/professional-portrait-.webp",
      socials: {
        linkedin: "https://linkedin.com",
      },
    },
    readTime: "15 min read",
  },
  {
    title:
      "Designing Remote-Controlled Robots: Lessons from the GripperBot Challenge",
    slug: "gripperbot-lessons",
    excerpt:
      "A hands-on case study documenting the engineering decisions, failures, and breakthroughs from the teams that competed in the GripperBot Challenge, including the winning team's journey from zero experience to victory.",
    category: "case-study",
    date: "2025-09-24",
    coverImage: "/industrial-robotic-arm-gripper-orange.webp",
    author: {
      name: "Semilore Ajibola",
      role: "Team Lead, Winner - GripperBot Challenge",
      avatarUrl: "/professional-portrait-.webp",
      socials: {
        instagram: "https://instagram.com",
      },
    },
    readTime: "10 min read",
  },
  {
    title: "The Future of Student-Led Innovation Hubs in Africa",
    slug: "student-led-innovation-hubs",
    excerpt:
      "Africa's hardware ecosystem is ripe for disruption, and student-led makerspaces are leading the charge. This opinion piece argues for a decentralized model of innovation that puts young builders at the center.",
    category: "opinion",
    date: "2025-08-10",
    coverImage: "/makerspace-workshop-with-students-gathered-on-mult.webp",
    author: {
      name: "Oluwatofunmi Olusodo",
      role: "Volunteer, Economics Student (PAU)",
      avatarUrl: "/professional-portrait-.webp",
      socials: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    readTime: "6 min read",
  },
  {
    title:
      "Prototyping with ESP32: A Practical Guide for Nigerian Engineering Students",
    slug: "esp32-practical-guide",
    excerpt:
      "A step-by-step walkthrough of building wireless-controlled hardware projects using ESP32 microcontrollers, drawn from real SST Makerspace workshop sessions and competition builds.",
    category: "article",
    date: "2025-07-05",
    coverImage: "/small-robots-racing-on-track.webp",
    author: {
      name: "James John",
      role: "Undergraduate, Electrical Engineering",
      avatarUrl: "/professional-portrait-.webp",
      socials: {
        linkedin: "https://linkedin.com",
      },
    },
    readTime: "11 min read",
  },
];

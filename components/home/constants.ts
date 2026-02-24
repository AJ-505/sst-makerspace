export type HomeStat = {
  label: string
  value: string
}

export type Feature = {
  description: string
  icon: string
  title: string
}

export type UpcomingChallenge = {
  description: string
  title: string
}

export type Competition = {
  description: string
  imageAlt: string
  imageSrc: string
  index: string
  theme: string
  title: string
}

export type Testimonial = {
  author: string
  quote: string
  role: string
}

export type SponsorMessage = {
  message: string
  sponsor: string
}

export const HOME_STATS: HomeStat[] = [
  { label: "Participants", value: "30+" },
  { label: "Teams", value: "15+" },
  { label: "Attendees", value: "300" },
  { label: "Winner", value: "1" },
]

export const HOME_FEATURES: Feature[] = [
  {
    description:
      "We invite industry to set tech competitions and workshops that puts students with our participants get hands-on experience with various technologies.",
    icon: "🎓",
    title: "Experiential Learning",
  },
  {
    description:
      "Our projects and workshops accept participants from across different disciplines such as Computer Science and Engineering.",
    icon: "🤝",
    title: "Discipline Collaboration",
  },
  {
    description:
      "We ensure our experience is provided to our participants and audiences by following a rigor style format for our events.",
    icon: "🎮",
    title: "Fun & Engaging",
  },
  {
    description:
      "While solving real-world problems, Makerspace fosters innovation that goes beyond the classroom and contributes to Africa's tech ecosystem.",
    icon: "🌍",
    title: "Impact-Oriented Thinking",
  },
]

export const UPCOMING_CHALLENGES: UpcomingChallenge[] = [
  {
    description:
      "Inter-university speed challenge with 3-member teams (max 2 teams per university). A NGN 1,000,000 prize pool rewards fastest lap times and best design.",
    title: "Rope Runner Challenge",
  },
  {
    description:
      "PAU-student teams build practical products for SMEs with industry mentor support, then present outcomes during exhibition day for partner pickup.",
    title: "Maker-to-Market Initiative",
  },
]

export const COMPETITIONS: Competition[] = [
  {
    description:
      "Teams design and build a wirelessly controlled MotoBot that can race with speed, agility, and steering precision while showcasing their engineering design process.",
    imageAlt: "MotoBot Competition",
    imageSrc: "/small-robots-racing-on-track.webp",
    index: "1",
    theme: "The Future of Work 2024",
    title: "MotoBot Competition",
  },
  {
    description:
      "Teams build a remote-controlled MotoBot with a gripper to automate handling tasks and demonstrate safer, more efficient labor-focused hardware solutions.",
    imageAlt: "GripperBot Competition",
    imageSrc: "/industrial-robotic-arm-gripper-orange.webp",
    index: "2",
    theme: "Re-imagining the Future of Labor in the African Ecosystem (2024/2025)",
    title: "GripperBot Competition",
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    author: "Oluwatofunmi Olusodo",
    quote:
      "My experience was both exhilarating and nostalgic. SST Makerspace gave me the perfect opportunity to contribute to someone else’s journey of self-discovery in tech.",
    role: "Volunteer, Economics Student (PAU)",
  },
  {
    author: "Semilore Ajibola",
    quote:
      "We were the last team to figure out our members and had no background in microcontrollers or programming, yet we pulled it off and made a statement.",
    role: "Team Lead, Winner - GripperBot Challenge",
  },
  {
    author: "Dr. Desmond Moru",
    quote:
      "We need a stronger industry-academia handshake that helps students translate classroom principles into solutions for real community problems.",
    role: "Senior Lecturer, Computer Science (PAU)",
  },
  {
    author: "Saviour Emmanuel Sunday",
    quote:
      "We are building an army of inventors, students who can hold an idea in their mind and bring it to life with their hands.",
    role: "President, SST Makerspace",
  },
  {
    author: "SST Makerspace Community",
    quote: "Together, we are shaping the future of innovation. Your support fuels young minds and bold ideas.",
    role: "Event 2.0 Impact Summary",
  },
]

export const SPONSOR_MESSAGES: SponsorMessage[] = [
  {
    message:
      "Sponsoring SST Makerspace gave our brand strong campus visibility through event branding, promo placements, and direct engagement with a high-energy innovation audience.",
    sponsor: "Auptex (Curated Sponsor Feedback)",
  },
  {
    message:
      "We gained early access to practical student builders and potential talent by supporting challenge-day activities, exhibition booths, and hands-on sessions.",
    sponsor: "TotalEnergies (Curated Sponsor Feedback)",
  },
  {
    message:
      "The partnership created meaningful market and product conversations with students solving real-world hardware problems, which aligns with our long-term innovation goals.",
    sponsor: "Interswitch (Curated Sponsor Feedback)",
  },
]

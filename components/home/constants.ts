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
    imageSrc: "/small-robots-racing-on-track.jpg",
    index: "1",
    theme: "The Future of Work 2024",
    title: "MotoBot Competition",
  },
  {
    description:
      "Teams design a wheeled GripperBot that can pick, move, and stack objects to address manual material-handling challenges through practical automation.",
    imageAlt: "GripperBot Competition",
    imageSrc: "/industrial-robotic-arm-gripper-orange.jpg",
    index: "2",
    theme: "The Future of Work 2026",
    title: "GripperBot Competition",
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    author: "Dr Darlington Agbor",
    quote: "Our Engineering students hosted the Motobot showcasing their innovative and problem solving skills.",
    role: "Faculty SST",
  },
  {
    author: "Dr Darlington Agbor",
    quote: "This is beautiful and fantastic. And to think that it was entirely organized by students.",
    role: "Faculty SST",
  },
  {
    author: "Dr Enehimon Agbor",
    quote: "Amazing execution. We are definitely investing our hardware resources in this in coming session.",
    role: "Dean SST",
  },
  {
    author: "Dr Darlington Agbor",
    quote: "Our Engineering students hosted the Motobot showcasing their innovative and problem solving skills.",
    role: "Faculty SST",
  },
  {
    author: "Dr Darlington Agbor",
    quote: "Our Engineering students hosted the Motobot showcasing their innovative and problem solving skills.",
    role: "Faculty SST",
  },
]

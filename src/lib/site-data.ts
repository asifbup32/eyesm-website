export const site = {
  name: "EYESM Bangladesh",
  tagline: "Empowering Lives. Sustaining Tomorrow.",
  email: "eyesmbangladesh@gmail.com",
  phone: "+880 1985-905411",
  facebook: "https://facebook.com/EYESMBangladesh",
  facebookLabel: "EYESM Bangladesh",
  whatsappGroup: "https://chat.whatsapp.com/JWkm3lkDPSTF5GtFDCHLts?s=cl&p=a&ilr=1",
  registrationForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSfg9sA9KTFLIUzUE613EoV86ZSW668Ciaj_l4Km57sJFsEuXw/viewform",
};

export const about = {
  intro:
    "EYESM Bangladesh is a youth-led, non-profit, non-political, and volunteer-driven organization dedicated to creating positive and sustainable change across Bangladesh. We believe that meaningful transformation begins by empowering people with knowledge, values, leadership, and a strong sense of responsibility toward society and the environment.",
  body: "Our work focuses on inspiring individuals, especially young people, to become active changemakers through education, awareness, community engagement, and sustainable initiatives. We strive to build a generation that thinks positively, acts responsibly, and contributes to the well-being of both people and the planet.",
  belief:
    "EYESM Bangladesh believes that today's youth hold the power to solve tomorrow's challenges through leadership, innovation, compassion, and volunteerism.",
};

export type PillarKey =
  | "environment"
  | "youth"
  | "education"
  | "sustainability"
  | "mindset";

export const pillars: {
  key: PillarKey;
  title: string;
  description: string;
  color: string;
  /** Accessible foreground for icons/text — some brand colors are too light for 3:1 on tinted chips. */
  iconColor: string;
}[] = [
  {
    key: "environment",
    title: "Environment & Climate Action",
    description:
      "Promoting environmental awareness, climate responsibility, conservation, and sustainable practices among young people and communities.",
    color: "var(--pillar-environment)",
    iconColor: "var(--pillar-environment)",
  },
  {
    key: "youth",
    title: "Youth Leadership & Volunteerism",
    description:
      "Creating opportunities for young people to develop leadership, teamwork, communication, and volunteering skills through real-world experiences.",
    color: "var(--pillar-people)",
    iconColor: "var(--pillar-people)",
  },
  {
    key: "education",
    title: "Education & Public Awareness",
    description:
      "Organizing educational programs, awareness campaigns, workshops, and learning initiatives on important social and environmental issues.",
    color: "var(--pillar-education)",
    iconColor: "var(--pillar-education-fg)",
  },
  {
    key: "sustainability",
    title: "Sustainability & Waste Management",
    description:
      "Encouraging responsible consumption, waste reduction, sustainable lifestyles, and community-based solutions for a cleaner future.",
    color: "var(--pillar-sustainability)",
    iconColor: "var(--pillar-sustainability)",
  },
  {
    key: "mindset",
    title: "Positive Mindset & Community Development",
    description:
      "Supporting young people in developing confidence, positive thinking, creativity, and a strong sense of purpose — while engaging communities through meaningful, participatory initiatives.",
    color: "var(--pillar-mindset)",
    iconColor: "var(--pillar-mindset)",
  },
];

export const mission =
  "EYESM Bangladesh is committed to building a greener, healthier, and more sustainable Bangladesh by empowering young people to become skilled, confident, responsible, and compassionate changemakers. We aim to nurture young minds through positive thinking, education, practical skill development, and leadership opportunities, while encouraging them to take meaningful action for society and the environment. Through environmental initiatives, awareness programs, volunteer activities, community engagement, and youth-focused projects, we strive to inspire a generation that cares for its surroundings, supports its communities, and takes an active role in creating lasting positive change for a greener Bangladesh.";

export const vision =
  "To build an empowered generation that leads positive change and contributes to a greener, healthier, and more sustainable Bangladesh.";

export const whatWeDo =
  "EYESM Bangladesh drives sustainable change through youth-led action. We curate educational workshops, environmental campaigns, leadership programs, and community-driven initiatives that empower young individuals to solve real-world problems. Our focus is simple: provide passionate youth with the right opportunities to transform their ideas into actionable impact for a greener, better tomorrow.";

export const values: { title: string; description: string }[] = [
  {
    title: "Commitment to Positive Change",
    description:
      "Driven by purpose and responsibility, EYESM Bangladesh works to turn ideas into meaningful action and create positive change across communities.",
  },
  {
    title: "Youth Empowerment",
    description:
      "Creating opportunities for young people to learn, develop skills, take leadership, volunteer, and actively contribute to society.",
  },
  {
    title: "Social & Environmental Responsibility",
    description:
      "Promoting responsible attitudes toward people, communities, and the environment while encouraging sustainable practices for a better Bangladesh.",
  },
  {
    title: "Integrity & Accountability",
    description:
      "Maintaining honesty, transparency, and accountability in every initiative, while building trust among members, volunteers, communities, and stakeholders.",
  },
  {
    title: "Inclusive Participation",
    description:
      "Encouraging young people from different backgrounds to participate, share ideas, develop their potential, and contribute to meaningful initiatives.",
  },
  {
    title: "Sustainable Impact",
    description:
      "Focusing on practical initiatives that go beyond short-term activities and contribute to lasting benefits for people, communities, and the environment.",
  },
];

export type InitiativeCategory =
  | "Tree Plantation"
  | "Competition"
  | "Collaboration"
  | "Fests and Events";

export const initiatives: {
  title: string;
  category: InitiativeCategory;
  description: string;
  image: string;
  imageAlt: string;
}[] = [
  {
    title: "“My Dream Bangladesh” Art Competition",
    category: "Competition",
    description:
      "Through the “My Dream Bangladesh” Art Competition, EYESM Bangladesh provided young students a creative platform to express their vision for a better Bangladesh while fostering creativity, confidence, and responsible citizenship.",
    image: "/images/initiatives/art-competition.jpeg",
    imageAlt:
      "Students holding up their hand-drawn artwork of their dream Bangladesh during the art competition",
  },
  {
    title: "Tree Plantation Program, Bogura",
    category: "Tree Plantation",
    description:
      "EYESM Bangladesh organized a Tree Plantation Program in Bogura to inspire young students to value nature and understand the importance of trees in protecting the environment. The initiative promoted environmental awareness and encouraged children to contribute to a greener and more sustainable Bangladesh.",
    image: "/images/initiatives/tree-plantation.jpeg",
    imageAlt: "Students planting saplings together at the Bogura tree plantation program",
  },
  {
    title: "Community Discussion Series",
    category: "Collaboration",
    description:
      "Through our Discussion, we came together to explore how we can bring positive change to our communities and turn meaningful ideas into practical actions. We shared our perspectives, discussed what we can implement together, and explored ways to make a meaningful impact. Together, we are turning positive thoughts into purposeful action for a better and more sustainable future.",
    image: "/images/initiatives/community-discussion.jpeg",
    imageAlt: "Volunteers gathered outdoors in a circle for a community discussion session",
  },
  {
    title: "School Awareness Session, Rangpur Division",
    category: "Fests and Events",
    description:
      "EYESM Bangladesh conducted a School Awareness Session in Rangpur Division for Grade 9 and 10 students, focusing on adolescence, environmental awareness, sustainability, and positive mindset. Through interactive discussions and quizzes, the session encouraged students to build awareness, confidence, and responsibility toward their communities and environment.",
    image: "/images/initiatives/school-awareness.jpeg",
    imageAlt:
      "Students raising their hands during an interactive school awareness session in Rangpur Division",
  },
];

export const initiativeFilters: ("All" | InitiativeCategory)[] = [
  "All",
  "Tree Plantation",
  "Competition",
  "Collaboration",
  "Fests and Events",
];

export const executiveMembers = [
  {
    name: "Mst. Sadia Newaz",
    role: "Founder and Executive Director",
    image: "/images/members/sadia-newaz.jpeg",
  },
  {
    name: "Mahmud Hasan Khan Shimul",
    role: "Co-Founder and Director",
    image: "/images/members/shimul.jpeg",
  },
  {
    name: "Nowshin Tabasum",
    role: "General Secretary",
    image: "/images/members/nowshin-tabasum.png",
  },
];

export const adviserPanel = [
  {
    name: "Muhammad Yeasir",
    role: "Founder and Managing Director of TESOL Bangladesh",
    image: "/images/members/muhammad-yeasir.jpeg",
  },
  {
    name: "Efatara Era",
    role: "Host, Channel i and Media Consultant, Prokiti o Jibon Foundation",
    image: "/images/members/efatara-era.jpeg",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/campaigns", label: "Campaigns" },
  { href: "/initiatives", label: "Initiatives" },
  { href: "/gallery", label: "Gallery" },
  { href: "/members", label: "Members" },
  { href: "/contact", label: "Contact" },
];

export const moreLinks = [
  { href: "/blogs", label: "Blogs" },
  { href: "/news-and-media", label: "News & Media" },
  { href: "/our-partners", label: "Our Partners" },
];

export const allNavLinks = [...navLinks.slice(0, -1), ...moreLinks, navLinks[navLinks.length - 1]];

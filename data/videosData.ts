export interface VideoItem {
  id: string;
  title: string;
  category?: string;
  description: string;
  channel?: string;
  duration?: string;
  date?: string;
  type?: "youtube" | "direct" | "file";
  youtubeId?: string;
  videoUrl?: string;
  thumbnail?: string;
  featured?: boolean;
  className?: string;
  isCustom?: boolean;
}

export const videosData: VideoItem[] = [
  {
    id: "vid-corp-film",
    title: "BUILD WORLD CORPORATE FILM | Construction Company & Engineering Legacy",
    category: "Corporate & Milestone",
    description:
      "The official corporate film of Build World Constructions showcasing over a quarter-century of engineering excellence, landmark projects, and client trust across South India and the Middle East.",
    channel: "Build World",
    duration: "08:05",
    date: "2023",
    type: "youtube",
    youtubeId: "46_VFagAdNI",
    thumbnail: "https://i.ytimg.com/vi/46_VFagAdNI/hq720.jpg",
    featured: true,
    className: "md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2",
  },
  {
    id: "vid-era-nature-park",
    title: "ERA NATURE PARK - A World Class Destination For Nature Lovers",
    category: "Commercial & Tourism",
    description:
      "An extensive architectural and landscape tour of the prestigious Era Nature Park project by Build World, showcasing sustainable construction and immersive eco-tourism engineering.",
    channel: "Build World",
    duration: "09:28",
    date: "2025",
    type: "youtube",
    youtubeId: "z7jy5AitYJ4",
    thumbnail: "https://i.ytimg.com/vi/z7jy5AitYJ4/hq720.jpg",
    featured: true,
    className: "md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2",
  },
  {
    id: "vid-tiara-hotel",
    title: "Tiara by MPS | Calicut's New 5-Star Luxury Hotel | Build World",
    category: "Commercial Projects",
    description:
      "Complete architectural and luxury interior walkthrough of the landmark Tiara 5-star hotel project in Calicut, executed with turnkey excellence by Build World.",
    channel: "Build World",
    duration: "09:36",
    date: "2024",
    type: "youtube",
    youtubeId: "ycRJ8xh_V9s",
    thumbnail: "https://i.ytimg.com/vi/ycRJ8xh_V9s/hq720.jpg",
    className: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: "vid-skaris-residence",
    title: "Skari's Grand Residence: A Monumental Project of Build World",
    category: "Luxury Residences",
    description:
      "Architectural tour of Skari's Residence in Kondotty — an iconic private residential masterpiece built with structural precision, modern luxury finishes, and automated living spaces.",
    channel: "Build World",
    duration: "10:46",
    date: "2024",
    type: "youtube",
    youtubeId: "X1m_7Yylq-A",
    thumbnail: "https://i.ytimg.com/vi/X1m_7Yylq-A/hq720.jpg",
    className: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: "vid-tiara-inauguration",
    title: "Inauguration of Tiara by MPS | Calicut's Premier 5-Star Hotel",
    category: "Inauguration & Handovers",
    description:
      "Grand opening and ceremony celebration of the Tiara 5-star hotel project in Calicut, joined by leading dignitaries and the Build World project team.",
    channel: "Build World",
    duration: "01:00",
    date: "2024",
    type: "youtube",
    youtubeId: "zmr1xnqZAlA",
    thumbnail: "https://i.ytimg.com/vi/zmr1xnqZAlA/hq720.jpg",
    className: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: "vid-aripra-residence",
    title: "Residence Aripra: Completed in 22 Months Luxury House Tour",
    category: "Luxury Residences",
    description:
      "Full interior and exterior architectural tour of Mr. Arshad Noufal's 5,200 sq.ft contemporary family home in Aripra, Malappuram — delivered in 22 months with flawless precision.",
    channel: "Build World",
    duration: "06:30",
    date: "2021",
    type: "youtube",
    youtubeId: "HfArb7SzTw8",
    thumbnail: "https://i.ytimg.com/vi/HfArb7SzTw8/hq720.jpg",
    className: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: "vid-pukattur-progress",
    title: "Residential Project Progress in Pukattur, Malappuram | Site Engineering",
    category: "Site Progress & Engineering",
    description:
      "Behind-the-scenes structural progress at Pukattur, Malappuram — highlighting foundation casting, column reinforcement, and precision site engineering by Build World.",
    channel: "Build World",
    duration: "00:35",
    date: "2025",
    type: "youtube",
    youtubeId: "BauzMqw3_5s",
    thumbnail: "https://i.ytimg.com/vi/BauzMqw3_5s/hq720.jpg",
    className: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: "vid-dr-sharath-tour",
    title: "Home Tour | Traditional Contemporary House In Thirunnavaya, Kerala",
    category: "Luxury Residences",
    description:
      "A breathtaking walk through Dr. Sharath's residence in Thirunnavaya, seamlessly uniting traditional Kerala architectural elements with modern open-concept spatial design.",
    channel: "Build World",
    duration: "03:32",
    date: "2022",
    type: "youtube",
    youtubeId: "AmJfr6kLQcQ",
    thumbnail: "https://i.ytimg.com/vi/AmJfr6kLQcQ/hq720.jpg",
    className: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: "vid-kayalpattinam-tour",
    title: "Luxury Apartment Tour & Interior Design | Kayalpattinam, Tamil Nadu",
    category: "Luxury Residences",
    description:
      "Exclusive walkthrough of Seyed Abu Thahir's luxury residence in Kayalpattinam, featuring bespoke woodwork, custom carpentry, and ambient architectural lighting.",
    channel: "Build World",
    duration: "06:27",
    date: "2022",
    type: "youtube",
    youtubeId: "XAo6TLva6No",
    thumbnail: "https://i.ytimg.com/vi/XAo6TLva6No/hq720.jpg",
    className: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: "vid-kayalpattinam-warming",
    title: "Luxury House Warming Ceremony | Seyed Abu Thahir's Residence",
    category: "Inauguration & Handovers",
    description:
      "Celebrating the joy of new beginnings — festive house warming moments and client celebration at Seyed Abu Thahir's residence in Kayalpattinam.",
    channel: "Build World",
    duration: "02:58",
    date: "2022",
    type: "youtube",
    youtubeId: "wA5TXoyFp9w",
    thumbnail: "https://i.ytimg.com/vi/wA5TXoyFp9w/hq720.jpg",
    className: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: "vid-shanoj-kakad",
    title: "Mr. Shanoj Kakad's Residency | Koottilangadi, Malappuram",
    category: "Luxury Residences",
    description:
      "Unveiling the turnkey family home crafted for Mr. Shanoj Kakad in Koottilangadi, showcasing modern structural facades and durable living spaces.",
    channel: "Build World",
    duration: "00:52",
    date: "2022",
    type: "youtube",
    youtubeId: "RDA1YwoQ5k4",
    thumbnail: "https://i.ytimg.com/vi/RDA1YwoQ5k4/hq720.jpg",
    className: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: "vid-bava-jamjoom-handover",
    title: "Key Hand Over Ceremony: Mr. Bava Jamjoom's House | Malappuram",
    category: "Inauguration & Handovers",
    description:
      "Official handover ceremony celebrating the completion of Mr. Bava Jamjoom's home in Malappuram, marking another proud milestone for Build World.",
    channel: "Build World",
    duration: "00:20",
    date: "2022",
    type: "youtube",
    youtubeId: "-zwX-gXlphY",
    thumbnail: "https://i.ytimg.com/vi/-zwX-gXlphY/hqdefault.jpg",
    className: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: "vid-testimonial-dr-indira",
    title: "Stories of Lifeful Living | Dr. Indira & Er. Gopinath Testimonial",
    category: "Client Stories",
    description:
      "Dr. Indira and Er. Gopinath reflect on their experience with Build World Constructions, from initial architectural plans to flawless final delivery of their dream home.",
    channel: "Build World",
    duration: "00:34",
    date: "2021",
    type: "youtube",
    youtubeId: "DFQKdMDw95M",
    thumbnail: "https://i.ytimg.com/vi/DFQKdMDw95M/hq720.jpg",
    className: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: "vid-legacy-25years",
    title: "The Legacy of 25 Years That Sculpted 'Build World'",
    category: "Corporate & Milestone",
    description:
      "The inspiring founding story and milestones of Er. Feroz Kalathil and Mr. Abdul Muneer in building a construction institution recognized for integrity and excellence.",
    channel: "Build World",
    duration: "07:02",
    date: "2021",
    type: "youtube",
    youtubeId: "-3dD2H_K7vg",
    thumbnail: "https://i.ytimg.com/vi/-3dD2H_K7vg/hq720.jpg",
    className: "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1",
  },
];

export const videoCategories = [
  "All Videos",
  "Luxury Residences",
  "Commercial & Tourism",
  "Commercial Projects",
  "Inauguration & Handovers",
  "Corporate & Milestone",
  "Site Progress & Engineering",
  "Client Stories",
];

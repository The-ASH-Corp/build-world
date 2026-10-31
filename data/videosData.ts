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
    id: "vid-house-tour",
    title: "Signature Residence Walkthrough: Complete Interior & Structural Tour",
    category: "Luxury Residences",
    description: "An exclusive cinematic walkthrough of a contemporary residence crafted by Build World, exploring turnkey architectural planning, premium woodwork, and structural finishings.",
    channel: "Build World",
    duration: "03:30",
    date: "2025",
    type: "direct",
    videoUrl: "https://buildworld.s3.eu-north-1.amazonaws.com/Buildworld/Completed+Projects/Arshad/House+Video.mp4",
    thumbnail: "/images/house.webp",
    featured: true,
    className: "md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    id: "vid-1",
    title: "ERA NATURE PARK - A World Class Destination For Nature Lovers",
    category: "Commercial & Tourism",
    description: "An extensive architectural and landscape tour of the prestigious Era Nature Park project by Build World, showcasing sustainable construction and immersive eco-tourism engineering.",
    channel: "Build World",
    duration: "04:15",
    date: "2025",
    type: "youtube",
    youtubeId: "z7jy5AitYJ4",
    thumbnail: "https://img.youtube.com/vi/z7jy5AitYJ4/maxresdefault.jpg",
    featured: true,
    className: "md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2",
  },
  {
    id: "vid-2",
    title: "Skari's Grand Residence: A Monumental Architectural Achievement",
    category: "Luxury Residences",
    description: "Walkthrough of an iconic private residential masterpiece built with structural excellence, modern luxury finishes, and automated living spaces.",
    channel: "Build World",
    duration: "03:45",
    date: "2024",
    type: "youtube",
    youtubeId: "X1m_7Yylq-A",
    thumbnail: "https://img.youtube.com/vi/X1m_7Yylq-A/maxresdefault.jpg",
    featured: true,
    className: "md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2",
  },
  {
    id: "vid-3",
    title: "Tiara Grand Inauguration & Architectural Celebration",
    category: "Inauguration & Handovers",
    description: "Commemorating the milestone grand opening of Tiara, featuring ceremony moments, team achievements, and turnkey architectural delivery.",
    channel: "Build World",
    duration: "05:20",
    date: "2025",
    type: "youtube",
    youtubeId: "LXb3EKWsInQ",
    thumbnail: "https://buildworld.s3.eu-north-1.amazonaws.com/Buildworld/Completed+Projects/TIARA/Tiara+Inauguration/New/f1a.jpg",
    className: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: "vid-4",
    title: "Chef Lebanon Kottakkal: Turnkey Commercial Transformation",
    category: "Commercial Projects",
    description: "Inside the flagship hospitality space in Kottakkal, highlighting bespoke timber finishing, premium facade glazing, and MEP integration.",
    channel: "Build World",
    duration: "02:50",
    date: "2024",
    type: "youtube",
    youtubeId: "z7jy5AitYJ4",
    thumbnail: "https://buildworld.s3.eu-north-1.amazonaws.com/Buildworld/converted/Ajfan/Ajfan/ajfanExterior2.webp",
    className: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: "vid-5",
    title: "Residence Aripra: Complete Structural Engineering & Interior Tour",
    category: "Luxury Residences",
    description: "Detailed walk around Mr. Arshad Noufal's 5,200 sq.ft contemporary residence featuring open-concept spaces and floor-to-ceiling acoustic glazing.",
    channel: "Build World",
    duration: "06:10",
    date: "2024",
    type: "youtube",
    youtubeId: "X1m_7Yylq-A",
    thumbnail: "https://buildworld.s3.eu-north-1.amazonaws.com/Buildworld/converted/Arshad/Arshad-image4.webp",
    className: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: "vid-6",
    title: "Key Handover Moments & Client Gratitude at Thirunnavaya",
    category: "Inauguration & Handovers",
    description: "A heartwarming celebration capturing the final key handover ceremony for Dr. Sharath's residence, cementing client trust and relationship.",
    channel: "Build World",
    duration: "03:15",
    date: "2025",
    type: "youtube",
    youtubeId: "LXb3EKWsInQ",
    thumbnail: "https://buildworld.s3.eu-north-1.amazonaws.com/Buildworld/Completed+Projects/Dr.+Sharath+Home+-+Thirunnavaya/Key+Handover.jpeg",
    className: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: "vid-7",
    title: "Digital Surveying & Precision Site Set-Out in Action",
    category: "Site Progress & Engineering",
    description: "Behind the scenes with our engineering team using modern digital equipment for millimeter-accurate positioning and structural layout.",
    channel: "Build World",
    duration: "04:30",
    date: "2025",
    type: "youtube",
    youtubeId: "z7jy5AitYJ4",
    thumbnail: "https://buildworld.s3.eu-north-1.amazonaws.com/Buildworld/Completed+Projects/Era/Photos+and+Videos/IMG-20250124-WA0047.jpg",
    className: "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    id: "vid-8",
    title: "Client Testimonial: Delivering On Promises & Uncompromised Quality",
    category: "Client Stories",
    description: "Hear directly from proud homeowners about their journey with Build World, transparent cost estimation, and timely handover.",
    channel: "Build World",
    duration: "02:40",
    date: "2024",
    type: "youtube",
    youtubeId: "X1m_7Yylq-A",
    thumbnail: "/images/p4uyIbEy3HSZxkgDksJHaTmoif0.webp",
    className: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
];

export const videoCategories = [
  "All Videos",
  "Luxury Residences",
  "Commercial Projects",
  "Inauguration & Handovers",
  "Site Progress & Engineering",
  "Client Stories",
];

export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  videoUrl?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  // {
  //   year: "2024",
  //   conference: "NeurIPS",
  //   title: "Scalable Causal Discovery in High-Dimensional Time Series",
  //   authors: "Jane Smith, Sarah Johnson, Yue Zhang",
  //   paperUrl: "https://arxiv.org/abs/2409.15476",
  //   codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
  //   //bibtex: "https://arxiv.org/abs/2409.15476.bib",
  //   tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   award: "🏆 Best Paper Award",
  //   // if you have an image in public/images, you can use it like this:
  //   // imageUrl: "/images/publication-image.jpg"
  // },
  {
    year: "2025",
    conference: "CHI",
    title: "Project TapTap: A Longitudinal Study Exploring Non-Verbal Communication through Vibration Signals Between Teachers and Blind or Low Vision Music Learners",
    authors: "Leon Lu, Chase Crispin, Ziyue Piao, Aino Eze-Anyanwu, Audrey Girouard",
    paperUrl: "https://dl.acm.org/doi/full/10.1145/3706598.3713298",
    imageUrl: "/assets/img/pub-CHI25.png",
    tldr: "Exploring how wearable haptics could facilitate communication between sighted teachers and BLV students during one-on-one music lessons."
  },
  {
    year: "2024",
    conference: "Actuators",
    title: "Assessing the Impact of Force Feedback in Musical Knobs on Performance and User Experience",
    authors: "Ziyue Piao, Christian Frisson, Bavo Van Kerrebroeck, Marcelo M. Wanderley",
    paperUrl: "https://www.mdpi.com/2076-0825/13/11/462",
    codeUrl: "https://github.com/piaoziyue/Bend-aid-Actuators-2024",
    imageUrl: "/assets/img/pub-Actuators24.png",
    award: "🏆 Best Oral Presentation award at IECAT 2024",
    tldr: "Exploring how force feedback in musical knobs enhances performance and user experience."
  },
  {
    year: "2023",
    conference: "ArtsIT",
    title: "MappEMG: Enhancing Music Pedagogy by Mapping Electromyography to Multimodal Feedback",
    authors: "Ziyue Piao, Marcelo M. Wanderley, Felipe Verdugo",
    paperUrl: "https://link.springer.com/chapter/10.1007/978-3-031-55312-7_24",
    codeUrl: "https://github.com/piaoziyue/MappEMG-ArtsIT-2023",
    videoUrl: "https://youtu.be/29G4OW8IAj0?si=xrUHnhBggay1Lcrz",
    imageUrl: "/assets/img/pub-ArtsIT23.jpeg",
    tldr: "Introducing MappEMG, a tool that connects electromyography with multimodal feedback to enhance music education."
  },
  {
    year: "2022",
    conference: "NIME",
    title: "Sensing the Breath: A Multimodal Singing Tutoring Interface with Breath Guidance",
    authors: "Ziyue Piao, Gus Xia",
    paperUrl: "https://nime.pubpub.org/pub/orgf5hrv/release/1",
    codeUrl: "https://github.com/piaoziyue/Sensing-the-Breath-2022",
    videoUrl: "https://www.youtube.com/watch?v=MiBfqQpaiPQ",
    imageUrl: "/assets/img/pub-NIME22.png",
    tldr: "A singing tutoring interface that uses multimodal feedback to guide breath control during practice."
  },
  {
    year: "2021",
    conference: "NIME",
    title: "A Wearable Haptic Interface for Breath Guidance in Vocal Training",
    authors: "Yinmiao Li, Ziyue Piao, Gus Xia",
    paperUrl: "https://nime.pubpub.org/pub/cgi7t0ta/release/9",
    videoUrl: "https://www.youtube.com/watch?v=-t-u0V-27ng&list=PLgHv2PfY6vRImKC2SGQopXBbYWSxuZBex&index=58",
    imageUrl: "/assets/img/pub-NIME21.png",
    tldr: "A wearable haptic device designed to assist singers in managing their breath control during vocal training."
  }
];

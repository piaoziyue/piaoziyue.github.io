export interface Portfolio {
  title: string;
  description: string;
  imageUrl?: string;
  projectUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Singing Rehearsal Recordings",
    description: "",
    //   "A framework for discovering causal relationships in high-dimensional time series data using state-of-the-art machine learning techniques.",
    projectUrl: "https://youtu.be/FhGFUh8TIeQ?si=Z4wfFsNRiujNLKW-",
    imageUrl:
      "/assets/img/portfolio/performance/per_sing_setu.png",
  },
  // {
  //   title: "Automatic Re-arrangement with Compositional Style Transfer",
  //   description: "",
  //   // description:
  //   //   "A framework for discovering causal relationships in high-dimensional time series data using state-of-the-art machine learning techniques.",
  //   // technologies: ["Python", "PyTorch", "React"],
  //   projectUrl: "https://youtu.be/Yj4AGCS4tXE?si=FLEd-sKWIHLDHxlO",
  //   imageUrl:
  //     "/assets/img/portfolio/performance/choir.png",
  //   // codeUrl: "https://github.com/username/project",
  // },
  {
    title: "Dao: A Laptop Orchestra Performance",
    description: "",
    //   "A framework for discovering causal relationships in high-dimensional time series data using state-of-the-art machine learning techniques.",
    projectUrl: "https://youtu.be/srSfYNQEwgs?si=5plhiUn5e28fvjGM",
    imageUrl:
      "/assets/img/portfolio/performance/per_dao.png",
  },
  {
    title: "Photography 📷 & Design 🧑‍🎨",
    description: "",
    //   "A framework for discovering causal relationships in high-dimensional time series data using state-of-the-art machine learning techniques.",
    projectUrl: "https://www.flickr.com/photos/200919940@N02/",
    imageUrl:
      "/assets/img/portfolio/photo/pho4.jpg",
  },
];

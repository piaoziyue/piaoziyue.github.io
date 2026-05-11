export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Ziyue (Monica) Piao",
  title: "Ph.D. Candidate",
  institution: "McGill University",
  // Note that links work in the description
  description: "I am Ziyue Monica Piao, a Ph.D. student at <a href=\"https://www.idmil.org/\" target=\"_blank\"><u>Input Devices and Music Interaction Lab</u></a> and Music Performance and Body Lab, McGill University, supervised by <a href=\"https://www.mcgill.ca/music/marcelo-m-wanderley\" target=\"_blank\"><u>Marcelo M. Wanderley</u></a> and <a href=\"https://www.mcgill.ca/music/isabelle-cossette\" target=\"_blank\"><u>Isabelle Cossette</u></a>. My research interests center around <a href=\"https://nime.org/\" target=\"_blank\"><u>New Interfaces for Musical Expression (NIME)</u></a>, with a particular focus on musical haptics and embodied interaction. I aim to use sensor technology and haptics to facilitate a shared kinesthetic music experience among diverse individuals. I have worked as a research intern in Yamaha with <a href=\"https://www.yamaha.com/en/tech-design/research/student/akiramaezawa/\" target=\"_blank\"><u>Akira Maezawa</u></a> and Yohei Wada and Sony CSL with <a href=\"https://www.sonycsl.co.jp/en/people/shinichi-furuya/profile/\" target=\"_blank\"><u>Shinichi Furuya</u></a> and <a href=\"https://junis.sakura.ne.jp/wp/\" target=\"_blank\"><u>Jun Nishida</u></a>. I have also worked as a research assistant with <a href=\"http://www.musicxlab.com/members/gus/\" target=\"_blank\"><u>Gus Xia</u></a> at <a href=\"http://www.musicxlab.com/\" target=\"_blank\"><u>Music X Lab</u></a>, New York University Shanghai, <a href=\"https://www.cs.cmu.edu/~rbd/\" target=\"_blank\"><u>Roger Dannenberg</u></a> at Carnegie Mellon University, and <a href=\"https://recherche.umontreal.ca/english/our-researchers/professors-directory/researcher/is/in32013/\" target=\"_blank\"><u>Felipe Verdugo</u></a> at University of Montreal. Besides, I was a student representative for <a href=\"https://www.cirmmt.org/en\" target=\"_blank\"><u>CIRMMT</u></a> and <a href=\"https://www.ieee-ras.org/haptics\" target=\"_blank\"><u>IEEE Technical Committee for Haptics</u></a>. As a classically trained soprano, I enjoy performing art songs. In my leisure time, I engage in activities such as video games 🎮, photography 📷, delicacies 🍲, and yoga 🧘. Feel free to connect with me on LinkedIn or email me!",
  email: "ziyue.piao@mail.mcgill.ca",
  imageUrl:
    "/assets/img/img_me.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=5ZCY2U8AAAAJ&hl",
  githubUsername: "piaoziyue",
  linkedinUsername: "ziyue-monica-piao-312924216",
  twitterUsername: "ParkZiyue",
  // blogUrl: "https://",
  cvUrl: "/assets/Ziyue Piao_CV.pdf",
  // cvUrl: "https://mcgill-my.sharepoint.com/:b:/r/personal/ziyue_piao_mail_mcgill_ca/Documents/CVs%20%26%20certificates/Ziyue%20Piao_CV_20250121.pdf?csf=1&web=1&e=CHElmJ",
  institutionUrl: "https://www.mcgill.ca/",
  // altName: "",
  // secretDescription: "I like dogs.",
};

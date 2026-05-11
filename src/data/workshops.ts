export interface WorkshopSpeaker {
  name: string;
  affiliation: string;
  role?: string;
  title?: string;
  abstract?: string;
  bio?: string;
  status?: "confirmed" | "pending";
}

export interface WorkshopSection {
  title: string;
  duration: string;
  description: string[];
}

export interface WorkshopReference {
  id: string;
  citation: string;
}

export interface WorkshopPageData {
  title: string;
  date: string;
  location: string;
  bannerImageUrl: string;
  overview: string[];
  motivation: string[];
  citedReferenceIds: string[];
  structureIntro: string;
  schedule: WorkshopSection[];
  invitedSpeakers: WorkshopSpeaker[];
  discussionThemes: string[];
  panelSpeakers: WorkshopSpeaker[];
  organisers: WorkshopSpeaker[];
  references: WorkshopReference[];
}

export const rmiWorkshop: WorkshopPageData = {
  title: "Respiratory Musical Interfaces (RMIs) in NIME",
  date: "June 23rd, 2026",
  location: "TBD",
  bannerImageUrl: "/assets/img/NIME26_RMIs_teaser.png",
  overview: [
    "Breathing is a fundamental physiological process that occupies a unique space in human-computer interaction, sitting at the intersection of autonomic reflex and conscious control. In the context of New Interfaces for Musical Expression (NIME), Respiratory Musical Interfaces (RMIs) have emerged as a powerful modality for high-fidelity, embodied musical control.",
    "This workshop aims to cultivate a dedicated research community to explore the technical, aesthetic, and physiological dimensions of RMIs. The session transitions from foundational respiratory biomechanics and real-time signal processing to implementation insights from leading practitioners across academia and industry.",
    "Through a combination of technical tutorials, hands-on engagement with custom RMI wearables, and a moderated panel discussion, participants will address critical topics facing the field. By synthesizing diverse perspectives on embodied interaction and bio-sensing, this workshop seeks to define a future roadmap for the next generation of expressive respiratory interfaces.",
  ],
  motivation: [
    "Breathing represents one of the most fundamental human physiological processes, making it a compelling modality for musical expression and human-computer interaction. Unlike discrete button presses or gestural movements, breath offers continuous, nuanced control that naturally connects the performer’s internal state with external sonic output. Breathing is also a unique interface because it is partially conscious and partially automatic, allowing for both deliberate and organic musical control.",
    "Within NIME, research on breath as an input channel has advanced significantly over the past two decades, leading to the emergence of what we define as Respiratory Musical Interfaces (RMIs): systems that leverage respiratory data as a primary, high-fidelity controller for musical performance.",
    "NIME has contributed foundational technical approaches, design methodologies, and performance applications for RMI research. Early systems established breath pressure sensing, bidirectional bio-sensing, and therapeutic-artistic bridges, while later work expanded RMIs into dance, biofeedback, soma design, singing pedagogy, and location-based interaction. Together, these projects demonstrate NIME’s role in advancing the technical, artistic, and theoretical dimensions of respiratory-based musical interaction.",
    "This workshop aims to cultivate a research community dedicated to advancing RMIs. By grounding designers in the physiological mechanics of breathing, we aim to support the creation of high-fidelity, embodied systems that move beyond biological necessity and become flexible musical controllers. Central to this effort is a discussion of the limitations of legacy systems, including mechanical latency, motion artifacts from torso movement, and the constraints of binary breath triggers.",
    "By exploring emergent sensing modalities and refined mapping strategies, the workshop seeks to overcome these technical barriers and unlock the full expressive capabilities of breath as a primary musical interface.",
  ],
  citedReferenceIds: [
    "king2017supporting",
    "burr2023breathtures",
    "zaccaro2018breath",
    "scavone2003pipe",
    "nagashima2003bio",
    "siwiak2009catch",
    "lee2012real",
    "bhandari2015music",
    "cotton2021body",
    "piao2022sensing",
    "diaz2019intimal",
    "chen2025exploring",
    "chen2026vocal",
  ],
  structureIntro:
    "The workshop is designed as a four-hour session, moving from foundational physiological theory to practical insights from RMI designers and researchers, and finally to a forward-looking discussion on future RMIs. The schedule is divided into three core modules with two 15-minute networking breaks in between.",
  schedule: [
    {
      title: "Part 1: Breathing Foundations",
      duration: "1 Hour",
      description: [
        "The opening hour establishes a shared language between biological mechanics and digital data. We begin with an introduction to respiratory biomechanics, focusing on the distinction between diaphragmatic and thoracic movement and their respective roles in musical phrasing.",
        "We then demonstrate common real-time signal processing techniques for RMIs, including normalization, low-pass filtering for motion artifact suppression, and high-level feature extraction such as BPM and apnea detection.",
        "On-site participants will have the opportunity for hands-on engagement with custom RMI wearables, allowing for real-time interaction and experiential evaluation of the systems.",
      ],
    },
    {
      title: "Part 2: Wearable Realities and Practitioner Insights",
      duration: "1.5 Hours",
      description: [
        "This segment focuses on the implementation of RMIs in professional performance contexts. The session features three distinguished experts, who will each provide concentrated insights in a hybrid format.",
        "To support a diverse exchange, speakers are encouraged to use flexible formats such as short lectures, interactive demonstrations, and prototyping showcases, followed by a moderated Q&A.",
      ],
    },
    {
      title: "Part 3: Synthesis and Future Roadmap",
      duration: "1 Hour",
      description: [
        "The final hour shifts from existing technologies to defining the next generation of RMIs. This session features a moderated panel discussion and an open forum involving invited researchers, on-site participants, and remote attendees.",
        "Four senior researchers and professors will join the discussion.",
      ],
    },
  ],
  invitedSpeakers: [
    {
      name: "Dr. Bavo Van Kerrebroeck",
      affiliation: "Grent University",
      title: "Presentation Title: TBD",
      abstract: "Abstract: TBD",
    },
    {
      name: "Dr. Kanyu Chen",
      affiliation: "University of Tokyo",
      title: "Presentation Title: TBD",
      abstract: "Abstract: TBD",
    },
    {
      name: "Daniel Chin",
      affiliation: "NYU Shanghai",
      title: "Presentation Title: TBD",
      abstract: "Abstract: TBD",
    },
  ],
  discussionThemes: [
    "The Autonomy Paradox: Conscious Intent and Non-conscious Reaction. How can mapping strategies distinguish between deliberate musical phrasing and the body’s organic physiological demands, without imposing a cognitive tax on performance?",
    "Beyond the Discrete: From Triggering to Instrumental Control. What technical advances are required for future wearables to capture fluid nuances in volume, rate, and pressure and support truly instrumental breath control?",
    "The Invisible Burden: Scientific Rigor and Artistic Freedom. How do we balance the precision of medical-grade sensing with the psychological, physical, and aesthetic freedom required for high-stakes musical performance?",
    "Agency and the AI Gap. As RMIs integrate with AI and cloud-based bio-sensing, what ethical questions emerge when internal physiological states become persistent digital assets, and does AI-mediated interaction bridge or widen the embodied gap?",
  ],
  panelSpeakers: [
    {
      name: "Prof. Isabelle Cossette",
      affiliation: "McGill University",
      bio: "Bio: TBD",
      status: "confirmed",
    },
    {
      name: "Prof. Atau Tanaka",
      affiliation: "Goldsmiths, University of London",
      bio: "Bio: TBD",
      status: "confirmed",
    },
    {
      name: "Dr. Bavo Van Kerrebroeck",
      affiliation: "Ghent University",
      bio: "Bio: TBD",
      status: "confirmed",
    },
    {
      name: "Prof. Jamie A. Ward",
      affiliation: "Goldsmiths, University of London",
      bio: "Bio: TBD",
      status: "pending",
    },
  ],
  organisers: [
    {
      name: "Ziyue (Monica) Piao",
      affiliation: "McGill University",
      bio: "Ziyue (Monica) Piao is a Ph.D. candidate in Music Technology at McGill University’s Schulich School of Music, supervised by Prof. Marcelo M. Wanderley and Prof. Isabelle Cossette. Her research sits at the intersection of wearable design and embodied interaction, with a specialized interest in how wearable systems can capture respiratory physiology and be applied to embodied musical practices. She is currently collaborating with Yamaha on sensing wearables for capturing and analyzing breathing patterns during piano performance. Her work has been recognized with the FRQSC Doctoral Scholarship and has been published in venues including ACM CHI, NIME, and TEI. She is also an active contributor to communities such as the IEEE Technical Committee on Haptics, CIRMMT, NIME, ISMIR, and TEI.",
    },
    {
      name: "Kanyu (Cady) Chen",
      affiliation: "Keio University, Tokyo, Japan",
      bio: "Kanyu (Cady) Chen is a Ph.D. researcher in Wearable Computing at the Graduate School of Media Design, Keio University, supervised by Prof. Kai Kunze and Prof. Kato Akira. Her research focuses on applying physiological sensing technologies to embodied skill acquisition. She investigates how multimodal sensing technologies, including electromyography, ultrasonography, respiration sensing, and audio signal analysis, can support vocal training and music cognition. Her work aims to make internal physiological processes perceptible and actionable, bridging somatic awareness and expressive musical performance. Her research has appeared in venues such as ACM CHI, UbiComp, SIGGRAPH Asia, and IEEE ISMAR, and she actively serves the community as a program committee member for conferences including CHI and UbiComp.",
    },
  ],
  references: [
    {
      id: "king2017supporting",
      citation:
        "King, E. (2017). Supporting gestures: Breathing in piano performance. In Music and Gesture (pp. 142–164). Routledge.",
    },
    {
      id: "zaccaro2018breath",
      citation:
        "Zaccaro, A., Piarulli, A., Laurino, M., Garbella, E., Menicucci, D., Neri, B., & Gemignani, A. (2018). How breath-control can change your life: A systematic review on psycho-physiological correlates of slow breathing. Frontiers in Human Neuroscience, 12, 409421.",
    },
    {
      id: "burr2023breathtures",
      citation:
        "Burr, L. A., Šula, J., Mayrhauser, J., & Meschtscherjakov, A. (2023). BREATHTURES: A first step towards breathing gestures as distinct input modality. CHI Conference on Human Factors in Computing Systems, 1–6.",
    },
    {
      id: "scavone2003pipe",
      citation:
        "Scavone, G. P. (2003). The PIPE: Explorations with breath control. Proceedings of the International Conference on New Interfaces for Musical Expression, 15–18.",
    },
    {
      id: "nagashima2003bio",
      citation:
        "Nagashima, Y. (2003). Bio-sensing systems and bio-feedback systems for interactive media arts. Proceedings of the International Conference on New Interfaces for Musical Expression, 48–53.",
    },
    {
      id: "siwiak2009catch",
      citation:
        "Siwiak, D., Berger, J., & Yang, Y. (2009). Catch Your Breath: Musical biofeedback for breathing regulation. Proceedings of the International Conference on New Interfaces for Musical Expression.",
    },
    {
      id: "lee2012real",
      citation:
        "Lee, J.-S., & Yeo, W. S. (2012). Real-time modification of music with dancer's respiration pattern. Proceedings of the International Conference on New Interfaces for Musical Expression.",
    },
    {
      id: "bhandari2015music",
      citation:
        "Bhandari, R., Parnandi, A., Shipp, E., Ahmed, B., & Gutierrez-Osuna, R. (2015). Music-based respiratory biofeedback in visually-demanding tasks. Proceedings of the International Conference on New Interfaces for Musical Expression, 78–82.",
    },
    {
      id: "cotton2021body",
      citation:
        "Cotton, K., Sanches, P., Tsaknaki, V., & Karpashevich, P. (2021). The Body Electric: A NIME designed through and with the somatic experience of singing. Proceedings of the International Conference on New Interfaces for Musical Expression.",
    },
    {
      id: "piao2022sensing",
      citation:
        "Piao, Z., & Xia, G. (2022). Sensing the breath: A multimodal singing tutoring interface with breath guidance. Proceedings of the International Conference on New Interfaces for Musical Expression.",
    },
    {
      id: "diaz2019intimal",
      citation:
        "Diaz, X. A., Sanchez, V. E. G., & Erdem, C. (2019). INTIMAL: Walking to find place, breathing to feel presence. Proceedings of the International Conference on New Interfaces for Musical Expression, 246–249.",
    },
    {
      id: "chen2025exploring",
      citation:
        "Chen, K., Chang, Z., Zou, Q., & Kunze, K. (2025). Exploring Singing Breath: Physiological insights and directions for breath-aware augmentation in mixed reality design. Companion of the 2025 ACM International Joint Conference on Pervasive and Ubiquitous Computing, 702–706.",
    },
    {
      id: "chen2026vocal",
      citation:
        "Chen, K., Panskus, R., Wu, E., Peng, Y., Saito, D., Kamiyama, E., Li, R., Liao, C.-C., Marky, K., Kato, A., Koike, H., & Kunze, K. (2026). Sensing Your Vocals: Exploring the activity of vocal cord muscles for pitch assessment using electromyography and ultrasonography. CHI Conference on Human Factors in Computing Systems.",
    },
  ],
};
export interface Workshop {
  title: string;
  date?: string;
  location?: string;
  description?: string;
  signupUrl?: string;
  imageUrl?: string;
}

export const workshopData: Workshop[] = [
  {
    title: "CHI26 Body Transformation Workshop (example)",
    date: "TBD — 2026",
    location: "Online / Taipei",
    description:
      "A hands-on workshop exploring body transformation techniques, combining lectures, demos, and practical exercises. Based on the structure of examples like imbodylab's workshop pages.",
    signupUrl: "https://example.com/register",
    imageUrl: "/assets/img/portfolio/design/placeholder-workshop.jpg",
  },
];

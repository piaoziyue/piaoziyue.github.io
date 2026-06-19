export interface WorkshopSpeaker {
  name: string;
  affiliation: string;
  url?: string;
  imageUrl?: string;
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
  date: "2:00 - 6:00 PM BST, June 23rd, 2026",
  location: "London, UK and online",
  bannerImageUrl: "/assets/workshop_img/NIME26_RMIs_teaser.png",
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
      duration: "2:00 – 3:00 PM BST (9:00 – 10:00 AM EDT)",
      description: [
        "The opening hour establishes a shared language between biological mechanics and digital data. We begin with an introduction to respiratory biomechanics, focusing on the distinction between diaphragmatic and thoracic movement and their respective roles in musical phrasing.",
        "We then demonstrate common real-time signal processing techniques for RMIs, including normalization, low-pass filtering for motion artifact suppression, and high-level feature extraction such as BPM and apnea detection.",
        "On-site participants will have the opportunity for hands-on engagement with custom RMI wearables, allowing for real-time interaction and experiential evaluation of the systems.",
      ],
    },
    {
      title: "Part 2: Wearable Realities and Practitioner Insights",
      duration: "3:15 – 4:45 PM BST (10:15 – 11:45 AM EDT)",
      description: [
        "This segment focuses on the implementation of RMIs in professional performance contexts. The session features three distinguished experts, who will each provide concentrated insights in a hybrid format.",
        "To support a diverse exchange, speakers are encouraged to use flexible formats such as short lectures, interactive demonstrations, and prototyping showcases, followed by a moderated Q&A.",
      ],
    },
    {
      title: "Part 3: Synthesis and Future Roadmap",
      duration: "5:00 – 6:00 PM BST (12:00 – 1:00 PM EDT)",
      description: [
        "The final hour shifts from existing technologies to defining the next generation of RMIs. This session features a moderated panel discussion and an open forum involving invited researchers, on-site participants, and remote attendees.",
        "Senior researchers and professors will join the discussion.",
      ],
    },
  ],
  invitedSpeakers: [
    {
      name: "Daniel Chin",
      url: "https://inspiring-yonath-a67980.netlify.app/",
      imageUrl: "/assets/workshop_img/Daniel.jpg",
      affiliation: "NYU Shanghai",
      title: "Presentation Title: Measuring, Modeling, and Resynthesizing the Six-Hole Recorder Flute: From Custom Sensors to Algorithms",
      abstract: "Abstract: Daniel presents a working pipeline for digitizing a physical six-hole recorder flute into an electric one. Topics include various sensor chamber designs, measuring how the flute acoustically responds to breath pressure, fitting a model, and a special sound synthesis technique on ESP32.",
    },
    {
      name: "Marco Donnarumma",
      url: "https://marcodonnarumma.com",
      imageUrl: "/assets/workshop_img/marco-donnarumma_by-dario-lagana_2_ed.jpg",
      affiliation: "Independent Artist and Researcher",
      title: "Presentation Title: Biophysical Music and Interdisciplinary Performance: Sensing Corporeal Expression",
      abstract: "Abstract: The application of physiological computing to music and performance has a long history of varied approaches. In this talk, Marco will first offer a concise historical overview and then focus on the past 15 years of biophysical music, a practice that began in the context of NIME and evolved from conventional concert settings into elaborate stage productions, enabling hybrid formats combining performance art, theater and dance with interactive music. ",
    },
        {
      name: "Bavo Van Kerrebroeck",
      url: "https://scholar.google.com/citations?hl=en&user=6sPOK5gAAAAJ",
      imageUrl: "/assets/workshop_img/Bavo.jpeg",
      affiliation: "Ghent University",
      title: "Presentation Title: From Breathing in the Lab to at the Concert: Measuring and Sonifying Auditory-Respiratory Synchrony",
      abstract: "Abstract: Bavo presents two studies on respiratory–musical interaction: a controlled lab study on spontaneous synchronization to adaptive breathing sounds, and a large-scale concert study using smartphone motion data from audience members. Together, they expose methodological tensions between precision, ecological validity, real-time sensing, and collective biofeedback.",
    },
  ],
  discussionThemes: [
    "Theme 1: Decoding the Biomechanical Symphony. Modeling Music-Breathing Coupling. From a research perspective, how can we move beyond basic correlation to build robust computational models of the complex, bi-directional coupling between respiratory biomechanics and musical structures? What physiological parameters matter most when analyzing singer/instrumentalist behaviors, and how can these insights inform generative systems?",
    // "Theme 2: Engineering the Second Skin. Next-Generation Wearable Design for RMIs. What technical and material breakthroughs are required for future wearables to move past rigid 'medical-grade' constraints into fluid, instrumental control? How do we design soft, textile-integrated sensors that capture nuanced multi-modal data (volume, rate, and pressure) while ensuring long-term physical comfort and reliability on stage?",
    "Theme 2: The Artistry of Co-Regulation. Integrating Breath as an Expressive Medium. From an artist's perspective, how can breath be woven into the fabric of future live performances? How do performers visually and sonically stage the 'invisible' act of respiration, and how can mapping strategies balance a performer's deliberate musical phrasing with the body's organic, non-conscious metabolic survival demands?",
    "Theme 3: The Adaptive Bio-Aesthetic. AI, Individual Differences, and Custom Body Models. Respiratory patterns are deeply unique—varying by training, anatomy, and real-time performance anxiety. In the context of NIME, how can we use AI not as static processors, but as adaptive co-performers that learn an individual's unique physiological signature? How can AI bridge the gap between custom wearable designs and fluid performance mapping, transforming individual physiological constraints into personalized creative affordances?",
  ],
  panelSpeakers: [
    {
      name: "Xiao Xiao",
      url: "https://www.linkedin.com/in/xiaosquared/",
      imageUrl: "/assets/workshop_img/Xiao Xiao.JPG",
      affiliation: "Institute for Future Technologies",
      bio: "Bio: Xiao Xiao is a Principle Investigator and the director of the Institute for Future Technologies in Paris. Her work explores music as a site for designing embodied, affective, and imaginative interactions with technology. She develops systems involving gesture, AI, haptics, voice, and augmented instruments to study presence, learning, memory, and creative expression.",
      status: "confirmed",
    },
    {
      name: "Bavo Van Kerrebroeck",
      imageUrl: "/assets/workshop_img/Bavo.jpeg",
      url: "https://scholar.google.com/citations?hl=en&user=6sPOK5gAAAAJ",
      affiliation: "Ghent University",
      bio: "Bio: Bavo studies how adaptive auditory feedback and sonification can enhance self-regulation and well-being. His work bridges psychophysiology, human-computer interaction, and music cognition to explore how shared auditory and respiratory entrainment fosters relaxation and connectedness. He aims to develop scientifically grounded, engaging, and accessible biofeedback systems that combine technology, cognition, and the arts.",
      status: "confirmed",
    },
    {
      name: "Eleonora Oreggia",
      url: "https://xname.cc/",
      affiliation: "Goldsmiths, University of London",
      imageUrl: "/assets/workshop_img/Eleonora.png",
      bio: "Bio: Eleonora is the head of the Electronic Music, Computing and Technology BMus/BSc at Goldsmiths and the creator of REBUS, a contactless musical system for audiovisual performance composition using electromagnetic waves. Her research, based in the Waves Lab, explores electromagnetic sensing systems for expressive interaction in electronic music, performance and time based media art.",
      status: "confirmed",
    },
    {
      name: "Shinya Fujii",
      url: "https://neuromusic.sfc.keio.ac.jp/?lang=en",
      affiliation: "Keio University",
      imageUrl: "/assets/workshop_img/Shinya.jpg",
      bio: "Bio: Shinya Fujii is an Associate Professor in the Faculty of Environment and Information Studies, the Director of the NeuroMusic / x-Music Laboratory at Keio University Shonan Fujisawa Campus (SFC). His research interests encompass the Neurosciences and Music, particularly the neural origins of human musicality in perceiving and producing rhythm, beat, and groove.",
      status: "confirmed",
    },
    {
      name: "Isabelle Cossette",
      url: "https://www.mcgill.ca/music/isabelle-cossette",
      affiliation: "McGill University",
      imageUrl: "/assets/workshop_img/Isabelle Cossette.png",
      bio: "Bio: Isabelle is an Associate Professor of Music Education at the Schulich School of Music, McGill University. A key area of her research focuses on respiratory mechanics, chest wall dynamics, and breathing patterns in instrumentalists and singers. Her work provides foundational insights into how performers regulate and coordinate their bodies in musical performance.",
      status: "confirmed",
    }
  ],
  organisers: [
    {
      name: "Ziyue (Monica) Piao",
      affiliation: "McGill University",
      url: "https://piaoziyue.github.io",
      imageUrl: "/assets/workshop_img/Ziyue Piao.jpg",
      bio: "Ziyue is a Ph.D. candidate in Music Technology at McGill University's Schulich School of Music, supervised by Prof. Marcelo M. Wanderley and Prof. Isabelle Cossette. Her research sits at the intersection of wearable design and embodied interaction, with a specialized interest in how wearable systems can capture respiratory physiology and be applied to embodied musical practices. She is currently collaborating with Yamaha on desining sensing wearables for capturing and analyzing breathing patterns during music performances. ",
    },
    {
      name: "Kanyu (Cady) Chen",
      affiliation: "University of Tokyo",
      url: "https://www.linkedin.com/in/kanyu-c-507a56124",
      imageUrl: "/assets/workshop_img/Kanyu Chen.jpeg",
      bio: "Kanyu is a Postdoctoral Researcher at the University of Tokyo. She earned her Ph.D. from the Graduate School of Media Design at Keio University under the supervision of Prof. Kai Kunze and Prof. Akira Kato. Her research focuses on applying physiological sensing technologies to embodied skill acquisition. Specifically, she investigates how multimodal sensing technologies—including electromyography (EMG), ultrasonography, respiratory sensing, and audio signal analysis—can support vocal training and music cognition. Her work aims to make internal physiological processes perceptible and actionable, effectively bridging somatic awareness with expressive musical performance.",
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
    title: "NIME 26 RMIs Workshop",
    date: "2:00 - 6:00 PM, June 23rd, 2026",
    location: "London, UK and online",
    signupUrl: "https://forms.gle/wqXE9jFXPeV5ZcBk7",
    imageUrl: "/assets/img/portfolio/design/placeholder-workshop.jpg",
  },
];

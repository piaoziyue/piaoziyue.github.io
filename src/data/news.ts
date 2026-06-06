export interface News {
  date: string;
  title: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
 {
    date: "June 2026",
    title: "I was accepted to my first artistic residency program in Bled Contemporary Music Week.",
    link: "https://enuntiatio-praefatio-formulae.com/FESTIVAL/",
  },
  {
    date: "May 2026",
    title: "A published journal article will be presented as a poster at EuroHaptics 2026.",
    link: "https://www.mdpi.com/2076-0825/13/11/462",
  },
  {
    date: "May 2026",
    title: "We are organizing the 2026 CIRMMT Student Symposium on May 21 2026.",
    link: "https://www.cirmmt.org/en/events/general-assembly/21-may-2026-ss-ga",
  },
  {
    date: "April 2026",
    title: "A full paper and a workshop paper have been accepted at NIME 2026!",
    link: "https://nime2026.org/",
  },
  // {
  //   date: "March 2026",
  //   title: "A workshop paper has been accepted at the Body Transformation Experiences workshop at CHI 2026.",
  //   link: "https://imbodylab.com/chi26-body-transformation-workshop/",
  // },
];

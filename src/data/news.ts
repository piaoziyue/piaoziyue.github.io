export interface News {
  date: string;
  title: string;
  titleHtml?: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
//  {
//     date: "June 2026",
//     title: "I was accepted to my first artistic residency program in Bled Contemporary Music Week.",
//     link: "https://enuntiatio-praefatio-formulae.com/FESTIVAL/",
//   },
  {
    date: "May 2026",
    title: "A published journal article will be presented as a poster at EuroHaptics 2026, session D on July 8th.",
    link: "https://eurohaptics.org/ehc2026/program/previous-published-paper-session/#PPP-D",
  },
  {
    date: "May 2026",
    title: "We are organizing the 2026 CIRMMT Student Symposium on May 21 2026.",
    link: "https://www.cirmmt.org/en/events/general-assembly/21-may-2026-ss-ga",
  },
  {
    date: "April 2026",
    title: "A full paper and a workshop paper have been accepted at NIME 2026!",
    titleHtml: `<a href="https://nime2026.org/proceedings/52.html" target="_blank" rel="noopener noreferrer" class="underline hover:text-zinc-600">A full paper</a> and a <a href="/RMIs_workshop" class="underline hover:text-zinc-600">workshop paper</a> have been accepted at NIME 2026!`,
  },
  // {
  //   date: "March 2026",
  //   title: "A workshop paper has been accepted at the Body Transformation Experiences workshop at CHI 2026.",
  //   link: "https://imbodylab.com/chi26-body-transformation-workshop/",
  // },
];

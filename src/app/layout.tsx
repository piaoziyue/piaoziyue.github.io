import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";
import { ThemeToggle } from "@/components/theme-toggle";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
  icons: {
    icon: "/namelogo1.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'dark' || (!storedTheme && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} antialiased`}
      >
        <ThemeToggle />
        <main className="">{children}</main>
        <footer className="border-t border-neutral-200 dark:border-[#2f2b24] bg-[#FFFCF8] dark:bg-[#191816] transition-colors duration-200">
          <div className="flex flex-row mx-auto max-w-7xl px-6 py-12 md:flex md:items-start md:justify-between ">
            <div className="mb-4 text-sm text-neutral-600 dark:text-[#9E9688]">
              
            <div className="mb-4 text-sm text-neutral-600 dark:text-[#9E9688]">
                <a href="https://mapmyvisitors.com/profile/1c7b5" title="Visit tracker" className="hover:text-neutral-900 dark:hover:text-[#F5EFE6] transition-colors">
                  © {new Date().getFullYear()} {aboutMe.name}.
                </a>
                <img
                  src="https://mapmyvisitors.com/map.png?d=uoD0Qy3hp1PgIzdGX992kQOODDqw3-G5h63jFHn-5B8&cl=ffffff"
                  alt="mapmyvisitors Tracker"
                  style={{ display: "none" }} // Hides the image completely
                />
              </div> 
              
              {aboutMe.secretDescription && (
                <p className="text-xs text-neutral-600 dark:text-[#9E9688] mt-4">
                  {aboutMe.secretDescription}
                </p>
              )}
            </div>

            <div className="mb-4">
              <p className="text-sm text-neutral-500 dark:text-[#8C8477] justify">
                Built with{" "}
                <a
                  href="https://github.com/tovacinni/research-website-template"
                  className="underline hover:text-neutral-800 dark:hover:text-[#F5EFE6] transition-colors"
                >
                  research-website-template
                </a>
              </p>
            </div>
          </div>

        </footer>
      </body>
    </html>
  );
}

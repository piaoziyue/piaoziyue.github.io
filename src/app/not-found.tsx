import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFFCF8] dark:bg-[#191816] text-zinc-900 dark:text-[#EDE6D8] transition-colors duration-200">
      {/* Lets the visitor counter in layout.tsx record this visit as a 404 */}
      <div id="not-found-marker" hidden />
      <div className="max-w-screen-lg mx-auto px-8 py-24 space-y-6">
        <h1 className="font-serif text-4xl">Page not found</h1>
        <p className="text-neutral-600 dark:text-[#9E9688]">
          This page doesn&apos;t exist or has moved.
        </p>
        <div className="flex gap-6 text-sm">
          <Link href="/" className="underline underline-offset-4 hover:opacity-70">
            Home
          </Link>
          <a href="/artworks/" className="underline underline-offset-4 hover:opacity-70">
            Artwork Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}

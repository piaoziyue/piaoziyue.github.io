import { ArrowUpRight } from "lucide-react";
import { News } from "@/data/news";

export function NewsEntry({ news }: { news: News }) {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col flex-1">
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">{news.date}</p>
        <h4 className="font-serif text-md">
          {news.titleHtml ? (
            <span
              className="text-zinc-800 dark:text-zinc-200 [&_a]:underline [&_a]:text-zinc-900 dark:[&_a]:text-zinc-100 [&_a:hover]:text-zinc-600 dark:[&_a:hover]:text-zinc-400"
              dangerouslySetInnerHTML={{ __html: news.titleHtml }}
            />
          ) : news.link ? (
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-zinc-800 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors duration-300"
            >
              {news.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            <span className="text-zinc-800 dark:text-zinc-200">{news.title}</span>
          )}
        </h4>
      </div>
    </div>
  );
}

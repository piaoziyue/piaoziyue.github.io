import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { News } from "@/data/news";

export function NewsEntry({ newsItems }: { newsItems: News[] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleItems = 4; // Number of items to show by default

  // Split news items into visible and hidden arrays
  const displayedNews = newsItems.slice(0, visibleItems);
  const hiddenNews = newsItems.slice(visibleItems);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Always visible news items */}
      {displayedNews.map((news, index) => (
        <div key={index} className="flex flex-row gap-4">
          <div className="flex flex-col flex-1">
            <p className="text-xs text-zinc-500 mb-1">{news.date}</p>
            <h4 className="font-serif text-md">
              {news.link ? (
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-zinc-800 hover:text-zinc-600 transition-colors duration-300"
                >
                  {news.title}
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </a>
              ) : (
                news.title
              )}
            </h4>
          </div>
        </div>
      ))}

      {/* Expandable section */}
      {hiddenNews.length > 0 && (
        <>
          <button
            onClick={toggleExpand}
            className="flex items-center gap-2 text-zinc-600 hover:text-zinc-800 transition-colors duration-300"
          >
            {isExpanded ? (
              <>
                Hide <ChevronUp size={20} />
              </>
            ) : (
              <>
                Show more <ChevronDown size={20} />
              </>
            )}
          </button>

          {/* Hidden news items - only shown when expanded */}
          {isExpanded && (
            <div className="flex flex-col gap-6">
              {hiddenNews.map((news, index) => (
                <div key={index} className="flex flex-row gap-4">
                  <div className="flex flex-col flex-1">
                    <p className="text-xs text-zinc-500 mb-1">{news.date}</p>
                    <h4 className="font-serif text-md">
                      {news.link ? (
                        <a
                          href={news.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 text-zinc-800 hover:text-zinc-600 transition-colors duration-300"
                        >
                          {news.title}
                          <ArrowUpRight
                            size={16}
                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                          />
                        </a>
                      ) : (
                        news.title
                      )}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
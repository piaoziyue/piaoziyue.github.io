"use client";

import { useState } from "react";
import { News } from "@/data/news";
import { NewsEntry } from "@/components/news-entry";
import { ChevronDown, ChevronUp } from "lucide-react";

interface NewsSectionProps {
  newsData: News[];
  initialCount?: number;
}

export function NewsSection({ newsData, initialCount = 3 }: NewsSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!newsData || newsData.length === 0) {
    return null;
  }

  const displayedNews = isExpanded ? newsData : newsData.slice(0, initialCount);

  return (
    <section>
      <h2 className="font-serif text-l mb-12 tracking-wide uppercase">News</h2>
      <div className="space-y-12">
        {displayedNews.map((news, index) => (
          <div key={index}>
            <NewsEntry news={news} />
          </div>
        ))}
      </div>

      {newsData.length > initialCount && (
        <div className="mt-8">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300 tracking-wider uppercase cursor-pointer"
          >
            {isExpanded ? (
              <>
                <span>Show less</span>
                <ChevronUp
                  size={14}
                  className="group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </>
            ) : (
              <>
                <span>See older news</span>
                <ChevronDown
                  size={14}
                  className="group-hover:translate-y-0.5 transition-transform duration-300"
                />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}

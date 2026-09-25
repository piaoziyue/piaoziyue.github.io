import { ArrowUpRight } from "lucide-react";
import { OrganizedEvent } from "@/data/organized-events";

export function OrganizedEventEntry({ event }: { event: OrganizedEvent }) {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col flex-1">
        <p className="text-xs text-zinc-500 mb-1">{event.date}</p>
        <h4 className="font-serif text-md">
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-zinc-800 hover:text-zinc-600 transition-colors duration-300"
          >
            {event.title}
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </a>
        </h4>
      </div>
    </div>
  );
}

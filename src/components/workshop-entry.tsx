import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Workshop } from "@/data/workshops";

interface WorkshopEntryProps {
  workshop: Workshop;
}

export function WorkshopEntry({ workshop }: WorkshopEntryProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      {workshop.imageUrl && (
        <div className="w-full md:w-48 flex-shrink-0">
          <div className="relative aspect-[16/9] md:aspect-square rounded-lg overflow-hidden">
            <Image
              src={workshop.imageUrl}
              alt={workshop.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="flex-1">
        <h3 className="font-serif text-xl mb-2">{workshop.title}</h3>
        {(workshop.date || workshop.location) && (
          <p className="text-xs text-zinc-500 mb-3">
            {workshop.date} {workshop.date && workshop.location ? `· ${workshop.location}` : workshop.location}
          </p>
        )}
        {workshop.description && (
          <p className="text-zinc-700 leading-relaxed mb-4">{workshop.description}</p>
        )}
        {workshop.signupUrl && (
          <a
            href={workshop.signupUrl}
            className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowUpRight size={14} />
            Register / Details
          </a>
        )}
      </div>
    </div>
  );
}

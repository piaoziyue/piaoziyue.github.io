import Image from "next/image";
import type { Metadata } from "next";
import { aboutMe } from "@/data/aboutme";
import {
  rmiWorkshop,
  type WorkshopReference,
  type WorkshopSection,
  type WorkshopSpeaker,
} from "@/data/workshops";

export const metadata: Metadata = {
  title: `${rmiWorkshop.title} | ${aboutMe.name}`,
  description: rmiWorkshop.overview[0],
};

export default function RMIsWorkshopPage() {
  const references = rmiWorkshop.references.filter((reference: WorkshopReference) =>
    rmiWorkshop.citedReferenceIds.includes(reference.id)
  );

  const isPart2Section = (title: string) =>
    title.includes("Part 2: Wearable Realities and Practitioner Insights");

  const isPart3Section = (title: string) =>
    title.includes("Part 3: Synthesis and Future Roadmap");

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="mx-auto max-w-5xl px-8 py-20 md:py-24">
        <div className="space-y-12 md:space-y-14">
          <section className="space-y-8">
            <div className="relative h-[300px] overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-sm md:h-[420px] lg:h-[500px]">
              <Image
                src={rmiWorkshop.bannerImageUrl}
                alt={rmiWorkshop.title}
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                <a
                  href="https://nime2026.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900 transition-colors duration-300"
                >
                  NIME 2026 Workshop
                </a>
              </p>
              <h1 className="font-serif text-4xl leading-tight text-zinc-900 md:text-5xl">
                {rmiWorkshop.title}
              </h1>
              <div className="flex flex-wrap gap-3 text-sm text-zinc-700">
                <span className="rounded-full border border-zinc-200 bg-white px-4 py-2">
                  <strong>Time:</strong> {rmiWorkshop.date}
                </span>
                <span className="rounded-full border border-zinc-200 bg-white px-4 py-2">
                  <strong>Location:</strong> {rmiWorkshop.location}
                </span>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-2xl tracking-wide">Overview</h2>
            <div className="space-y-4 text-base leading-8 text-zinc-700">
              {rmiWorkshop.overview.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-2xl tracking-wide">Motivation</h2>
            <div className="space-y-4 text-base leading-8 text-zinc-700">
              {rmiWorkshop.motivation.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="space-y-3">
              <h2 className="font-serif text-2xl tracking-wide">
                Workshop Structure
              </h2>
              <p className="text-base leading-8 text-zinc-700">
                {rmiWorkshop.structureIntro}
              </p>
            </div>

            <div className="space-y-6">
              {rmiWorkshop.schedule.map((item: WorkshopSection) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="font-serif text-xl text-zinc-900">
                      {item.title}
                    </h3>
                    <span className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                      {item.duration}
                    </span>
                  </div>
                  <div className="space-y-3 text-base leading-8 text-zinc-700">
                    {item.description.map((paragraph: string) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {isPart2Section(item.title) && (
                    <div className="mt-8 space-y-5 border-t border-zinc-200 pt-6">
                      <h4 className="font-serif text-lg text-zinc-900">
                        Speakers
                      </h4>
                      <div className="grid gap-5 md:grid-cols-2">
                        {rmiWorkshop.invitedSpeakers.map((speaker: WorkshopSpeaker) => (
                          <article
                            key={speaker.name}
                            className="rounded-2xl border border-zinc-200 bg-[#FFFCF8] p-6"
                          >
                            <div className="mb-3 flex items-start justify-between gap-3">
                              <div>
                                <h5 className="font-serif text-xl text-zinc-900">
                                  {speaker.name}
                                </h5>
                                <p className="text-sm text-zinc-500">
                                  {speaker.affiliation}
                                </p>
                              </div>
                            </div>
                            <div className="space-y-2 text-sm leading-7 text-zinc-700">
                              {speaker.title && <p>{speaker.title}</p>}
                              {speaker.abstract && <p>{speaker.abstract}</p>}
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  )}

                  {isPart3Section(item.title) && (
                    <div className="mt-8 space-y-8 border-t border-zinc-200 pt-6">
                      <div className="space-y-5">
                        <h4 className="font-serif text-lg text-zinc-900">
                          Panel Speakers
                        </h4>
                        <div className="grid gap-5 md:grid-cols-2">
                          {rmiWorkshop.panelSpeakers.map((speaker: WorkshopSpeaker) => (
                            <article
                              key={speaker.name}
                              className="rounded-2xl border border-zinc-200 bg-[#FFFCF8] p-6"
                            >
                              <div className="mb-3 flex items-start justify-between gap-3">
                                <div>
                                  <h5 className="font-serif text-xl text-zinc-900">
                                    {speaker.name}
                                  </h5>
                                  <p className="text-sm text-zinc-500">
                                    {speaker.affiliation}
                                  </p>
                                </div>
                              </div>
                              {speaker.bio && (
                                <p className="text-sm leading-7 text-zinc-700">
                                  {speaker.bio}
                                </p>
                              )}
                            </article>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-5">
                        <h4 className="font-serif text-lg text-zinc-900">
                          Themes
                        </h4>
                        <div className="space-y-4">
                          {rmiWorkshop.discussionThemes.map((theme: string) => {
                            const splitIndex = theme.indexOf(".");
                            const heading =
                              splitIndex > -1
                                ? theme.slice(0, splitIndex + 1)
                                : theme;
                            const body =
                              splitIndex > -1
                                ? theme.slice(splitIndex + 1).trim()
                                : "";

                            return (
                              <div
                                key={theme}
                                className="rounded-2xl border border-zinc-200 bg-[#FFFCF8] p-6"
                              >
                                <p className="font-serif text-lg text-zinc-900">
                                  {heading}
                                </p>
                                {body && (
                                  <p className="mt-3 text-base leading-8 text-zinc-700">
                                    {body}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-2xl tracking-wide">Organisers</h2>
            <div className="space-y-5">
              {rmiWorkshop.organisers.map((organiser: WorkshopSpeaker) => (
                <article
                  key={organiser.name}
                  className="rounded-2xl border border-zinc-200 bg-white p-6"
                >
                  <h3 className="font-serif text-xl text-zinc-900">
                    {organiser.name}
                  </h3>
                  <p className="mb-3 text-sm text-zinc-500">
                    {organiser.affiliation}
                  </p>
                  {organiser.bio && (
                    <p className="text-base leading-8 text-zinc-700">
                      {organiser.bio}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-5 pb-8">
            <h2 className="font-serif text-2xl tracking-wide">References</h2>
            <div className="space-y-4 text-sm leading-7 text-zinc-700">
              {references.map((reference: WorkshopReference) => (
                <p key={reference.id}>{reference.citation}</p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

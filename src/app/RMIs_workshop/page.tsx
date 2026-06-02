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

          {/* Registration block */}
          <section className="relative overflow-hidden rounded-3xl bg-zinc-900 px-8 py-10 text-white shadow-lg">
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #a78bfa 0%, transparent 60%), radial-gradient(circle at 20% 80%, #6ee7b7 0%, transparent 50%)" }}
            />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">Registration</p>
                <h2 className="font-serif text-3xl leading-snug">Join Us — In Person or Online</h2>
                <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
                  <span className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                    Hybrid participation available
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
                    Registration closes <strong className="text-white">June 20, 2026</strong>
                  </span>
                </div>
              </div>
              <a
                href="https://forms.gle/YDpLSmA8wKWPfLXm6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-zinc-900 shadow transition hover:bg-zinc-100"
              >
                Register Now →
              </a>
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
                      <div className="space-y-5">
                        {rmiWorkshop.invitedSpeakers.map((speaker: WorkshopSpeaker) => (
                          <article
                            key={speaker.name}
                            className="flex items-center gap-6 rounded-2xl border border-zinc-200 bg-[#FFFCF8] p-6"
                          >
                            {speaker.imageUrl ? (
                              <div className="h-36 w-36 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-200">
                                <Image src={speaker.imageUrl} alt={speaker.name} width={144} height={144} className="object-cover w-full h-full" />
                              </div>
                            ) : speaker.url ? (
                              <a href={speaker.url} target="_blank" rel="noopener noreferrer" className="h-36 w-36 flex-shrink-0 rounded-lg bg-zinc-200 block" />
                            ) : (
                              <div className="h-36 w-36 flex-shrink-0 rounded-lg bg-zinc-200" />
                            )}
                            <div className="min-w-0 flex-1">
                              <h5 className="font-serif text-xl text-zinc-900">
                                {speaker.url ? (
                                  <a href={speaker.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{speaker.name}</a>
                                ) : speaker.name}
                              </h5>
                              <p className="mb-3 text-sm text-zinc-500">
                                {speaker.affiliation}
                              </p>
                              <div className="space-y-2 text-sm leading-7 text-zinc-700">
                                {speaker.title && <p>{speaker.title}</p>}
                                {speaker.abstract && <p>{speaker.abstract}</p>}
                              </div>
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
                        <div className="space-y-5">
                          {rmiWorkshop.panelSpeakers.map((speaker: WorkshopSpeaker) => (
                            <article
                              key={speaker.name}
                              className="flex items-center gap-6 rounded-2xl border border-zinc-200 bg-[#FFFCF8] p-6"
                            >
                              {speaker.imageUrl ? (
                                <div className="h-36 w-36 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-200">
                                  <Image src={speaker.imageUrl} alt={speaker.name} width={144} height={144} className="object-cover w-full h-full" />
                                </div>
                              ) : speaker.url ? (
                                <a href={speaker.url} target="_blank" rel="noopener noreferrer" className="h-36 w-36 flex-shrink-0 rounded-lg bg-zinc-200 block" />
                              ) : (
                                <div className="h-36 w-36 flex-shrink-0 rounded-lg bg-zinc-200" />
                              )}
                              <div className="min-w-0 flex-1">
                                <h5 className="font-serif text-xl text-zinc-900">
                                  {speaker.url ? (
                                    <a href={speaker.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{speaker.name}</a>
                                  ) : speaker.name}
                                </h5>
                                <p className="mb-3 text-sm text-zinc-500">
                                  {speaker.affiliation}
                                </p>
                                {speaker.bio && (
                                  <p className="text-sm leading-7 text-zinc-700">
                                    {speaker.bio}
                                  </p>
                                )}
                              </div>
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
                  className="flex items-center gap-6 rounded-2xl border border-zinc-200 bg-white p-6"
                >
                  {organiser.imageUrl ? (
                    <div className="h-36 w-36 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-200">
                      <Image
                        src={organiser.imageUrl}
                        alt={organiser.name}
                        width={144}
                        height={144}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : organiser.url ? (
                    <a href={organiser.url} target="_blank" rel="noopener noreferrer" className="h-36 w-36 flex-shrink-0 rounded-lg bg-zinc-200 block" />
                  ) : (
                    <div className="h-36 w-36 flex-shrink-0 rounded-lg bg-zinc-200" />
                  )}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-xl text-zinc-900">
                      {organiser.url ? (
                        <a href={organiser.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {organiser.name}
                        </a>
                      ) : organiser.name}
                    </h3>
                    <p className="mb-3 text-sm text-zinc-500">
                      {organiser.affiliation}
                    </p>
                    {organiser.bio && (
                      <p className="text-base leading-8 text-zinc-700">
                        {organiser.bio}
                      </p>
                    )}
                  </div>
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

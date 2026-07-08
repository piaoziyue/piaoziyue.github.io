import Image from "next/image";
import type { Metadata } from "next";
import { aboutMe } from "@/data/aboutme";
import {
  rmiWorkshop,
  type WorkshopReference,
  type WorkshopSection,
  type WorkshopSpeaker,
} from "@/data/workshops";
import { PhotoCarousel } from "@/components/photo-carousel";

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

          {/* Registration note */}
          <div className="space-y-2 text-base leading-8 text-zinc-700">
            <p>
              On-site registration is now closed.
            </p>
            <p>
              If you would like to participate online, feel free to join by filling in{" "}
              <a
                href="https://forms.gle/sJ5G7cnm26jagNks5"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-zinc-900"
              >
                this form
              </a>
              .
            </p>
          </div>

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
                                {speaker.title && (
                                  <p>
                                    {(() => { const i = speaker.title!.indexOf(': '); return i !== -1 ? (<><span className="font-semibold">{speaker.title!.slice(0, i + 1)}</span>{speaker.title!.slice(i + 1)}</>) : speaker.title; })()}
                                  </p>
                                )}
                                {speaker.abstract && (
                                  <p>
                                    {(() => { const i = speaker.abstract!.indexOf(': '); return i !== -1 ? (<><span className="font-semibold">{speaker.abstract!.slice(0, i + 1)}</span>{speaker.abstract!.slice(i + 1)}</>) : speaker.abstract; })()}
                                  </p>
                                )}
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
                                    {(() => { const i = speaker.bio!.indexOf(': '); return i !== -1 ? (<><span className="font-semibold">{speaker.bio!.slice(0, i + 1)}</span>{speaker.bio!.slice(i + 1)}</>) : speaker.bio; })()}
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
                        {(() => { const i = organiser.bio!.indexOf(': '); return i !== -1 ? (<><span className="font-semibold">{organiser.bio!.slice(0, i + 1)}</span>{organiser.bio!.slice(i + 1)}</>) : organiser.bio; })()}
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

          <section className="space-y-5 pb-8">
            <h2 className="font-serif text-2xl tracking-wide">Archive Photos</h2>
            <PhotoCarousel
              photos={[
                "/assets/workshop_img/photos/IMG_5528.jpg",
                "/assets/workshop_img/photos/IMG_0545.jpeg",
                "/assets/workshop_img/photos/IMG_0549.jpeg",
                "/assets/workshop_img/photos/IMG_0552.jpeg",
                "/assets/workshop_img/photos/IMG_0554.jpeg",
                "/assets/workshop_img/photos/IMG_7723.jpeg",
                "/assets/workshop_img/photos/IMG_7725.jpeg",
                "/assets/workshop_img/photos/IMG_7727.jpeg",
                "/assets/workshop_img/photos/IMG_7729.jpeg",
                "/assets/workshop_img/photos/IMG_7732.jpeg",
                "/assets/workshop_img/photos/IMG_7739.jpeg",
                "/assets/workshop_img/photos/IMG_7745.jpeg",
                "/assets/workshop_img/photos/IMG_7748.jpeg",
                "/assets/workshop_img/photos/IMG_7750.jpeg",
              ]}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

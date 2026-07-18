import { AnimatedSection } from "@/components/shared/AnimatedSection";

const contactDetails = [
  {
    label: "Email",
    value: "gunarathnakaveen3@gmail.com",
    href: "mailto:gunarathnakaveen3@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+94 71 685 2286",
    href: "tel:+94716852286",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Kadawatha, Sri Lanka",
    href: null,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <AnimatedSection>
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Left — text */}
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Get In Touch</p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Let&apos;s build something great together.
              </h2>
              <p className="mt-5 leading-7 text-white/70">
                I&apos;m currently open to internship opportunities, collaborative projects,
                and full-time software engineering roles. Whether you have a question or just
                want to say hello — my inbox is always open.
              </p>

              <div className="mt-8 space-y-4">
                {contactDetails.map((contact) => {
                  const inner = (
                    <div
                      key={contact.label}
                      className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-300/10 text-amber-300/80">
                        {contact.icon}
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/40">{contact.label}</p>
                        <p className="mt-0.5 text-sm font-medium text-white">{contact.value}</p>
                      </div>
                    </div>
                  );
                  return contact.href ? (
                    <a key={contact.label} href={contact.href}>
                      {inner}
                    </a>
                  ) : (
                    <div key={contact.label}>{inner}</div>
                  );
                })}
              </div>
            </div>

            {/* Right — quick message note */}
            <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/40">Quick Note</p>
              <p className="leading-7 text-white/70">
                The best way to reach me is via email. I typically respond within 24 hours.
                I&apos;m also available on LinkedIn and GitHub for professional networking.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:gunarathnakaveen3@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-300/10 px-5 py-2.5 text-sm font-semibold text-amber-300 ring-1 ring-amber-300/20 transition hover:bg-amber-300/20"
                >
                  Send an Email
                </a>
                <a
                  href="/resume.pdf"
                  download="Kaveen_Gunarathna_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/70 transition hover:border-white/30 hover:text-white"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

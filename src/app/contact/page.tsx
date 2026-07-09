export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-bold text-white">Contact</h1>
      <p className="mt-6 text-white/70">
        Use the form on this page or send an email through the contact endpoint.
      </p>
      <form
        className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
        method="post"
        action="/api/contact"
      >
        <input
          className="rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white"
          name="name"
          placeholder="Your name"
        />
        <input
          className="rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white"
          name="email"
          placeholder="Your email"
        />
        <textarea
          className="min-h-40 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white"
          name="message"
          placeholder="Your message"
        />
        <button
          className="rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950"
          type="submit"
        >
          Send message
        </button>
      </form>
    </section>
  );
}

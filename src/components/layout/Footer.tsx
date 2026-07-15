export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} Kaveen Gunarathna. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-sm text-white/40">
          <a
            href="mailto:gunarathnakaveen3@gmail.com"
            className="transition hover:text-amber-300"
          >
            gunarathnakaveen3@gmail.com
          </a>
          <span>·</span>
          <span>Kadawatha, Sri Lanka</span>
        </div>
      </div>
    </footer>
  );
}

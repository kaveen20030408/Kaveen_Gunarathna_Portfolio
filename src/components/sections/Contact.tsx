import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold text-white">
          Let’s build something useful.
        </h2>
        <p className="mt-4 max-w-2xl text-white/70">
          If you want a portfolio site, landing page, or frontend feature built
          with care, I’m open to talking.
        </p>
        <div className="mt-6">
          <Link href="/contact">
            <Button>Start a conversation</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

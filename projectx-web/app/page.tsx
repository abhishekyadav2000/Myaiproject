import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Logos from "@/components/Logos";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Hero />

      <Section
        id="why"
        title="Why ProjectX?"
        subtitle="We blend hands-on kits, real-world simulations, and a learn-to-earn model so schools and families see tangible outcomes fast."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "STREAMS+ Kits", copy: "Age-wise kits from Starter to Mastery with projects, QR guides, and challenge cards." },
            { title: "Learn → Work → Earn", copy: "Move from fundamentals to real client-style work and self-sustainable earning pathways." },
            { title: "Ecosystem & Community", copy: "Parents, educators, and learners collaborate with dashboards, progress, and showcases." },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 opacity-80">{b.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="programs" title="Programs"
        subtitle="School deployments, parent workshops, teacher training, and community demos.">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "School Launch", copy: "Smart Labs + Robotics + STREAMS+ kits with admin dashboard and onboarding." },
            { title: "Parent eXperience", copy: "Hands-on kit demos to build trust, curiosity, and at-home learning rituals." },
            { title: "Teacher Upskilling", copy: "Plug-and-play lesson flows, assessments, and PD credits." },
          ].map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 opacity-80">{p.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Trusted By">
        <Logos />
      </Section>

      <Section id="contact" title="Book a Demo"
        subtitle="Tell us about your context (school, district, community, parent group). We'll tailor a pilot.">
        <form className="grid gap-4 md:max-w-xl">
          <input className="rounded-xl2 border border-white/10 bg-white/5 px-4 py-3 outline-none"
                 placeholder="Name" required />
          <input className="rounded-xl2 border border-white/10 bg-white/5 px-4 py-3 outline-none"
                 placeholder="Email" type="email" required />
          <textarea className="rounded-xl2 border border-white/10 bg-white/5 px-4 py-3 outline-none"
                    placeholder="What do you want to launch?" rows={5} />
          <button className="rounded-xl2 bg-px-orange px-5 py-3 font-semibold text-black shadow-soft"
                  type="submit">Request Demo</button>
        </form>
      </Section>
    </>
  );
}

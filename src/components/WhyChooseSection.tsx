import { Eye, Clock, Users, ShieldCheck, Leaf, Star } from "lucide-react";

const reasons = [
  { icon: Eye, title: "Proven Spiritual Power", desc: "Decades of successful rituals and thousands of satisfied clients across Africa and beyond." },
  { icon: Clock, title: "Fast Results", desc: "Many clients see changes within days. The spirits work on your behalf swiftly and decisively." },
  { icon: Users, title: "Trusted by Thousands", desc: "A growing community of believers who have experienced life-changing transformations." },
  { icon: ShieldCheck, title: "Complete Confidentiality", desc: "Your secrets are safe. Every consultation is handled with the utmost privacy and discretion." },
  { icon: Leaf, title: "Natural & Traditional", desc: "All practices use natural herbs and time-honored ancestral methods passed down through generations." },
  { icon: Star, title: "Personalized Rituals", desc: "No two problems are the same. Every ritual is tailored specifically to your unique situation." },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-display text-sm tracking-[0.3em] uppercase mb-3">
            Why Choose Me
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-glow-purple mb-4">
            Why Babu Majjimoto Juju?
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <r.icon className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">{r.title}</h3>
                <p className="text-foreground/60 text-base">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

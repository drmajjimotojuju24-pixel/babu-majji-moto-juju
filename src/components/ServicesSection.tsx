import { Heart, Briefcase, Sparkles, Shield, CircleDot, Scale, Baby, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    icon: Heart,
    title: "Perfect Marriage / Fix Marriage",
    description: "Restore harmony and deep connection in your marriage. Through powerful spiritual rituals, Babu Majjimoto Juju mends broken bonds and reignites the flame of love.",
  },
  {
    icon: Sparkles,
    title: "Love Potion / Bring Back Your Ex",
    description: "Harness the irresistible power of ancient love potions to rekindle lost passion and bring your ex-lover back into your arms. Love knows no boundaries.",
  },
  {
    icon: Briefcase,
    title: "Business Ritual",
    description: "Let us help you unlock your business potential and achieve lasting success. Our powerful rituals open doors of opportunity and attract wealth and prosperity.",
  },
  {
    icon: Shield,
    title: "Spiritual Cleansing",
    description: "With a deep understanding of spiritual practices, Babu Majjimoto Juju helps individuals find peace and clarity through rituals. Experience a transformative journey that promotes healing and well-being.",
  },
  {
    icon: CircleDot,
    title: "Lucky Rings",
    description: "Discover the enchanting collection of lucky rings designed to enhance love, business success, and protection. Each ring is crafted with care and intention, helping you attract positive energies.",
  },
  {
    icon: Shield,
    title: "Get Your Lost Property Back",
    description: "Unlock the power of nature with our unique blend of strong herbs and spiritual practices designed to help you reclaim lost property and provide protection for your belongings.",
  },
  {
    icon: Scale,
    title: "Win Court Case",
    description: "Gain the spiritual advantage in legal matters. Through ancient rituals and powerful charms, tip the scales of justice in your favor and walk out victorious.",
  },
  {
    icon: Baby,
    title: "Family & Fertility Support",
    description: "Babu Majjimoto Juju offers cultural guidance and advice to help clients feel prepared and focused. The guidance emphasizes clarity, personal confidence, and navigating challenges thoughtfully.",
  },
  {
    icon: TrendingUp,
    title: "Business & Financial Growth",
    description: "This service helps clients focus on opportunities and growth using culturally inspired practices. Encouraging positivity, discipline, and alignment with personal goals.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent font-display text-sm tracking-[0.3em] uppercase mb-3">
            What I Offer
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-glow mb-4">
            Sacred Services
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Ancient spiritual solutions for modern-day challenges
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:box-glow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-foreground/60 text-base leading-relaxed">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-block mt-4 text-accent text-sm font-display tracking-wider uppercase hover:underline"
              >
                Book Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

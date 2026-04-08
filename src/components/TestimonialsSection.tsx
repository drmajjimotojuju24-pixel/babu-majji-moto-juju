import { Star } from "lucide-react";

const testimonials = [
  { name: "Amina K.", location: "Kampala, Uganda", text: "My husband had left me for another woman. After consulting Babu Majjimoto Juju, he returned within a week begging for forgiveness. Our marriage is stronger than ever!" },
  { name: "Peter O.", location: "Nairobi, Kenya", text: "My business was on the verge of collapse. The business ritual changed everything — new clients started flowing in and my debts cleared within two months." },
  { name: "Sarah M.", location: "Dar es Salaam, Tanzania", text: "I was cursed by jealous relatives. The spiritual cleansing freed me from years of bad luck. I finally have peace and clarity in my life." },
  { name: "James W.", location: "Jinja, Uganda", text: "The lucky ring I received has been incredible. I got promoted at work and won a land dispute I had been fighting for years." },
  { name: "Grace N.", location: "Mombasa, Kenya", text: "After 7 years of trying to conceive, the fertility rituals worked. I am now a proud mother of twins. Babu Majjimoto Juju is truly gifted!" },
  { name: "Hassan B.", location: "Entebbe, Uganda", text: "Someone stole my family's ancestral land documents. Through the lost property ritual, the thief returned everything within days. Unbelievable power!" },
  { name: "Florence A.", location: "Kisumu, Kenya", text: "My court case had dragged on for 3 years. After the ritual, the judge ruled in my favor in the very next hearing. I am forever grateful." },
  { name: "David L.", location: "Kampala, Uganda", text: "My ex-girlfriend came back to me after the love potion. We are now happily married and building a beautiful life together." },
  { name: "Martha T.", location: "Mbale, Uganda", text: "The spiritual protection Babu provided has kept my family safe from dark forces. No more nightmares, no more strange occurrences. Pure peace." },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent font-display text-sm tracking-[0.3em] uppercase mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-glow mb-4">
            Voices of the Transformed
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-6 hover:border-secondary/50 transition-all duration-300 hover:box-glow-purple"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/70 text-base italic mb-4 leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <p className="font-display text-sm text-foreground">{t.name}</p>
                <p className="text-foreground/50 text-sm">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

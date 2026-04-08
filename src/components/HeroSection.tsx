import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Mystical spiritual healer scene" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-accent font-body text-lg md:text-xl tracking-[0.3em] uppercase mb-4 animate-float">
          Spiritual Healer & Traditional Guide
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground text-glow mb-6 leading-tight">
          Babu Majjimoto Juju
        </h1>
        <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
          Renowned witch doctor and spiritual healer from Uganda. Unlock the ancient powers 
          that have guided generations toward love, prosperity, and protection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/80 text-primary-foreground font-display text-sm tracking-wider uppercase rounded-lg box-glow transition-all hover:scale-105"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-4 border border-accent text-accent hover:bg-accent hover:text-accent-foreground font-display text-sm tracking-wider uppercase rounded-lg transition-all hover:scale-105"
          >
            Consult Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

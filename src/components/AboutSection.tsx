import aboutBg from "@/assets/about-bg.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden box-glow-purple">
              <img
                src={aboutBg}
                alt="Babu Majjimoto Juju - Spiritual Healer"
                width={1920}
                height={1080}
                loading="lazy"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-secondary rounded-lg opacity-30" />
          </div>
          <div>
            <p className="text-secondary font-display text-sm tracking-[0.3em] uppercase mb-3">
              About Me
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground text-glow-purple mb-6">
              The Healer's Path
            </h2>
            <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
              <p>
                Born and raised in the heart of Uganda, Babu Majjimoto Juju
                carries the sacred knowledge passed down through generations of
                powerful spiritual healers. From a young age, the spirits chose
                him to walk the path of healing and guidance.
              </p>
              <p>
                With decades of experience in traditional African spiritual
                practices, Babu Majjimoto Juju has helped thousands reclaim
                love, restore prosperity, and find protection from dark forces.
                His rituals draw upon ancient herbs, sacred chants, and the raw
                power of ancestral spirits.
              </p>
              <p>
                Whether you seek to mend a broken heart, unlock business
                success, or shield yourself from misfortune — the spirits are
                ready to answer your call.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

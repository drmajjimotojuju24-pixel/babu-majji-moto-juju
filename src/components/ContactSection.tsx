import { Phone, MessageCircle, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-display text-sm tracking-[0.3em] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-glow mb-4">
            Contact Babu Majjimoto Juju
          </h2>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto">
            The spirits await your call. Reach out today for a private consultation.
          </p>
        </div>
        <div className="max-w-2xl mx-auto grid sm:grid-cols-3 gap-6">
          <a
            href="tel:+254703253466"
            className="flex flex-col items-center gap-3 p-8 bg-card border border-border rounded-lg hover:border-accent/50 hover:box-glow transition-all"
          >
            <Phone className="w-8 h-8 text-accent" />
            <span className="font-display text-sm text-foreground">Call Now</span>
            <span className="text-foreground/60 text-sm">+254 703 253 466</span>
          </a>
          <a
            href="https://wa.me/254703253466"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-8 bg-card border border-border rounded-lg hover:border-primary/50 hover:box-glow transition-all"
          >
            <MessageCircle className="w-8 h-8 text-primary" />
            <span className="font-display text-sm text-foreground">WhatsApp</span>
            <span className="text-foreground/60 text-sm">Message Us</span>
          </a>
          <div className="flex flex-col items-center gap-3 p-8 bg-card border border-border rounded-lg">
            <MapPin className="w-8 h-8 text-secondary" />
            <span className="font-display text-sm text-foreground">Location</span>
            <span className="text-foreground/60 text-sm text-center">Uganda, East Africa</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { AlertTriangle } from "lucide-react";

const DisclaimerSection = () => {
  return (
    <section className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AlertTriangle className="w-6 h-6 text-accent/60 mx-auto mb-4" />
          <h3 className="font-display text-sm tracking-[0.2em] uppercase text-foreground/60 mb-4">
            Disclaimer
          </h3>
          <p className="text-foreground/40 text-sm leading-relaxed">
            The services provided by Babu Majjimoto Juju are cultural and traditional guidance for personal 
            reflection, emotional balance, and spiritual support. They are not intended as medical, legal, 
            financial, or professional advice. Results may vary, and no guarantees are made. By using this 
            website, you confirm that you are 21 years of age or older. Babu Majjimoto Juju encourages 
            responsible use of services and emphasizes personal reflection, cultural alignment, and well-being.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;

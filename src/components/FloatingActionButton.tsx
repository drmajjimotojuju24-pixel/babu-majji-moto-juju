import { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";

const FloatingActionButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-3 mb-2">
          <a
            href="tel:+254703253466"
            className="flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            <Phone className="w-5 h-5" />
            <span className="font-display text-xs tracking-wider uppercase">
              Call
            </span>
          </a>
          <a
            href="sms:+254703253466"
            className="flex items-center gap-3 px-4 py-3 bg-secondary text-secondary-foreground rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-display text-xs tracking-wider uppercase">
              Text
            </span>
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg animate-pulse-glow hover:scale-110 transition-transform"
        aria-label="Contact options"
      >
        {open ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default FloatingActionButton;

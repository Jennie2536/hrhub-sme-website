import { Mail, Phone, MessageCircle, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">The HR Hub SME Services</h3>
            <p className="text-background/80 mb-4">
              Building and keeping the right teams for Nigerian SMEs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@thehrhub.com.ng"
                className="flex items-center gap-2 text-background/80 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                contact@thehrhub.com.ng
              </a>
              <a
                href="tel:+2349167676044"
                className="flex items-center gap-2 text-background/80 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                +234 916 767 6044
              </a>
              <a
                href="https://wa.me/2349167676044"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/80 hover:text-accent transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/thehrhub-ng/"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-foreground transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/theHRhub_ng"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-foreground transition-all"
                aria-label="X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://web.facebook.com/thehrhub.01"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} The HR Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

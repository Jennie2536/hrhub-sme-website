import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Space */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">HR</span>
            </div>
            <div className="hidden sm:block">
              <h2 className="font-heading font-bold text-lg text-foreground">The HR Hub</h2>
              <p className="text-xs text-muted-foreground">SME Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("retainers")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              HR Retainers
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Why Us
            </button>
            <Button variant="cta" size="sm" onClick={() => scrollToSection("cta")}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("retainers")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              HR Retainers
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Why Us
            </button>
            <Button variant="cta" className="w-full" onClick={() => scrollToSection("cta")}>
              Get Started
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

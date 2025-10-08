import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileDown, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-image.png";
import { QuoteModal } from "@/components/QuoteModal";

const Hero = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleDownloadRecruitment = () => {
    const link = document.createElement('a');
    link.href = '/downloads/sme-recruitment-brochure.pdf';
    link.download = 'SME-Recruitment-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadHRM = () => {
    // HRM brochure coming soon - will be added later
    alert("HRM Brochure coming soon! We're finalizing the details.");
    console.log("HRM Brochure - Coming soon!");
  };

  const handleRequestQuote = () => {
    setIsQuoteModalOpen(true);
  };

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden mt-16 md:mt-20">
        {/* Background image with overlay - Hidden on mobile, visible on tablet+ */}
        <div className="absolute inset-0 hidden md:block">
          <img
            src={heroImage}
            alt="Professional HR team collaboration"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85" />
        </div>

        {/* Solid background for mobile */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90 md:hidden" />

        {/* Decorative elements */}
        <div className="absolute top-10 md:top-20 right-10 md:right-20 w-48 md:w-72 h-48 md:h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 md:bottom-20 left-10 md:left-20 w-64 md:w-96 h-64 md:h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container relative z-10 px-4 md:px-6 py-16 md:py-20 mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight px-2">
              Build the right team.
              <br />
              <span className="text-accent">Keep the right team.</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Most SMEs waste money on wrong hires and get stuck in HR chaos. We fix that.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-slide-up px-4">
              <Button
                variant="hero"
                size="lg"
                onClick={handleDownloadRecruitment}
                className="w-full sm:w-auto bg-card text-card-foreground hover:bg-card/90 min-w-[240px] justify-center"
              >
                <FileDown className="mr-2 flex-shrink-0" size={20} />
                <span className="truncate">Download Recruitment Brochure</span>
              </Button>

              <Button
                variant="cta"
                size="lg"
                onClick={handleDownloadHRM}
                className="w-full sm:w-auto min-w-[240px] justify-center"
              >
                <FileDown className="mr-2 flex-shrink-0" size={20} />
                <span className="truncate">Download HRM Brochure</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleRequestQuote}
                className="w-full sm:w-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary min-w-[200px] justify-center"
              >
                <Calendar className="mr-2 flex-shrink-0" size={20} />
                <span className="truncate">Request a Quote</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
};

export default Hero;
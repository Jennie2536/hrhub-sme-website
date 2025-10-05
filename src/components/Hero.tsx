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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden mt-20">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional HR team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container relative z-10 px-6 py-20 mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Build the right team.
              <br />
              <span className="text-accent">Keep the right team.</span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Most SMEs waste money on wrong hires and get stuck in HR chaos. We fix that.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Button
                variant="hero"
                size="lg"
                onClick={handleDownloadRecruitment}
                className="w-full sm:w-auto bg-card text-card-foreground hover:bg-card/90"
              >
                <FileDown className="mr-2" />
                Download Recruitment Brochure
              </Button>

              <Button
                variant="cta"
                size="lg"
                onClick={handleDownloadHRM}
                className="w-full sm:w-auto"
              >
                <FileDown className="mr-2" />
                Download HRM Brochure
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleRequestQuote}
                className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Calendar className="mr-2" />
                Request a Quote
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
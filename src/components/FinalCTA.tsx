import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileDown, MapPin } from "lucide-react";
import { QuoteModal } from "@/components/QuoteModal";

const FinalCTA = () => {
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
      <section id="cta" className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 md:mb-6 px-2">
              Ready to Build Your Team Right?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 px-4">
              Get started with transparent, affordable HR solutions designed for Nigerian SMEs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 max-w-full">
            {/* In Nigeria Card */}
            <div className="bg-card/95 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl w-full max-w-full overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  In Nigeria?
                </h3>
              </div>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                Download our comprehensive brochures to learn more about our services.
              </p>
              <div className="space-y-3">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground justify-center"
                  onClick={handleDownloadRecruitment}
                >
                  <FileDown className="mr-2 flex-shrink-0" size={20} />
                  <span className="hidden sm:inline">Download Recruitment Brochure</span>
                  <span className="sm:hidden">Recruitment Brochure</span>
                </Button>
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full justify-center"
                  onClick={handleDownloadHRM}
                >
                  <FileDown className="mr-2 flex-shrink-0" size={20} />
                  <span className="hidden sm:inline">Download HRM Brochure</span>
                  <span className="sm:hidden">HRM Brochure</span>
                </Button>
              </div>
            </div>

            {/* Outside Nigeria Card */}
            <div className="bg-card/95 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl w-full max-w-full overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  Outside Nigeria?
                </h3>
              </div>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                Request a customized quote tailored to your location and needs.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground justify-center"
                onClick={handleRequestQuote}
              >
                <span className="font-semibold">Request a Quote</span>
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

export default FinalCTA;
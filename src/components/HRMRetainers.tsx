import { Button } from "@/components/ui/button";
import { FileDown, Users, Building2, TrendingUp, Target } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import hrmImage from "@/assets/hrm-image.jpeg";

const HRMRetainers = () => {
  const handleDownloadHRM = () => {
    // HRM brochure coming soon - will be added later
    alert("HRM Brochure coming soon! We're finalizing the details.");
    console.log("HRM Brochure - Coming soon!");
  };

  const retainers = [
    {
      icon: Users,
      title: "Starter HR",
      price: "From ₦100,000/month",
      bestFor: "Micro-businesses (2–10 staff)",
      presence: "2 days/week",
      features: [
        "HR setup & employee records",
        "1 starter policy",
        "Compliance cover",
        "Handling urgent staff issues",
        "Light HR support for founders",
      ],
      pricing: "₦100,000 (2–5 staff) + ₦10,000 per extra employee",
      color: "from-primary/10 to-primary/5",
    },
    {
      icon: Building2,
      title: "Growth HR",
      price: "₦16,500–₦25,000/employee/month",
      bestFor: "SMEs (10–30 staff)",
      presence: "3 days/week",
      features: [
        "All Starter HR features",
        "HR admin & compliance manuals",
        "Hiring & onboarding support",
        "Basic employee relations",
        "Payroll oversight",
        "Monthly performance check-ins",
      ],
      pricing: "10–15 staff → ₦16,500/employee | 16–25 staff → ₦20,000/employee | 26–30 staff → ₦25,000/employee",
      complexity: "Complexity premiums apply for fintech, retail/hospitality, multi-location SMEs",
      color: "from-secondary/10 to-secondary/5",
      featured: true,
    },
    {
      icon: TrendingUp,
      title: "Advanced HR",
      price: "₦20,500–₦30,000/employee/month",
      bestFor: "Growing SMEs (30–60 staff)",
      presence: "4 days/week (almost embedded HR)",
      features: [
        "All Growth HR features",
        "Recruitment coordination",
        "Training & development programs",
        "HR automation setup",
        "Performance management systems",
        "Quarterly HR reports to leadership",
      ],
      pricing: "31–45 staff → ₦20,500/employee | 46–60 staff → ₦25,000–30,000/employee",
      complexity: "Complexity premiums for high-turnover/compliance-heavy sectors",
      color: "from-accent/10 to-accent/5",
    },
    {
      icon: Target,
      title: "Strategic HR",
      price: "₦25,500–₦30,000+/employee/month",
      bestFor: "Established SMEs & startups (60+ staff)",
      presence: "4–5 days/week (customized, embedded HR team)",
      features: [
        "All Advanced HR features",
        "People strategy & succession planning",
        "Engagement & retention programs",
        "Crisis & risk management",
        "Advanced performance systems",
        "Workforce analytics & strategic HR planning",
      ],
      pricing: "61–90 staff → ₦25,500/employee | 91–120 staff → ₦30,000/employee | 120+ staff → custom pricing",
      color: "from-primary/15 to-primary/10",
    },
  ];

  const addOns = [
    "Payroll Administration → ₦35,000 setup + per employee fee",
    "Custom Training-on-Demand → flat session fees",
    "HRM + Recruitment Bundles → discounted hires for retainer clients",
  ];

  return (
    <section id="retainers" className="py-20 px-4 sm:px-6 bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 animate-fade-in">
          <div className="relative order-2 md:order-1">
            <img
              src={hrmImage}
              alt="HR management and people strategy"
              className="rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              HR Management Retainers
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-4">
              Your business has grown. Your HR needs should too.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground">
              Flexible HR solutions anchored by workforce size and weekly HR presence.
            </p>
          </div>
        </div>

        <Accordion type="single" collapsible className="space-y-4 mb-12">
          {retainers.map((retainer, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`bg-gradient-to-br ${retainer.color} rounded-2xl sm:rounded-3xl border-2 overflow-hidden transition-all hover:shadow-[var(--shadow-lift)] ${retainer.featured ? "border-secondary" : "border-border"
                }`}
            >
              <AccordionTrigger className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 hover:no-underline">
                <div className="flex items-start gap-3 sm:gap-4 text-left w-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <retainer.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground break-words">
                        {retainer.title}
                      </h3>
                      {retainer.featured && (
                        <span className="bg-secondary text-secondary-foreground text-xs font-bold px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                          RECOMMENDED
                        </span>
                      )}
                    </div>
                    <p className="text-base sm:text-lg font-semibold text-primary mb-1 break-words">
                      {retainer.price}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground break-words">
                      Best For: {retainer.bestFor} • {retainer.presence}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6">
                <div className="pt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm sm:text-base">
                      What You Get:
                    </h4>
                    <ul className="space-y-2">
                      {retainer.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1 flex-shrink-0">•</span>
                          <span className="text-muted-foreground text-sm sm:text-base break-words">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-background/50 rounded-xl p-3 sm:p-4">
                    <p className="text-xs sm:text-sm font-medium text-foreground mb-1">
                      Pricing Breakdown:
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground break-words">
                      {retainer.pricing}
                    </p>
                    {retainer.complexity && (
                      <p className="text-xs text-muted-foreground mt-2 italic break-words">
                        {retainer.complexity}
                      </p>
                    )}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 shadow-[var(--shadow-card)]">
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
            Optional Add-ons
          </h3>
          <ul className="space-y-2">
            {addOns.map((addOn, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-secondary mt-1 font-bold flex-shrink-0">+</span>
                <span className="text-foreground text-sm sm:text-base break-words">{addOn}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center px-4">
          <Button
            variant="cta"
            size="lg"
            onClick={handleDownloadHRM}
            className="w-full sm:w-auto min-w-[200px]"
          >
            <FileDown className="mr-2 flex-shrink-0" />
            <span className="hidden sm:inline">Download HRM Brochure</span>
            <span className="sm:hidden">Download Brochure</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HRMRetainers;
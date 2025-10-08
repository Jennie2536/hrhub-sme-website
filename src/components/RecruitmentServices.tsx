import { Button } from "@/components/ui/button";
import { CheckCircle2, FileDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import recruitmentImage from "@/assets/recruitment-image-3.jpg";

const RecruitmentServices = () => {
  const handleDownloadRecruitment = () => {
    const link = document.createElement('a');
    link.href = '/downloads/sme-recruitment-brochure.pdf';
    link.download = 'SME-Recruitment-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const packages = [
    {
      title: "Entry-Level Hires",
      price: "₦160,000",
      subtitle: "per hire",
      description: "For interns, frontline retail staff, call-centre representatives, customer service officers",
      volume: "1–5 hires/month at this rate",
      color: "from-primary/10 to-primary/5",
    },
    {
      title: "Junior Roles",
      price: "₦220,000",
      subtitle: "per hire",
      description: "For professionals with 1–3 years' experience (sales reps, admins, junior accountants, HR assistants)",
      volume: "2–4 hires/month at this rate",
      color: "from-secondary/10 to-secondary/5",
      featured: true,
    },
    {
      title: "Mid-Level Talent Acquisition",
      price: "₦350,000",
      subtitle: "per hire",
      description: "For supervisors, team leads, office managers, HR officers, technical specialists",
      volume: "1–3 hires/month at this rate",
      color: "from-accent/10 to-accent/5",
    },
    {
      title: "Tech Recruitment",
      price: "From 8%",
      subtitle: "of annual salary",
      description: "For engineers, product managers, DevOps, data analysts. Includes talent mapping, skills assessment, salary benchmarking",
      volume: "Specialist track",
      color: "from-primary/15 to-primary/10",
    },
  ];

  const benefits = [
    "Flat-fee, transparent pricing",
    "SME-first process",
    "Structured assessments",
    "Employer branding support",
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 animate-fade-in">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Recruitment — Your First Step
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Stop wasting money on the wrong hires.
            </p>
            <p className="text-lg text-muted-foreground">
              The Hiring Desk gives SMEs transparent, flat-fee recruitment packages designed for speed, quality, and fit.
            </p>
          </div>
          <div className="relative">
            <img
              src={recruitmentImage}
              alt="Recruitment and talent acquisition process"
              className="rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)] ${pkg.featured ? "ring-2 ring-secondary shadow-lg" : ""
                }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-50`} />
              {pkg.featured && (
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              )}
              <CardHeader className="relative">
                <CardTitle className="text-xl md:text-2xl break-words">{pkg.title}</CardTitle>
                <div className="mt-4">
                  <div className="text-3xl md:text-4xl font-bold text-primary break-words">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground">{pkg.subtitle}</div>
                </div>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <CardDescription className="text-sm md:text-base leading-relaxed">
                  {pkg.description}
                </CardDescription>
                <p className="text-sm font-medium text-foreground">
                  {pkg.volume}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-6 md:p-8 mb-8 shadow-[var(--shadow-card)]">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
            Key Benefits
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center px-4">
          <Button
            variant="cta"
            size="lg"
            onClick={handleDownloadRecruitment}
            className="w-full md:w-auto min-w-[250px]"
          >
            <FileDown className="mr-2 flex-shrink-0" />
            <span className="hidden sm:inline">Download Recruitment Brochure</span>
            <span className="sm:hidden">Download Brochure</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentServices;

import { Globe, DollarSign, BarChart3, Handshake } from "lucide-react";

const WhyWorkWithUs = () => {
  const reasons = [
    {
      icon: Globe,
      title: "Local reality, global standards",
      description: "We understand Nigerian SME challenges and apply international HR best practices.",
    },
    {
      icon: DollarSign,
      title: "Affordable, scalable",
      description: "Transparent pricing that grows with you. No hidden fees, no surprises.",
    },
    {
      icon: BarChart3,
      title: "Data-driven, people-focused",
      description: "Strategic insights backed by metrics, but always keeping your people first.",
    },
    {
      icon: Handshake,
      title: "End-to-end partnership",
      description: "From your first hire to strategic workforce planning, we're with you every step.",
    },
  ];

  return (
    <section id="why-us" className="py-20 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Work With Us?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-3xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)] transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center mb-6">
                <reason.icon className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;

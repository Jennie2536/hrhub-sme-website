import { UserX, FileQuestion, TrendingUp } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: UserX,
      title: "Hiring headaches",
      description: "Wrong hires cost you time and money. Expensive recruiters don't guarantee quality.",
    },
    {
      icon: FileQuestion,
      title: "HR chaos",
      description: "No clear policies, payroll errors, and compliance nightmares keep you up at night.",
    },
    {
      icon: TrendingUp,
      title: "Growth pains",
      description: "You're stuck managing staff issues instead of growing your business.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The SME People Problem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Running an SME in Nigeria? These challenges sound familiar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-3xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)] transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <problem.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            We built{" "}
            <span className="text-secondary">The HR Hub SME Services</span>{" "}
            to fix this.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

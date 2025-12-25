import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookStrategyCall from "@/components/BookStrategyCall";
import { QuoteModal } from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle2, FileDown, Users, Building2, TrendingUp, Target, ArrowRight, MessageSquare, Zap, Shield, Clock } from "lucide-react";
import recruitmentImage from "@/assets/recruitment-image-3.jpg";
import hrmImage from "@/assets/hrm-image.jpeg";
import { trackDownload, trackCTAClick } from "@/utils/analytics";

const ServicesPage = () => {
    const [activeService, setActiveService] = useState<'recruitment' | 'hrm'>('recruitment');
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const handleDownloadRecruitment = () => {
        trackDownload('recruitment');
        trackCTAClick('Download Recruitment Brochure', 'Services Page');
        const link = document.createElement('a');
        link.href = '/downloads/thehrhub-recruitment-brochure.pdf';
        link.download = 'TheHRHub-Recruitment-Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDownloadHRM = () => {
        trackDownload('hrm');
        trackCTAClick('Download HRM Brochure', 'Services Page');
        const link = document.createElement('a');
        link.href = '/downloads/thehrhub-hrm-brochure.pdf';
        link.download = 'TheHRHub-HRM-Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleRequestQuote = () => {
        trackCTAClick('Request Quote', 'Services Page');
        setIsQuoteModalOpen(true);
    };

    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section - Bold & Visual */}
            <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-primary via-primary/95 to-primary/85 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
                            HR Solutions Built for SMEs
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 animate-slide-up">
                            Whether you need to hire the right people or manage them effectively—we've got you covered.
                        </p>
                    </div>

                    {/* Service Selector Cards - More Visual */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <button
                            onClick={() => setActiveService('recruitment')}
                            className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 ${activeService === 'recruitment'
                                    ? 'bg-background shadow-2xl scale-105'
                                    : 'bg-background/10 backdrop-blur-sm hover:bg-background/20'
                                }`}
                        >
                            <div className="relative z-10">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${activeService === 'recruitment' ? 'bg-secondary' : 'bg-primary-foreground/20'
                                    }`}>
                                    <Users className={`w-8 h-8 ${activeService === 'recruitment' ? 'text-secondary-foreground' : 'text-primary-foreground'
                                        }`} />
                                </div>
                                <h3 className={`text-2xl font-bold mb-2 ${activeService === 'recruitment' ? 'text-foreground' : 'text-primary-foreground'
                                    }`}>
                                    Recruitment Services
                                </h3>
                                <p className={`text-sm ${activeService === 'recruitment' ? 'text-muted-foreground' : 'text-primary-foreground/80'
                                    }`}>
                                    Find the right talent with transparent, flat-fee pricing
                                </p>
                            </div>
                            {activeService === 'recruitment' && (
                                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-3xl"></div>
                            )}
                        </button>

                        <button
                            onClick={() => setActiveService('hrm')}
                            className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 ${activeService === 'hrm'
                                    ? 'bg-background shadow-2xl scale-105'
                                    : 'bg-background/10 backdrop-blur-sm hover:bg-background/20'
                                }`}
                        >
                            <div className="relative z-10">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${activeService === 'hrm' ? 'bg-accent' : 'bg-primary-foreground/20'
                                    }`}>
                                    <Building2 className={`w-8 h-8 ${activeService === 'hrm' ? 'text-accent-foreground' : 'text-primary-foreground'
                                        }`} />
                                </div>
                                <h3 className={`text-2xl font-bold mb-2 ${activeService === 'hrm' ? 'text-foreground' : 'text-primary-foreground'
                                    }`}>
                                    HR Management Retainers
                                </h3>
                                <p className={`text-sm ${activeService === 'hrm' ? 'text-muted-foreground' : 'text-primary-foreground/80'
                                    }`}>
                                    Ongoing HR support that scales with your business
                                </p>
                            </div>
                            {activeService === 'hrm' && (
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl"></div>
                            )}
                        </button>
                    </div>
                </div>
            </section>

            {/* Recruitment Service */}
            {activeService === 'recruitment' && (
                <section className="py-16 px-6 animate-fade-in">
                    <div className="container mx-auto max-w-7xl">

                        {/* Value Props - Visual Grid */}
                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            <div className="bg-card rounded-2xl p-6 border-2 border-border hover:border-secondary/50 transition-all">
                                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                                    <Zap className="w-6 h-6 text-secondary" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2">Fast Hiring</h3>
                                <p className="text-sm text-muted-foreground">Quality candidates delivered in 7-14 days</p>
                            </div>
                            <div className="bg-card rounded-2xl p-6 border-2 border-border hover:border-secondary/50 transition-all">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                    <Shield className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2">No Hidden Costs</h3>
                                <p className="text-sm text-muted-foreground">Transparent flat fees—no surprises</p>
                            </div>
                            <div className="bg-card rounded-2xl p-6 border-2 border-border hover:border-secondary/50 transition-all">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2">Quality Guarantee</h3>
                                <p className="text-sm text-muted-foreground">Structured assessments for every hire</p>
                            </div>
                        </div>

                        {/* Hero Image + Description */}
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div className="order-2 md:order-1">
                                <img
                                    src={recruitmentImage}
                                    alt="Recruitment process"
                                    className="rounded-3xl shadow-2xl w-full"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                    RECRUITMENT SERVICES
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Stop Wasting Money on Wrong Hires
                                </h2>
                                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                    The Hiring Desk delivers pre-vetted, quality candidates with pricing designed for SME budgets. No percentage fees. No guesswork. Just transparent, flat-rate recruitment.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <Button variant="cta" size="lg" onClick={handleDownloadRecruitment}>
                                        <FileDown className="mr-2" />
                                        Download Brochure
                                    </Button>
                                    <Button variant="outline" size="lg" onClick={handleRequestQuote}>
                                        <MessageSquare className="mr-2" />
                                        Get a Quote
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Packages - Premium Cards */}
                        <div className="mb-12">
                            <div className="text-center mb-10">
                                <h3 className="text-3xl font-bold text-foreground mb-3">Choose Your Package</h3>
                                <p className="text-lg text-muted-foreground">Transparent pricing for every hiring need</p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                                <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl p-6 border-2 border-border hover:border-primary/40 hover:shadow-xl transition-all group">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="bg-primary/10 px-3 py-1 rounded-full">
                                            <p className="text-xs font-semibold text-primary">ENTRY LEVEL</p>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="text-4xl font-bold text-primary mb-1">₦160K</div>
                                        <p className="text-sm text-muted-foreground">per hire</p>
                                    </div>
                                    <p className="text-sm font-semibold text-foreground mb-3">Perfect for:</p>
                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                        Interns, frontline staff, call-centre reps, customer service officers
                                    </p>
                                    <div className="pt-4 border-t border-border">
                                        <p className="text-xs text-muted-foreground">1–5 hires/month</p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-6 border-2 border-secondary hover:shadow-2xl transition-all group relative">
                                    <div className="absolute -top-3 -right-3 bg-secondary text-secondary-foreground text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                                        POPULAR
                                    </div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="bg-secondary/20 px-3 py-1 rounded-full">
                                            <p className="text-xs font-semibold text-secondary">JUNIOR ROLES</p>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="text-4xl font-bold text-primary mb-1">₦220K</div>
                                        <p className="text-sm text-muted-foreground">per hire</p>
                                    </div>
                                    <p className="text-sm font-semibold text-foreground mb-3">Perfect for:</p>
                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                        Sales reps, admins, junior accountants, HR assistants (1–3 years exp)
                                    </p>
                                    <div className="pt-4 border-t border-border">
                                        <p className="text-xs text-muted-foreground">2–4 hires/month</p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-6 border-2 border-border hover:border-accent/40 hover:shadow-xl transition-all group">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="bg-accent/20 px-3 py-1 rounded-full">
                                            <p className="text-xs font-semibold text-accent-foreground">MID-LEVEL</p>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="text-4xl font-bold text-primary mb-1">₦350K</div>
                                        <p className="text-sm text-muted-foreground">per hire</p>
                                    </div>
                                    <p className="text-sm font-semibold text-foreground mb-3">Perfect for:</p>
                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                        Supervisors, team leads, office managers, HR officers, specialists
                                    </p>
                                    <div className="pt-4 border-t border-border">
                                        <p className="text-xs text-muted-foreground">1–3 hires/month</p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-primary/15 to-primary/5 rounded-3xl p-6 border-2 border-border hover:border-primary/40 hover:shadow-xl transition-all group">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="bg-primary/20 px-3 py-1 rounded-full">
                                            <p className="text-xs font-semibold text-primary">TECH TALENT</p>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="text-4xl font-bold text-primary mb-1">From 8%</div>
                                        <p className="text-sm text-muted-foreground">of annual salary</p>
                                    </div>
                                    <p className="text-sm font-semibold text-foreground mb-3">Perfect for:</p>
                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                        Engineers, product managers, DevOps, data analysts
                                    </p>
                                    <div className="pt-4 border-t border-border">
                                        <p className="text-xs text-muted-foreground">Specialist track</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Proof / Process */}
                        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 mb-12">
                            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">How It Works</h3>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                                        1
                                    </div>
                                    <h4 className="font-bold text-foreground mb-2">Tell Us Your Needs</h4>
                                    <p className="text-sm text-muted-foreground">Share your hiring requirements and timeline</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-secondary-foreground">
                                        2
                                    </div>
                                    <h4 className="font-bold text-foreground mb-2">We Find Quality Candidates</h4>
                                    <p className="text-sm text-muted-foreground">Pre-screened, assessed, and ready for interviews</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                                        3
                                    </div>
                                    <h4 className="font-bold text-foreground mb-2">You Make the Hire</h4>
                                    <p className="text-sm text-muted-foreground">We support onboarding and integration</p>
                                </div>
                            </div>
                        </div>

                        {/* Final CTA */}
                        <div className="text-center">
                            <p className="text-lg text-muted-foreground mb-6">Ready to build your team?</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="cta" size="lg" onClick={handleDownloadRecruitment}>
                                    <FileDown className="mr-2" />
                                    Download Full Brochure
                                </Button>
                                <Button variant="outline" size="lg" onClick={handleRequestQuote}>
                                    <MessageSquare className="mr-2" />
                                    Request a Custom Quote
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* HRM Service */}
            {activeService === 'hrm' && (
                <section className="py-16 px-6 animate-fade-in">
                    <div className="container mx-auto max-w-7xl">

                        {/* Value Props */}
                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            <div className="bg-card rounded-2xl p-6 border-2 border-border hover:border-accent/50 transition-all">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                    <TrendingUp className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2">Scalable Support</h3>
                                <p className="text-sm text-muted-foreground">Grows with you from 2 to 120+ employees</p>
                            </div>
                            <div className="bg-card rounded-2xl p-6 border-2 border-border hover:border-accent/50 transition-all">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <Clock className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2">Weekly Presence</h3>
                                <p className="text-sm text-muted-foreground">Regular HR support (2-5 days/week)</p>
                            </div>
                            <div className="bg-card rounded-2xl p-6 border-2 border-border hover:border-accent/50 transition-all">
                                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                                    <Shield className="w-6 h-6 text-secondary" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2">Full Compliance</h3>
                                <p className="text-sm text-muted-foreground">Stay compliant with Nigerian labor laws</p>
                            </div>
                        </div>

                        {/* Hero Image + Description */}
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <div className="inline-block bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                    HR MANAGEMENT RETAINERS
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Your Business Grew. Your HR Should Too.
                                </h2>
                                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                    Get fractional HR support that scales with your team. From basic compliance to strategic people management—we cover it all with transparent, per-employee pricing.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <Button variant="cta" size="lg" onClick={handleDownloadHRM}>
                                        <FileDown className="mr-2" />
                                        Download Brochure
                                    </Button>
                                    <Button variant="outline" size="lg" onClick={handleRequestQuote}>
                                        <MessageSquare className="mr-2" />
                                        Get a Quote
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={hrmImage}
                                    alt="HR management"
                                    className="rounded-3xl shadow-2xl w-full"
                                />
                            </div>
                        </div>

                        {/* Retainer Tiers - Premium Design */}
                        <div className="mb-12">
                            <div className="text-center mb-10">
                                <h3 className="text-3xl font-bold text-foreground mb-3">Choose Your HR Tier</h3>
                                <p className="text-lg text-muted-foreground">Flexible retainers based on team size</p>
                            </div>

                            <div className="space-y-6">

                                {/* Starter HR */}
                                <div className="bg-gradient-to-r from-primary/5 via-background to-background rounded-3xl p-6 md:p-8 border-2 border-border hover:border-primary/30 hover:shadow-lg transition-all group">
                                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                                        <div className="lg:w-20 flex-shrink-0">
                                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                                                <Users className="w-8 h-8 text-primary" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                                <h4 className="text-2xl font-bold text-foreground">Starter HR</h4>
                                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                                                    2-10 STAFF
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground mb-3">2 days/week presence</p>
                                            <p className="text-sm text-foreground">
                                                HR setup, employee records, starter policy, compliance cover, urgent staff issues
                                            </p>
                                        </div>
                                        <div className="lg:text-right lg:min-w-[200px]">
                                            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">From ₦100K</div>
                                            <p className="text-sm text-muted-foreground">/month + ₦10K per extra employee</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Growth HR */}
                                <div className="bg-gradient-to-r from-secondary/5 via-background to-background rounded-3xl p-6 md:p-8 border-2 border-secondary hover:shadow-2xl transition-all group relative">
                                    <div className="absolute -top-4 left-8 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                        ⭐ RECOMMENDED
                                    </div>
                                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                                        <div className="lg:w-20 flex-shrink-0">
                                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                                                <Building2 className="w-8 h-8 text-secondary" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                                <h4 className="text-2xl font-bold text-foreground">Growth HR</h4>
                                                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-semibold">
                                                    10-30 STAFF
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground mb-3">3 days/week presence</p>
                                            <p className="text-sm text-foreground">
                                                All Starter features + HR admin, compliance manuals, hiring support, employee relations, payroll oversight, performance check-ins
                                            </p>
                                        </div>
                                        <div className="lg:text-right lg:min-w-[200px]">
                                            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">₦16.5K–₦25K</div>
                                            <p className="text-sm text-muted-foreground">/employee/month</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Advanced HR */}
                                <div className="bg-gradient-to-r from-accent/5 via-background to-background rounded-3xl p-6 md:p-8 border-2 border-border hover:border-accent/30 hover:shadow-lg transition-all group">
                                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                                        <div className="lg:w-20 flex-shrink-0">
                                            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                                                <TrendingUp className="w-8 h-8 text-accent" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                                <h4 className="text-2xl font-bold text-foreground">Advanced HR</h4>
                                                <span className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                                                    30-60 STAFF
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground mb-3">4 days/week (almost embedded)</p>
                                            <p className="text-sm text-foreground">
                                                All Growth features + recruitment coordination, training programs, HR automation, performance management, quarterly reports
                                            </p>
                                        </div>
                                        <div className="lg:text-right lg:min-w-[200px]">
                                            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">₦20.5K–₦30K</div>
                                            <p className="text-sm text-muted-foreground">/employee/month</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Strategic HR */}
                                <div className="bg-gradient-to-r from-primary/10 via-background to-background rounded-3xl p-6 md:p-8 border-2 border-border hover:border-primary/30 hover:shadow-lg transition-all group">
                                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                                        <div className="lg:w-20 flex-shrink-0">
                                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                                                <Target className="w-8 h-8 text-primary" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                                <h4 className="text-2xl font-bold text-foreground">Strategic HR</h4>
                                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                                                    60+ STAFF
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground mb-3">4-5 days/week (customized, embedded)</p>
                                            <p className="text-sm text-foreground">
                                                All Advanced features + people strategy, succession planning, engagement programs, crisis management, workforce analytics
                                            </p>
                                        </div>
                                        <div className="lg:text-right lg:min-w-[200px]">
                                            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">₦25.5K–₦30K+</div>
                                            <p className="text-sm text-muted-foreground">/employee/month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Add-ons Section */}
                        <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl p-8 md:p-10 mb-12">
                            <h3 className="text-xl font-bold text-foreground mb-6 text-center">Enhance Your Retainer</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-background rounded-2xl p-6 border border-border">
                                    <div className="flex items-start gap-3">
                                        <ArrowRight className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">Payroll Administration</h4>
                                            <p className="text-sm text-muted-foreground">₦35K setup + per employee fee</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-background rounded-2xl p-6 border border-border">
                                    <div className="flex items-start gap-3">
                                        <ArrowRight className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">Custom Training</h4>
                                            <p className="text-sm text-muted-foreground">On-demand training sessions (flat fees)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-background rounded-2xl p-6 border border-border">
                                    <div className="flex items-start gap-3">
                                        <ArrowRight className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">HRM + Recruitment Bundle</h4>
                                            <p className="text-sm text-muted-foreground">Discounted hires for retainer clients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Final CTA */}
                        <div className="text-center">
                            <p className="text-lg text-muted-foreground mb-6">Ready to strengthen your HR foundation?</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="cta" size="lg" onClick={handleDownloadHRM}>
                                    <FileDown className="mr-2" />
                                    Download Full Brochure
                                </Button>
                                <Button variant="outline" size="lg" onClick={handleRequestQuote}>
                                    <MessageSquare className="mr-2" />
                                    Request a Custom Quote
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Book Strategy Call Section */}
            <BookStrategyCall />

            {/* Quote Modal */}
            <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />

            <Footer />
        </main>
    );
};

export default ServicesPage;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookStrategyCall from "@/components/BookStrategyCall";
import { QuoteModal } from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { CheckCircle2, FileDown, Users, Building2, TrendingUp, Target, MessageSquare, ChevronRight } from "lucide-react";
import recruitmentImage from "@/assets/recruitment-image-3.jpg";
import hrmImage from "@/assets/hrm-image.jpeg";
import {
    trackDownload,
    trackCTAClick,
    trackServiceSelection,
    trackPricingView,
    trackModalInteraction,
    trackJourneyMilestone
} from "@/utils/analytics";
import { useVisibilityTracking } from "@/hooks/useVisibilityTracking";

const ServicesPage = () => {
    const [activeService, setActiveService] = useState<'recruitment' | 'hrm'>('recruitment');
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    // Enable comprehensive tracking for this page
    useVisibilityTracking({
        pageName: 'Services Page',
        trackScroll: true,
        trackTime: true,
        trackSections: true
    });

    // Track initial page load and service preference
    useEffect(() => {
        trackJourneyMilestone('Visited Services Page');
    }, []);

    // Track service selection with analytics
    const handleServiceToggle = (service: 'recruitment' | 'hrm') => {
        setActiveService(service);
        trackServiceSelection(service);

        // Track milestone when user explores both services
        if (service === 'hrm' && activeService === 'recruitment') {
            trackJourneyMilestone('Explored Both Services');
        }
    };

    const handleDownloadRecruitment = () => {
        trackDownload('recruitment');
        trackCTAClick('Download Recruitment Brochure', 'Services Page - Recruitment Section');
        trackJourneyMilestone('Downloaded Recruitment Brochure');

        const link = document.createElement('a');
        link.href = '/downloads/thehrhub-recruitment-brochure.pdf';
        link.download = 'TheHRHub-Recruitment-Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDownloadHRM = () => {
        trackDownload('hrm');
        trackCTAClick('Download HRM Brochure', 'Services Page - HRM Section');
        trackJourneyMilestone('Downloaded HRM Brochure');

        const link = document.createElement('a');
        link.href = '/downloads/thehrhub-hrm-brochure.pdf';
        link.download = 'TheHRHub-HRM-Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleRequestQuote = () => {
        trackCTAClick('Request Quote', `Services Page - ${activeService}`);
        trackModalInteraction('Quote Modal', 'opened');
        trackJourneyMilestone('Opened Quote Request');
        setIsQuoteModalOpen(true);
    };

    const handleCloseQuoteModal = () => {
        trackModalInteraction('Quote Modal', 'closed');
        setIsQuoteModalOpen(false);
    };

    // Track pricing tier hover/view
    const handlePricingHover = (tierName: string) => {
        trackPricingView(tierName, activeService);
    };

    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section
                className="pt-28 pb-8 px-6 bg-gradient-to-br from-primary to-primary/90"
                data-section-name="Hero"
            >
                <div className="container mx-auto max-w-5xl text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
                        Our Services
                    </h1>
                    <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
                        Expert HR solutions designed for growing SMEs
                    </p>

                    {/* Service Toggle Pills */}
                    <div className="inline-flex bg-background/10 backdrop-blur-sm rounded-full p-1 gap-1">
                        <button
                            onClick={() => handleServiceToggle('recruitment')}
                            className={`px-6 md:px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeService === 'recruitment'
                                    ? 'bg-secondary text-secondary-foreground shadow-lg'
                                    : 'text-primary-foreground hover:bg-background/10'
                                }`}
                        >
                            <Users className="w-4 h-4 inline mr-2" />
                            Recruitment
                        </button>
                        <button
                            onClick={() => handleServiceToggle('hrm')}
                            className={`px-6 md:px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeService === 'hrm'
                                    ? 'bg-accent text-accent-foreground shadow-lg'
                                    : 'text-primary-foreground hover:bg-background/10'
                                }`}
                        >
                            <Building2 className="w-4 h-4 inline mr-2" />
                            HR Management
                        </button>
                    </div>
                </div>
            </section>

            {/* Recruitment Service */}
            {activeService === 'recruitment' && (
                <section className="py-12 px-6 animate-fade-in">
                    <div className="container mx-auto max-w-6xl">

                        {/* Service Overview */}
                        <div
                            className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-6 md:p-10 mb-12 border-2 border-secondary/20"
                            data-section-name="Recruitment Overview"
                        >
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                                            <Users className="w-5 h-5 text-secondary-foreground" />
                                        </div>
                                        <span className="text-sm font-bold text-secondary uppercase tracking-wide">
                                            Recruitment Services
                                        </span>
                                    </div>
                                    <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                                        Transparent Flat-Fee Hiring
                                    </h2>
                                    <p className="text-base md:text-lg text-muted-foreground mb-6">
                                        Stop wasting money on the wrong hires. Get quality candidates fast with pricing you can plan for.
                                    </p>

                                    <div className="space-y-2 mb-6">
                                        <div className="flex items-center gap-2 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                                            <span className="text-foreground">7-14 days delivery</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                                            <span className="text-foreground">No percentage fees</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                                            <span className="text-foreground">Pre-screened candidates</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        <Button variant="cta" onClick={handleDownloadRecruitment}>
                                            <FileDown className="mr-2 w-4 h-4" />
                                            Download Brochure
                                        </Button>
                                        <Button variant="outline" onClick={handleRequestQuote}>
                                            <MessageSquare className="mr-2 w-4 h-4" />
                                            Get Quote
                                        </Button>
                                    </div>
                                </div>
                                <div className="order-first md:order-last">
                                    <img
                                        src={recruitmentImage}
                                        alt="Recruitment"
                                        className="rounded-2xl shadow-xl w-full"
                                        loading="eager"
                                        fetchPriority="high"
                                        width="600"
                                        height="400"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Pricing Tiers */}
                        <div className="mb-12" data-section-name="Recruitment Pricing">
                            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Pricing Plans</h3>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {/* Entry Level */}
                                <div
                                    className="bg-card rounded-2xl p-5 border-2 border-border hover:border-secondary/30 hover:shadow-lg transition-all"
                                    onMouseEnter={() => handlePricingHover('Entry Level')}
                                >
                                    <div className="text-sm font-bold text-secondary mb-2">ENTRY LEVEL</div>
                                    <div className="text-3xl font-bold text-primary mb-1">₦160K</div>
                                    <div className="text-xs text-muted-foreground mb-3">per hire</div>
                                    <div className="text-sm text-foreground mb-3">
                                        Interns, frontline staff, customer service
                                    </div>
                                    <div className="text-xs text-muted-foreground pt-3 border-t border-border">
                                        1–5 hires/month
                                    </div>
                                </div>

                                {/* Junior */}
                                <div
                                    className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-5 border-2 border-secondary relative hover:shadow-xl transition-all"
                                    onMouseEnter={() => handlePricingHover('Junior Roles')}
                                >
                                    <div className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                                        POPULAR
                                    </div>
                                    <div className="text-sm font-bold text-secondary mb-2">JUNIOR ROLES</div>
                                    <div className="text-3xl font-bold text-primary mb-1">₦220K</div>
                                    <div className="text-xs text-muted-foreground mb-3">per hire</div>
                                    <div className="text-sm text-foreground mb-3">
                                        Sales reps, admins, junior accountants
                                    </div>
                                    <div className="text-xs text-muted-foreground pt-3 border-t border-border">
                                        2–4 hires/month
                                    </div>
                                </div>

                                {/* Mid Level */}
                                <div
                                    className="bg-card rounded-2xl p-5 border-2 border-border hover:border-secondary/30 hover:shadow-lg transition-all"
                                    onMouseEnter={() => handlePricingHover('Mid-Level')}
                                >
                                    <div className="text-sm font-bold text-secondary mb-2">MID-LEVEL</div>
                                    <div className="text-3xl font-bold text-primary mb-1">₦350K</div>
                                    <div className="text-xs text-muted-foreground mb-3">per hire</div>
                                    <div className="text-sm text-foreground mb-3">
                                        Supervisors, team leads, specialists
                                    </div>
                                    <div className="text-xs text-muted-foreground pt-3 border-t border-border">
                                        1–3 hires/month
                                    </div>
                                </div>

                                {/* Tech */}
                                <div
                                    className="bg-card rounded-2xl p-5 border-2 border-border hover:border-secondary/30 hover:shadow-lg transition-all"
                                    onMouseEnter={() => handlePricingHover('Tech Talent')}
                                >
                                    <div className="text-sm font-bold text-secondary mb-2">TECH TALENT</div>
                                    <div className="text-3xl font-bold text-primary mb-1">8%</div>
                                    <div className="text-xs text-muted-foreground mb-3">of annual salary</div>
                                    <div className="text-sm text-foreground mb-3">
                                        Engineers, product managers, DevOps
                                    </div>
                                    <div className="text-xs text-muted-foreground pt-3 border-t border-border">
                                        Specialist track
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* How It Works */}
                        <div
                            className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-2xl p-6 md:p-8 mb-8"
                            data-section-name="How Recruitment Works"
                        >
                            <h3 className="text-xl font-bold text-foreground mb-6 text-center">How It Works</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold text-secondary-foreground">
                                        1
                                    </div>
                                    <h4 className="font-semibold text-foreground mb-1 text-sm">Share Your Needs</h4>
                                    <p className="text-xs text-muted-foreground">Tell us your requirements</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold text-secondary-foreground">
                                        2
                                    </div>
                                    <h4 className="font-semibold text-foreground mb-1 text-sm">We Find Candidates</h4>
                                    <p className="text-xs text-muted-foreground">Pre-screened and assessed</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold text-secondary-foreground">
                                        3
                                    </div>
                                    <h4 className="font-semibold text-foreground mb-1 text-sm">You Make the Hire</h4>
                                    <p className="text-xs text-muted-foreground">With onboarding support</p>
                                </div>
                            </div>
                        </div>

                        {/* Final CTA */}
                        <div className="text-center" data-section-name="Recruitment CTA">
                            <p className="text-muted-foreground mb-4">Ready to build your team?</p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Button variant="cta" size="lg" onClick={handleDownloadRecruitment}>
                                    <FileDown className="mr-2" />
                                    Download Full Brochure
                                </Button>
                                <Button variant="outline" size="lg" onClick={handleRequestQuote}>
                                    <MessageSquare className="mr-2" />
                                    Request Custom Quote
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* HRM Service */}
            {activeService === 'hrm' && (
                <section className="py-12 px-6 animate-fade-in">
                    <div className="container mx-auto max-w-6xl">

                        {/* Service Overview */}
                        <div
                            className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-6 md:p-10 mb-12 border-2 border-accent/20"
                            data-section-name="HRM Overview"
                        >
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <img
                                        src={hrmImage}
                                        alt="HR Management"
                                        className="rounded-2xl shadow-xl w-full"
                                        loading="lazy"
                                        width="600"
                                        height="400"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                                            <Building2 className="w-5 h-5 text-accent-foreground" />
                                        </div>
                                        <span className="text-sm font-bold text-accent-foreground uppercase tracking-wide">
                                            HR Management Retainers
                                        </span>
                                    </div>
                                    <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                                        Scalable HR Support
                                    </h2>
                                    <p className="text-base md:text-lg text-muted-foreground mb-6">
                                        Get fractional HR that grows with you—from 2 to 120+ employees with transparent per-employee pricing.
                                    </p>

                                    <div className="space-y-2 mb-6">
                                        <div className="flex items-center gap-2 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                                            <span className="text-foreground">2-5 days/week presence</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                                            <span className="text-foreground">Full compliance coverage</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                                            <span className="text-foreground">Strategic HR planning</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        <Button variant="cta" onClick={handleDownloadHRM}>
                                            <FileDown className="mr-2 w-4 h-4" />
                                            Download Brochure
                                        </Button>
                                        <Button variant="outline" onClick={handleRequestQuote}>
                                            <MessageSquare className="mr-2 w-4 h-4" />
                                            Get Quote
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* HR Tiers */}
                        <div className="mb-12" data-section-name="HRM Pricing">
                            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Choose Your Tier</h3>

                            <div className="space-y-4">
                                {/* Starter */}
                                <div
                                    className="bg-card rounded-2xl p-5 border-2 border-border hover:border-accent/30 hover:shadow-lg transition-all"
                                    onMouseEnter={() => handlePricingHover('Starter HR')}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Users className="w-6 h-6 text-accent" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="text-lg font-bold text-foreground">Starter HR</h4>
                                                    <span className="bg-accent/10 text-accent-foreground px-2 py-0.5 rounded-full text-xs font-semibold">
                                                        2-10 STAFF
                                                    </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-2">2 days/week</p>
                                                <p className="text-sm text-foreground">
                                                    HR setup, compliance, employee records
                                                </p>
                                            </div>
                                        </div>
                                        <div className="md:text-right md:min-w-[140px]">
                                            <div className="text-2xl md:text-3xl font-bold text-primary">₦100K+</div>
                                            <p className="text-xs text-muted-foreground">/month</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Growth */}
                                <div
                                    className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-5 border-2 border-accent hover:shadow-xl transition-all relative"
                                    onMouseEnter={() => handlePricingHover('Growth HR')}
                                >
                                    <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                                        RECOMMENDED
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Building2 className="w-6 h-6 text-accent-foreground" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="text-lg font-bold text-foreground">Growth HR</h4>
                                                    <span className="bg-accent/10 text-accent-foreground px-2 py-0.5 rounded-full text-xs font-semibold">
                                                        10-30 STAFF
                                                    </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-2">3 days/week</p>
                                                <p className="text-sm text-foreground">
                                                    All Starter + hiring, payroll, performance
                                                </p>
                                            </div>
                                        </div>
                                        <div className="md:text-right md:min-w-[140px]">
                                            <div className="text-2xl md:text-3xl font-bold text-primary">₦16.5K–25K</div>
                                            <p className="text-xs text-muted-foreground">/employee/mo</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Advanced */}
                                <div
                                    className="bg-card rounded-2xl p-5 border-2 border-border hover:border-accent/30 hover:shadow-lg transition-all"
                                    onMouseEnter={() => handlePricingHover('Advanced HR')}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <TrendingUp className="w-6 h-6 text-accent" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="text-lg font-bold text-foreground">Advanced HR</h4>
                                                    <span className="bg-accent/10 text-accent-foreground px-2 py-0.5 rounded-full text-xs font-semibold">
                                                        30-60 STAFF
                                                    </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-2">4 days/week</p>
                                                <p className="text-sm text-foreground">
                                                    All Growth + training, automation, reports
                                                </p>
                                            </div>
                                        </div>
                                        <div className="md:text-right md:min-w-[140px]">
                                            <div className="text-2xl md:text-3xl font-bold text-primary">₦20.5K–30K</div>
                                            <p className="text-xs text-muted-foreground">/employee/mo</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Strategic */}
                                <div
                                    className="bg-card rounded-2xl p-5 border-2 border-border hover:border-accent/30 hover:shadow-lg transition-all"
                                    onMouseEnter={() => handlePricingHover('Strategic HR')}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Target className="w-6 h-6 text-accent" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="text-lg font-bold text-foreground">Strategic HR</h4>
                                                    <span className="bg-accent/10 text-accent-foreground px-2 py-0.5 rounded-full text-xs font-semibold">
                                                        60+ STAFF
                                                    </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-2">4-5 days/week</p>
                                                <p className="text-sm text-foreground">
                                                    All Advanced + strategy, succession, analytics
                                                </p>
                                            </div>
                                        </div>
                                        <div className="md:text-right md:min-w-[140px]">
                                            <div className="text-2xl md:text-3xl font-bold text-primary">₦25.5K–30K+</div>
                                            <p className="text-xs text-muted-foreground">/employee/mo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Add-ons */}
                        <div
                            className="bg-gradient-to-r from-accent/5 to-muted/30 rounded-2xl p-6 mb-8 border border-accent/20"
                            data-section-name="HRM Add-ons"
                        >
                            <h3 className="text-lg font-bold text-foreground mb-4">Add-on Services</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">Payroll</p>
                                        <p className="text-xs text-muted-foreground">₦35K setup + fees</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">Training</p>
                                        <p className="text-xs text-muted-foreground">On-demand sessions</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">Bundles</p>
                                        <p className="text-xs text-muted-foreground">HRM + Recruitment</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Final CTA */}
                        <div className="text-center" data-section-name="HRM CTA">
                            <p className="text-muted-foreground mb-4">Ready to strengthen your HR?</p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Button variant="cta" size="lg" onClick={handleDownloadHRM}>
                                    <FileDown className="mr-2" />
                                    Download Full Brochure
                                </Button>
                                <Button variant="outline" size="lg" onClick={handleRequestQuote}>
                                    <MessageSquare className="mr-2" />
                                    Request Custom Quote
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Book Strategy Call */}
            <BookStrategyCall />

            {/* Quote Modal */}
            <QuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseQuoteModal} />

            <Footer />
        </main>
    );
};

export default ServicesPage;
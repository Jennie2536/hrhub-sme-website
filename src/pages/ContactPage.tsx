import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
    const handleWhatsApp = () => {
        window.open('https://wa.me/2349167676044', '_blank');
    };

    const handleCall = () => {
        window.location.href = 'tel:02013309296';
    };

    const handleEmail = () => {
        window.location.href = 'mailto:contact@thehrhub.com.ng';
    };

    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                        Get In Touch
                    </h1>
                    <p className="text-xl md:text-2xl text-primary-foreground/90">
                        Ready to transform your HR operations? We're here to help.
                    </p>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">

                    {/* Main Contact Cards */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">

                        {/* WhatsApp Card */}
                        <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-3xl p-8 border-2 border-secondary/20 hover:border-secondary/40 transition-all hover:shadow-xl">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="w-7 h-7 text-secondary-foreground" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-foreground mb-2">WhatsApp Us</h2>
                                    <p className="text-muted-foreground">
                                        Chat with us directly for quick responses
                                    </p>
                                </div>
                            </div>
                            <div className="mb-6">
                                <p className="text-3xl font-bold text-primary mb-2">+234 916 767 6044</p>
                                <p className="text-sm text-muted-foreground">Available Mon-Fri, 9AM-5PM WAT</p>
                            </div>
                            <Button variant="cta" size="lg" onClick={handleWhatsApp} className="w-full">
                                Start WhatsApp Chat
                            </Button>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-8 border-2 border-accent/20 hover:border-accent/40 transition-all hover:shadow-xl">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-7 h-7 text-accent-foreground" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-foreground mb-2">Call Us</h2>
                                    <p className="text-muted-foreground">
                                        Speak with our customer support team
                                    </p>
                                </div>
                            </div>
                            <div className="mb-6">
                                <p className="text-3xl font-bold text-primary mb-2">020 1330 9296</p>
                                <p className="text-sm text-muted-foreground">Customer Support Line</p>
                            </div>
                            <Button variant="default" size="lg" onClick={handleCall} className="w-full">
                                Call Now
                            </Button>
                        </div>
                    </div>

                    {/* Email & Address Grid */}
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Email Card */}
                        <div className="bg-card rounded-3xl p-8 border-2 border-border hover:border-primary/30 transition-all">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">Email</h3>
                                    <p className="text-sm text-muted-foreground">Send us a message anytime</p>
                                </div>
                            </div>
                            <a
                                href="mailto:contact@thehrhub.com.ng"
                                className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors block mb-4"
                            >
                                contact@thehrhub.com.ng
                            </a>
                            <Button variant="outline" size="lg" onClick={handleEmail} className="w-full">
                                Send Email
                            </Button>
                        </div>

                        {/* Office Address Card */}
                        <div className="bg-card rounded-3xl p-8 border-2 border-border">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">Our Office</h3>
                                    <p className="text-sm text-muted-foreground">Visit us in Abuja</p>
                                </div>
                            </div>
                            <div className="text-foreground leading-relaxed">
                                <p className="font-semibold mb-1">Suite B07, Flomax Plaza</p>
                                <p>Franca Afegbua Crescent</p>
                                <p>Gudu District, Abuja</p>
                                <p className="text-muted-foreground text-sm mt-2">Nigeria</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Response Note */}
                    <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-foreground mb-3">We Respond Fast</h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                            WhatsApp us for immediate assistance, or call our support line during business hours. We typically respond to emails within 24 hours.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button variant="cta" size="lg" onClick={handleWhatsApp}>
                                <MessageCircle className="mr-2" />
                                WhatsApp Us Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ContactPage;
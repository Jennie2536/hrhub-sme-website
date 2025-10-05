import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { submitStrategyCall } from "@/services/airtable";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20),
  company: z.string().trim().min(2, "Company name is required").max(100),
  message: z.string().trim().max(500).optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

const BookStrategyCall = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = leadSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LeadFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof LeadFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await submitStrategyCall({
        name: result.data.name,
        email: result.data.email,
        phone: result.data.phone,
        company: result.data.company,
        message: result.data.message || '',
      });

      toast({
        title: "Request Received!",
        description: "We'll contact you within 24 hours to schedule your strategy call.",
      });

      setOpen(false);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      setErrors({});

    } catch (error) {
      console.error('Error submitting strategy call booking:', error);
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "An error occurred. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof LeadFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="book-call" className="py-20 px-6 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
      <div className="container mx-auto max-w-4xl text-center">
        <Calendar className="w-16 h-16 mx-auto mb-6 text-primary" />
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Ready to Transform Your HR?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Book a free 30-minute strategy call with our HR experts. We'll analyze your needs and show you exactly how we can help.
        </p>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="text-lg px-8 py-6">
              <Phone className="mr-2" />
              Book Your Strategy Call
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Book a Strategy Call</DialogTitle>
              <DialogDescription>
                Fill in your details and we'll contact you within 24 hours to schedule your free consultation.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={errors.name ? "border-destructive" : ""}
                  disabled={isSubmitting}
                />
                {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={errors.email ? "border-destructive" : ""}
                  disabled={isSubmitting}
                />
                {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={errors.phone ? "border-destructive" : ""}
                  disabled={isSubmitting}
                />
                {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
              </div>

              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className={errors.company ? "border-destructive" : ""}
                  disabled={isSubmitting}
                />
                {errors.company && <p className="text-sm text-destructive mt-1">{errors.company}</p>}
              </div>

              <div>
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us briefly about your HR needs..."
                  className="resize-none"
                  rows={3}
                  disabled={isSubmitting}
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default BookStrategyCall;
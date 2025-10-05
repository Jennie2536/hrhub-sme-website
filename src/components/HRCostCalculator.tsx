import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const calculatorSchema = z.object({
  staffCount: z.number().min(1, "Must have at least 1 staff").max(1000),
  avgSalary: z.number().min(1, "Average salary must be positive"),
  turnoverRate: z.number().min(0, "Turnover rate cannot be negative").max(100, "Cannot exceed 100%"),
  name: z.string().trim().min(2, "Name required").max(100).optional(),
  email: z.string().trim().email("Invalid email").max(255).optional(),
});

const HRCostCalculator = () => {
  const [staffCount, setStaffCount] = useState<string>("10");
  const [avgSalary, setAvgSalary] = useState<string>("150000");
  const [turnoverRate, setTurnoverRate] = useState<string>("15");
  const [showResults, setShowResults] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const calculateHRCost = () => {
    const staff = parseFloat(staffCount) || 0;
    const salary = parseFloat(avgSalary) || 0;
    const turnover = parseFloat(turnoverRate) || 0;

    // Placeholder formula - will be replaced with exact logic
    const annualPayroll = staff * salary * 12;
    const recruitmentCost = (staff * turnover / 100) * (salary * 2); // Assume 2x salary per bad hire
    const hrAdminCost = staff * 25000 * 12; // Rough estimate
    const complianceCost = staff * 15000 * 12;
    
    const totalHRCost = recruitmentCost + hrAdminCost + complianceCost;
    const costPerEmployee = totalHRCost / staff;
    
    return {
      totalHRCost: Math.round(totalHRCost),
      costPerEmployee: Math.round(costPerEmployee),
      annualPayroll: Math.round(annualPayroll),
      recruitmentCost: Math.round(recruitmentCost),
    };
  };

  const handleCalculate = () => {
    const result = calculatorSchema.safeParse({
      staffCount: parseFloat(staffCount),
      avgSalary: parseFloat(avgSalary),
      turnoverRate: parseFloat(turnoverRate),
    });

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setShowResults(true);
  };

  const handleSaveResults = () => {
    const result = calculatorSchema.safeParse({
      staffCount: parseFloat(staffCount),
      avgSalary: parseFloat(avgSalary),
      turnoverRate: parseFloat(turnoverRate),
      name: leadName,
      email: leadEmail,
    });

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // TODO: Send to Airtable CRM
    console.log("Calculator Lead:", { ...result.data, results: calculateHRCost() });
    
    toast({
      title: "Results Saved!",
      description: "We'll send you a detailed HR cost analysis report shortly.",
    });

    setShowLeadForm(false);
    setLeadName("");
    setLeadEmail("");
  };

  const results = calculateHRCost();

  return (
    <section id="calculator" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <Calculator className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            True HR Cost Calculator
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what poor HR practices are really costing your business. Calculate your hidden HR costs now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Your Company Details</CardTitle>
              <CardDescription>Enter your current workforce information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="staffCount">Number of Staff</Label>
                <Input
                  id="staffCount"
                  type="number"
                  value={staffCount}
                  onChange={(e) => {
                    setStaffCount(e.target.value);
                    setShowResults(false);
                  }}
                  className={errors.staffCount ? "border-destructive" : ""}
                />
                {errors.staffCount && <p className="text-sm text-destructive mt-1">{errors.staffCount}</p>}
              </div>

              <div>
                <Label htmlFor="avgSalary">Average Monthly Salary (₦)</Label>
                <Input
                  id="avgSalary"
                  type="number"
                  value={avgSalary}
                  onChange={(e) => {
                    setAvgSalary(e.target.value);
                    setShowResults(false);
                  }}
                  className={errors.avgSalary ? "border-destructive" : ""}
                />
                {errors.avgSalary && <p className="text-sm text-destructive mt-1">{errors.avgSalary}</p>}
              </div>

              <div>
                <Label htmlFor="turnoverRate">Annual Turnover Rate (%)</Label>
                <Input
                  id="turnoverRate"
                  type="number"
                  value={turnoverRate}
                  onChange={(e) => {
                    setTurnoverRate(e.target.value);
                    setShowResults(false);
                  }}
                  className={errors.turnoverRate ? "border-destructive" : ""}
                />
                {errors.turnoverRate && <p className="text-sm text-destructive mt-1">{errors.turnoverRate}</p>}
              </div>

              <Button onClick={handleCalculate} className="w-full" size="lg">
                <Calculator className="mr-2" />
                Calculate HR Costs
              </Button>
            </CardContent>
          </Card>

          <Card className={`shadow-lg ${showResults ? 'border-primary' : ''}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Your Estimated HR Costs
              </CardTitle>
              <CardDescription>Annual breakdown of hidden costs</CardDescription>
            </CardHeader>
            <CardContent>
              {!showResults ? (
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  Enter your details and click Calculate to see results
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-primary/10 p-6 rounded-2xl">
                    <p className="text-sm text-muted-foreground mb-1">Total Annual HR Cost</p>
                    <p className="text-4xl font-bold text-primary">
                      ₦{results.totalHRCost.toLocaleString()}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="text-sm font-medium">Cost Per Employee</span>
                      <span className="font-semibold">₦{results.costPerEmployee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="text-sm font-medium">Bad Hire Costs</span>
                      <span className="font-semibold text-destructive">₦{results.recruitmentCost.toLocaleString()}</span>
                    </div>
                  </div>

                  {!showLeadForm ? (
                    <Button 
                      onClick={() => setShowLeadForm(true)} 
                      variant="outline" 
                      className="w-full"
                      size="lg"
                    >
                      Get Detailed Report
                    </Button>
                  ) : (
                    <div className="space-y-4 pt-4 border-t">
                      <p className="text-sm text-muted-foreground">Enter your details to receive a full analysis</p>
                      <div>
                        <Label htmlFor="leadName">Your Name</Label>
                        <Input
                          id="leadName"
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <Label htmlFor="leadEmail">Email Address</Label>
                        <Input
                          id="leadEmail"
                          type="email"
                          value={leadEmail}
                          onChange={(e) => setLeadEmail(e.target.value)}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                      </div>
                      <Button onClick={handleSaveResults} className="w-full">
                        Send Me the Report
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HRCostCalculator;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    teamName: "",
    teamLeaderName: "",
    teamLeaderEmail: "",
    teamSize: "2",
    institution: "",
    projectIdea: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (value: string) => {
    setFormData({
      ...formData,
      teamSize: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Registration submitted!",
      description: "We'll contact you shortly with next steps.",
    });

    // Reset form
    setFormData({
      teamName: "",
      teamLeaderName: "",
      teamLeaderEmail: "",
      teamSize: "2",
      institution: "",
      projectIdea: "",
    });
  };

  return (
    <section id="register" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Register Your Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take the first step towards participating in the IIT Madras Hackathon 2025.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Registration Form</CardTitle>
            <CardDescription>
              Fill out the details below to register your team. All fields are required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="teamName">Team Name</Label>
                <Input
                  id="teamName"
                  name="teamName"
                  placeholder="Enter your team name"
                  value={formData.teamName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="teamLeaderName">Team Leader Full Name</Label>
                <Input
                  id="teamLeaderName"
                  name="teamLeaderName"
                  placeholder="Enter team leader's full name"
                  value={formData.teamLeaderName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="teamLeaderEmail">Team Leader Email</Label>
                <Input
                  id="teamLeaderEmail"
                  name="teamLeaderEmail"
                  type="email"
                  placeholder="Enter team leader's email"
                  value={formData.teamLeaderEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label>Team Size</Label>
                <RadioGroup 
                  value={formData.teamSize} 
                  onValueChange={handleRadioChange}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="size-2" />
                    <Label htmlFor="size-2">2 Members</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="size-3" />
                    <Label htmlFor="size-3">3 Members</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="size-4" />
                    <Label htmlFor="size-4">4 Members</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="institution">Institution Name</Label>
                <Input
                  id="institution"
                  name="institution"
                  placeholder="Enter your institution name"
                  value={formData.institution}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="projectIdea">Brief Project Idea (Optional)</Label>
                <Textarea
                  id="projectIdea"
                  name="projectIdea"
                  placeholder="Briefly describe your project idea (if you have one already)"
                  value={formData.projectIdea}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="w-full bg-hackathon-maroon hover:bg-hackathon-maroon/90">
                Submit Registration
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegistrationForm;

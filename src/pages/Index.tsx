
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import SponsorSection from "@/components/SponsorSection";
import FaqSection from "@/components/FaqSection";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const themes = [
    {
      title: "Healthcare Innovation",
      description: "Create solutions that address healthcare challenges, improve patient outcomes, or enhance healthcare accessibility.",
      icon: "🏥"
    },
    {
      title: "Smart Cities",
      description: "Develop applications that make urban living more efficient, sustainable, and connected.",
      icon: "🏙️"
    },
    {
      title: "EdTech Revolution",
      description: "Build tools that transform education, improve learning outcomes, or make education more accessible.",
      icon: "🎓"
    },
    {
      title: "Financial Inclusion",
      description: "Design solutions that bring financial services to underserved populations or improve financial literacy.",
      icon: "💰"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-hackathon-blue font-medium">About the Event</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">India's Premier Student Hackathon</h2>
                <p className="text-gray-600 mb-4">
                  IIT Madras Hackathon brings together the brightest young minds from across India to collaborate, 
                  innovate, and build solutions for real-world challenges. Over the course of 48 exhilarating hours, 
                  participating teams will conceptualize and develop prototypes while receiving mentorship from 
                  industry experts and academics.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're a coding wizard, a design thinker, or a problem solver, this hackathon provides 
                  the perfect platform to showcase your skills and creativity while connecting with like-minded 
                  individuals and potential employers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-hackathon-maroon hover:bg-hackathon-maroon/90">
                    Register Now
                  </Button>
                  <Button variant="outline">
                    Download Brochure
                  </Button>
                </div>
              </div>
              <div className="order-first md:order-last">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" 
                  alt="Students Collaborating" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Theme Section */}
        <section className="py-16 bg-hackathon-lightgray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Hackathon Themes</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore these exciting themes for your innovative solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {themes.map((theme, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{theme.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{theme.title}</h3>
                    <p className="text-gray-600">{theme.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <Timeline />
        
        {/* Prizes Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Exciting Prizes</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Win big at the IIT Madras Hackathon with our amazing prize pool.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-amber-100 to-amber-200 p-8 rounded-lg text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-yellow-400 w-24 h-24 rounded-full opacity-50"></div>
                <h3 className="text-2xl font-bold mb-2 relative">1st Prize</h3>
                <div className="text-4xl font-bold text-hackathon-maroon mb-3 relative">₹2,00,000</div>
                <p className="text-gray-700 relative">Plus internship opportunities at top tech companies</p>
              </div>
              
              <div className="bg-gradient-to-b from-gray-100 to-gray-200 p-8 rounded-lg text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-gray-400 w-24 h-24 rounded-full opacity-50"></div>
                <h3 className="text-2xl font-bold mb-2 relative">2nd Prize</h3>
                <div className="text-4xl font-bold text-hackathon-maroon mb-3 relative">₹1,00,000</div>
                <p className="text-gray-700 relative">Plus opportunities to showcase at tech conferences</p>
              </div>
              
              <div className="bg-gradient-to-b from-orange-100 to-orange-200 p-8 rounded-lg text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-orange-400 w-24 h-24 rounded-full opacity-50"></div>
                <h3 className="text-2xl font-bold mb-2 relative">3rd Prize</h3>
                <div className="text-4xl font-bold text-hackathon-maroon mb-3 relative">₹50,000</div>
                <p className="text-gray-700 relative">Plus mentorship from industry experts</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg">
                Additional category prizes worth ₹10,000 each for 
                <span className="font-medium"> Best UI/UX</span>, 
                <span className="font-medium"> Most Innovative Idea</span>, and 
                <span className="font-medium"> Social Impact</span> solutions.
              </p>
            </div>
          </div>
        </section>
        
        {/* Sponsors Section */}
        <SponsorSection />
        
        {/* FAQ Section */}
        <FaqSection />
        
        {/* Registration Form */}
        <RegistrationForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

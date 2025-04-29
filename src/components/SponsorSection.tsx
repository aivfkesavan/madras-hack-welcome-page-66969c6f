
import { Card } from "@/components/ui/card";

const SponsorSection = () => {
  const tierSponsors = [
    {
      tier: "Platinum",
      sponsors: [
        {
          name: "Google",
          logo: "https://placeholder.svg",
        },
        {
          name: "Microsoft",
          logo: "https://placeholder.svg",
        }
      ]
    },
    {
      tier: "Gold",
      sponsors: [
        {
          name: "Amazon",
          logo: "https://placeholder.svg",
        },
        {
          name: "IBM",
          logo: "https://placeholder.svg",
        },
        {
          name: "Intel",
          logo: "https://placeholder.svg",
        }
      ]
    },
    {
      tier: "Silver",
      sponsors: [
        {
          name: "Adobe",
          logo: "https://placeholder.svg",
        },
        {
          name: "Cisco",
          logo: "https://placeholder.svg",
        },
        {
          name: "Oracle",
          logo: "https://placeholder.svg",
        },
        {
          name: "Dell",
          logo: "https://placeholder.svg",
        }
      ]
    }
  ];

  return (
    <section id="sponsors" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Sponsors</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're grateful to our sponsors who make this hackathon possible and provide amazing opportunities for participants.
          </p>
        </div>

        <div className="space-y-12">
          {tierSponsors.map((tier, tierIndex) => (
            <div key={tierIndex}>
              <h3 className="text-xl font-semibold text-center mb-6">
                <span className={`
                  ${tierIndex === 0 ? 'bg-yellow-100 text-yellow-800' : 
                    tierIndex === 1 ? 'bg-gray-100 text-gray-800' : 
                    'bg-orange-100 text-orange-800'}
                  px-4 py-1 rounded-full
                `}>
                  {tier.tier} Sponsors
                </span>
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <Card key={sponsorIndex} className="p-6 flex items-center justify-center hover:shadow-md transition-shadow">
                    <div className="text-center">
                      <div className="bg-gray-200 w-20 h-20 mx-auto mb-3 rounded-full flex items-center justify-center text-gray-400 text-xs">
                        Logo
                      </div>
                      <p className="font-medium">{sponsor.name}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Interested in sponsoring the IIT Madras Hackathon?</p>
          <a 
            href="#" 
            className="text-hackathon-blue font-semibold hover:underline"
          >
            Download our Sponsorship Prospectus
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;

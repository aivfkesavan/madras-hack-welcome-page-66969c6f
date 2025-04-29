
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqItems = [
    {
      question: "Who can participate in the hackathon?",
      answer: "The IIT Madras Hackathon is open to all university students across India. Both undergraduate and postgraduate students are eligible to participate. Teams can consist of 2-4 members who may be from different institutions."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in the hackathon is completely free. However, registration is mandatory and teams will be selected based on their application."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Participants should bring their own laptops, chargers, and any other hardware they might need for their project. Food, drinks, and Wi-Fi will be provided at the venue."
    },
    {
      question: "Will accommodation be provided?",
      answer: "Yes, we provide accommodation for participants coming from outside Chennai. Please indicate your accommodation needs during registration."
    },
    {
      question: "What are the judging criteria?",
      answer: "Projects will be judged based on innovation, technical complexity, practicality, presentation quality, and alignment with the hackathon theme."
    },
    {
      question: "Can I start working on my project before the hackathon?",
      answer: "No, all coding and development must be done during the hackathon. However, you can brainstorm ideas and plan your approach in advance."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-hackathon-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about the IIT Madras Hackathon.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600">
            Don't see your question here? 
            <a href="#contact" className="text-hackathon-blue font-medium ml-1 hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

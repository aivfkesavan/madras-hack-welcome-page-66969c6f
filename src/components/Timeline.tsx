
const Timeline = () => {
  const timelineEvents = [
    {
      date: "April 1, 2025",
      title: "Registration Opens",
      description: "Applications open for teams and individual participants."
    },
    {
      date: "May 1, 2025",
      title: "Registration Closes",
      description: "Last date to register for the hackathon."
    },
    {
      date: "May 10, 2025",
      title: "Team Confirmation",
      description: "Selected teams will be notified via email."
    },
    {
      date: "May 15, 2025",
      title: "Hackathon Kick-off",
      description: "Opening ceremony and announcement of problem statements."
    },
    {
      date: "May 17, 2025",
      title: "Final Submissions",
      description: "Project presentations and judging."
    },
    {
      date: "May 17, 2025",
      title: "Winners Announcement",
      description: "Closing ceremony and prize distribution."
    }
  ];

  return (
    <section id="timeline" className="py-16 bg-hackathon-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Event Timeline</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mark your calendars with these important dates for the IIT Madras Hackathon 2025.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item relative pl-8 pb-10 last:pb-0">
              <div className="timeline-dot relative">
                <div className="bg-white rounded-lg shadow-md p-5">
                  <div className="text-hackathon-blue font-semibold mb-1">{event.date}</div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

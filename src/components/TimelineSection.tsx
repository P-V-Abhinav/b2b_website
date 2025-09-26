import React from 'react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      date: "January 6",
      time: "6:00 PM",
      title: "Registration & Opening Ceremony",
      description: "Check-in, team formation, and kick-off presentation"
    },
    {
      date: "January 6",
      time: "8:00 PM",
      title: "Hacking Begins!",
      description: "Start building your revolutionary projects"
    },
    {
      date: "January 7",
      time: "All Day",
      title: "Development & Workshops",
      description: "Continue coding with mentor support and skill workshops"
    },
    {
      date: "January 8",
      time: "All Day",
      title: "Final Sprint",
      description: "Polish your projects and prepare presentations"
    },
    {
      date: "January 9",
      time: "10:00 AM",
      title: "Project Submissions",
      description: "Submit your final projects for judging"
    },
    {
      date: "January 9",
      time: "2:00 PM",
      title: "Demo Day & Awards",
      description: "Present your projects and celebrate winners"
    }
  ];

  return (
  <section className="relative z-40 py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Event Timeline
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            2 packed days of innovation, learning, and collaboration
          </p>
        </div>

        <div className="relative flex">
          <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

          <div className="flex flex-col space-y-12 w-full ml-16">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-center">
                {/* Timeline dot with glow */}
                <div className="relative flex flex-col items-center mr-8">
                  <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-[0_0_20px_5px_rgba(59,130,246,0.3)] ring-4 ring-blue-300"></div>
                </div>
                {/* Free-flowing timeline content */}
                <div className="flex-1">
                  <div>
                    <span className="text-sm font-semibold text-blue-400">
                      {event.date} • {event.time}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1 mb-1">{event.title}</h3>
                    <p className="text-gray-300 mb-2">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Location Details</h3>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Las Vegas Convention Center</strong><br />
              3150 Paradise Rd, Las Vegas, NV 89109
            </p>
            <p className="text-gray-500">
              Transportation and accommodation details will be provided upon registration confirmation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
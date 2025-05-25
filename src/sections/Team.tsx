import React from "react";
import SectionHeading from "../components/SectionHeading";
import { Linkedin, Mail, Github, ExternalLink } from "lucide-react";

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Alok Godara",
      role: "Co-Founder & CEO",
      bio: "Web Developer",
      image:
        "alok.jpeg",
      linkedin: "#",
      email: "aditya@ayubharat.in",
    },
    {
      name: "Naveen Nokhwal",
      role: "Co-Founder & CTO",
      bio: "AI Engineer",
      image:
        "naveen.jpg",
      linkedin: "#",
      github: "#",
      email: "neha@ayubharat.in",
    },
    {
      name: "Ch. Md. Fazil ",
      role: "Co-Founder & COO",
      bio: "AI Engineer",
      image:
        "fazil.jpg",
      linkedin: "#",
      email: "vivek@ayubharat.in",
    },
  ];

  const advisors = [
    {
      name: "Dr. Siddharth Srivastava",
      role: "Healthcare Policy Advisor",
      bio: "Mentor",
      image:
        "Siddharth.jpeg",
      linkedin: "#",
    },
    {
      name: "JCKIF",
      role: "Technology Advisor",
      bio: "Invester",
      image:
        "jckif.jpg",
      linkedin: "#",
    },
  ];

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container">
        <SectionHeading
          title="Our Team"
          subtitle="Meet the passionate team behind AyuBharat combining expertise in healthcare, AI, and product development."
          center
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="card hover:shadow-lg group w-full md:w-80 mx-auto"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="aspect-w-9 aspect-h-16">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-64 h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105 mx-auto"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1 text-center">
                {member.name}
              </h3>
              <p className="text-slate-600 text-sm text-center">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Advisory Board
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="flex space-x-4 bg-slate-50 rounded-lg p-4"
              >
                <div className="flex-shrink-0">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{advisor.name}</h4>
                  {/* <p className="text-primary-600 text-sm mb-1">
                    {advisor.role}
                  </p> */}
                  <p className="text-slate-600 text-sm mb-2">{advisor.bio}</p>
                  {/* {advisor.linkedin && (
                    <a
                      href={advisor.linkedin}
                      className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700"
                    >
                      <Linkedin className="w-4 h-4 mr-1" />
                      <span>LinkedIn</span>
                    </a>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mt-16 text-center">
          <div className="inline-block bg-primary-50 rounded-xl px-8 py-6">
            <h3 className="text-xl font-semibold mb-2">Join Our Team</h3>
            <p className="text-slate-600 mb-4">
              We're looking for passionate individuals to help us transform healthcare in India.
            </p>
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Team;

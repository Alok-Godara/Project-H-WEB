import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Linkedin, Mail, Github, ExternalLink } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Aditya Sharma',
      role: 'Founder & CEO',
      bio: 'Former physician with 10+ years of experience in healthcare. MBBS from AIIMS, MBA from ISB.',
      image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      linkedin: '#',
      email: 'aditya@ayubharat.in'
    },
    {
      name: 'Neha Patel',
      role: 'CTO',
      bio: 'AI researcher with expertise in computer vision and NLP. PhD from IIT Bombay, ex-Microsoft Research.',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      linkedin: '#',
      github: '#',
      email: 'neha@ayubharat.in'
    },
    {
      name: 'Vivek Mehta',
      role: 'Chief Product Officer',
      bio: 'Product leader with experience at Practo and 1mg. Expert in healthcare UX and product strategy.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      linkedin: '#',
      email: 'vivek@ayubharat.in'
    }
  ];
  
  const advisors = [
    {
      name: 'Dr. Rajiv Kumar',
      role: 'Healthcare Policy Advisor',
      bio: 'Former member of NITI Aayog with expertise in healthcare policy and digital transformation.',
      image: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      linkedin: '#'
    },
    {
      name: 'Sanjay Mehrotra',
      role: 'Technology Advisor',
      bio: 'Senior technology executive with experience scaling healthcare startups in emerging markets.',
      image: 'https://images.pexels.com/photos/8353744/pexels-photo-8353744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      linkedin: '#'
    }
  ];

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container">
        <SectionHeading
          title="Our Team"
          subtitle="Meet the passionate team behind AyuBharat combining expertise in healthcare, AI, and product development."
          center
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {teamMembers.map((member, index) => (
            <div key={index} className="card hover:shadow-lg group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-slate-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
        
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-primary-50 rounded-xl px-8 py-6">
            <h3 className="text-xl font-semibold mb-2">Join Our Team</h3>
            <p className="text-slate-600 mb-4">
              We're looking for passionate individuals to help us transform healthcare in India.
            </p>
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
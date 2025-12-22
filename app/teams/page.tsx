import type { Metadata } from 'next';
import Image from 'next/image';
import { teamData } from '@/lib/team.data';
import SectionHeader from '@/components/ui/SectionHeader';
import CallToAction from '@/components/ui/CallToAction';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Our Team - SAJS Foundation',
  description: 'Meet the dedicated board members and volunteers behind our mission.',
};

export default function TeamPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
       '@type': 'Organization',
       name: 'SAJS Foundation',
       member: teamData.map(member => ({
         '@type': 'Person',
         name: member.name,
         jobTitle: member.role,
         image: `https://sajs.in${member.image}`
       }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="pt-32 pb-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            badge="👥 The Team"
            title="Minds Behind the Mission"
            highlightedWord="Mission"
            description="Our leadership team and volunteers working tirelessly for change."
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamData.map((member) => (
              <div key={member.id} className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-[20px] overflow-hidden border-4 border-primary-100 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium text-sm uppercase tracking-wide mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 px-4">{member.bio}</p>
                <div className="flex justify-center space-x-3 text-gray-400">
                  {member.socials?.linkedin && (
                    <a href={member.socials.linkedin} className="hover:text-primary-600 transition-colors">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.socials?.email && (
                    <a href={`mailto:${member.socials.email}`} className="hover:text-primary-600 transition-colors">
                      <FaEnvelope className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}

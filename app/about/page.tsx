import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaShieldAlt, FaUsers, FaLightbulb, FaLeaf, FaStar, FaBullseye, FaEye, FaProjectDiagram, FaMapMarkerAlt, FaHandsHelping, FaArrowRight } from 'react-icons/fa';
import Counter from '@/components/ui/Counter';
import FeatureCard from '@/components/ui/FeatureCard';
import SectionHeader from '@/components/ui/SectionHeader';
import CallToAction from '@/components/ui/CallToAction';

export const metadata: Metadata = {
  title: 'About Us - SAJS Foundation | Our Mission, Vision & Values',
  description: 'Learn about SAJS Foundation\'s journey, mission, and vision. Discover how we\'re empowering communities through education, healthcare, and sustainable development across India since 2010.',
}; 

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'SAJS Foundation',
      foundingDate: '2010',
      description: 'Dedicated to empowering underprivileged communities through education, healthcare, and sustainable development.',
      areaServed: 'India'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 bg-primary-600 text-white rounded-full text-sm font-semibold shadow-md">
                🤝 About Us
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Empowering Communities, <span className="text-primary-600">Transforming Lives</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Since 2010, we&apos;ve been dedicated to creating lasting change through education, healthcare, and sustainable development programs across India.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="px-4 py-1.5 bg-primary-600 text-white rounded-full text-sm font-semibold shadow-md">
                  📖 Our Story
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                A Journey of <span className="text-primary-600">Hope and Impact</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                SAJS Foundation was born from a simple yet powerful vision: to create a world where every individual has access to basic necessities and opportunities for growth. Founded in 2010, we started with a small team of dedicated volunteers working in just one community.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Today, we&apos;ve grown into a leading NGO operating across 25+ communities in India, touching the lives of over 50,000 people annually. Our journey has been marked by countless stories of transformation, resilience, and hope.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What drives us is not just the numbers, but the smiles on children&apos;s faces when they receive education, the relief in families when they access healthcare, and the pride in communities as they become self-sufficient.
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/indian_about_community.png"
                  alt="SAJS Social Worker with Community"
                  width={800}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm font-semibold uppercase tracking-wider mb-1">Established 2010</div>
                  <div className="text-2xl font-bold">Touching Lives Every Day</div>
                </div>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-primary-600 hidden md:block">
                 <div className="text-4xl font-bold text-primary-600 mb-1">50K+</div>
                 <div className="text-sm text-gray-600 font-medium">Lives Impacted Annually</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 bg-primary-600 text-white rounded-full text-sm font-semibold shadow-md">
                🎯 Our Purpose
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Guided by <span className="text-primary-600">Mission & Vision</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to creating lasting change drives everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission Card */}
            <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary-200 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-bl-full opacity-50"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaBullseye className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower underprivileged communities by providing access to quality education, healthcare, and sustainable livelihood opportunities, enabling them to break the cycle of poverty and build a better future for themselves and generations to come.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary-200 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-bl-full opacity-50"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaEye className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  A world where every individual, regardless of their socio-economic background, has equal opportunities to thrive, contribute to society, and live with dignity. We envision self-sufficient communities that are healthy, educated, and empowered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="💎 Core Values"
            title="The Principles That Guide Us"
            highlightedWord="Guide Us"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              variant="value"
              icon={FaHeart}
              title="Compassion"
              description="We approach every individual and community with empathy, understanding, and genuine care."
              iconWrapperClass="bg-red-100"
              iconColorClass="text-red-600"
            />

            <FeatureCard
              variant="value"
              icon={FaShieldAlt}
              title="Integrity"
              description="Transparency and honesty in all our operations, ensuring maximum impact."
              iconWrapperClass="bg-blue-100"
              iconColorClass="text-blue-600"
            />

            <FeatureCard
              variant="value"
              icon={FaUsers}
              title="Collaboration"
              description="Working together with communities, partners, and stakeholders to create lasting change."
              iconWrapperClass="bg-purple-100"
              iconColorClass="text-purple-600"
            />

            <FeatureCard
              variant="value"
              icon={FaLightbulb}
              title="Innovation"
              description="Constantly seeking new and better ways to serve communities and maximize our impact."
              iconWrapperClass="bg-yellow-100"
              iconColorClass="text-yellow-600"
            />

            <FeatureCard
              variant="value"
              icon={FaLeaf}
              title="Sustainability"
              description="Creating programs that empower communities to become self-sufficient and thrive."
              iconWrapperClass="bg-primary-100"
              iconColorClass="text-primary-600"
            />

            <FeatureCard
              variant="value"
              icon={FaStar}
              title="Excellence"
              description="Striving for the highest standards in everything we do, from program delivery to donor relations."
              iconWrapperClass="bg-orange-100"
              iconColorClass="text-orange-600"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />
    </>
  );
}

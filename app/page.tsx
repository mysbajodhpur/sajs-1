import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaHeartbeat, FaHandsHelping, FaHeart, FaArrowRight, FaUsers, FaProjectDiagram, FaMapMarkerAlt } from 'react-icons/fa';
import Counter from '@/components/ui/Counter';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';
import FeatureCard from '@/components/ui/FeatureCard';
import SectionHeader from '@/components/ui/SectionHeader';
import StatHighlight from '@/components/ui/StatHighlight';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'SAJS Foundation',
    url: 'https://sajs.in',
    logo: 'https://sajs.in/logo.png',
    sameAs: [
      'https://facebook.com/sajsfoundation',
      'https://twitter.com/sajsfoundation',
      'https://instagram.com/sajsfoundation',
      'https://linkedin.com/company/sajsfoundation'
    ],
    description: 'Empowering communities through education, healthcare, and sustainable development.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No 155, Prithvi Raj Nagar Jhalamand',
      addressLocality: 'Jodhpur',
      addressRegion: 'Rajasthan',
      postalCode: '342006',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-11-2345-6789',
      contactType: 'customer service',
      email: 'info@sajs.in'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section id="home" className="relative pt-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-5">
              <div className="inline-block">
                <span className="px-4 py-1.5 bg-primary-600 text-white rounded-full text-sm font-semibold shadow-md">
                  🌱 Making a Difference Together
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Empowering Communities, <span className="text-primary-600">Transforming Lives</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Join us in creating lasting change through education, healthcare, and sustainable community development.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="#donate"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <FaHeart className="mr-2" />
                  Donate Now
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  About Us
                  <FaArrowRight className="ml-2 text-sm" />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full">
                <Image
                  src="/images/indian_hero_main.png"
                  alt="SAJS Community Impact - Empowering Village Life"
                  width={1200}
                  height={800}
                  className="w-full object-cover h-[400px] md:h-[500px]"
                  priority
                />
              </div>

              {/* Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl hidden lg:block border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-md">
                    <FaUsers className="text-white text-xl" />
                  </div>
                  <div>
                    <Counter target={50000} className="text-2xl font-bold text-gray-900" />
                    <div className="text-xs text-gray-500 font-medium">Lives Impacted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Areas Section */}
      <section id="impact-areas" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="💚 Our Impact Areas"
            title="Creating Lasting Change Together"
            highlightedWord="Lasting Change"
            description="We focus on three key areas to empower communities and transform lives for a sustainable future."
          />

          {/* Impact Areas Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={FaGraduationCap}
              title="Education & Learning"
              description="Providing quality education, scholarships, and learning resources to underprivileged children across 25+ communities."
              footer={
                <div>
                  <div className="text-2xl font-bold text-primary-600">15,000+</div>
                  <div className="text-sm text-gray-500">Students Supported</div>
                </div>
              }
            />

            <FeatureCard
              icon={FaHeartbeat}
              title="Healthcare Support"
              description="Mobile clinics, health camps, and medical assistance programs bringing essential healthcare to remote areas."
              footer={
                <div>
                  <div className="text-2xl font-bold text-primary-600">25,000+</div>
                  <div className="text-sm text-gray-500">Lives Touched</div>
                </div>
              }
            />

            <FeatureCard
              icon={FaHandsHelping}
              title="Community Development"
              description="Skill training, livelihood programs, and infrastructure development empowering communities to thrive."
              footer={
                <div>
                  <div className="text-2xl font-bold text-primary-600">10,000+</div>
                  <div className="text-sm text-gray-500">People Empowered</div>
                </div>
              }
            />
          </div>

          <div className="text-center mt-12">
            <a
              href="#donate"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <FaHeart className="mr-2" />
              Support Our Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block mb-4">
                <span className="px-4 py-1.5 bg-primary-600 text-white rounded-full text-sm font-semibold shadow-md">
                  🤝 About Us
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                United in <span className="text-primary-600">Compassion</span>, Changing Lives
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                SAJS Foundation is dedicated to empowering underprivileged communities through sustainable programs in education, healthcare, and livelihood development. Since our inception, we&apos;ve been committed to creating pathways to self-reliance and dignity for those who need it most.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our holistic approach ensures that every initiative creates lasting impact, transforming not just individual lives but entire communities. We believe in the power of collective action and the difference that compassion can make.
              </p>
              <Link href="/about" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                Learn More About Us
                <FaArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaUsers className="text-primary-600 text-xl" />
                </div>
                <Counter target={50000} className="text-3xl font-bold text-gray-900" />
                <div className="text-sm text-gray-600 mt-1">Lives Impacted</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaProjectDiagram className="text-primary-600 text-xl" />
                </div>
                <Counter target={150} className="text-3xl font-bold text-gray-900" />
                <div className="text-sm text-gray-600 mt-1">Active Projects</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaMapMarkerAlt className="text-primary-600 text-xl" />
                </div>
                <Counter target={25} className="text-3xl font-bold text-gray-900" />
                <div className="text-sm text-gray-600 mt-1">Communities</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaHandsHelping className="text-primary-600 text-xl" />
                </div>
                <Counter target={500} className="text-3xl font-bold text-gray-900" />
                <div className="text-sm text-gray-600 mt-1">Volunteers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="🌟 Our Services"
            title="Building Hope, Creating Lasting Change"
            highlightedWord="Lasting Change"
            description="Our comprehensive programs are designed to address the root causes of poverty and create sustainable pathways to prosperity."
          />

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              variant="simple"
              icon={FaGraduationCap}
              title="Education & Learning"
              description="Providing quality education, scholarships, and learning resources to underprivileged children, ensuring no child is left behind in their educational journey."
            />

            <FeatureCard
              variant="simple"
              icon={FaHeartbeat}
              title="Healthcare Support"
              description="Mobile clinics, health camps, and medical assistance programs bringing essential healthcare services to remote and underserved communities."
            />

            <FeatureCard
              variant="simple"
              icon={FaHandsHelping}
              title="Community Development"
              description="Skill training, livelihood programs, and infrastructure development empowering communities to build sustainable and prosperous futures."
            />
          </div>

          <div className="text-center mt-12">
            <a
              href="#donate"
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition-colors duration-200"
            >
              Support Our Work
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Impact Highlights Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold shadow-md">
                📊 Our Impact
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Highlights of Our <span className="text-primary-100">Impactful Work</span>
            </h2>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
              Measuring our success through the positive change we create in communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StatHighlight value="96%" label="Healthcare Support" percentage={96} />
            <StatHighlight value="94%" label="Education Support" percentage={94} />
            <StatHighlight value="95%" label="Livelihood Programs" percentage={95} />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="💬 Testimonials"
            title="What People Say About Us"
            highlightedWord="Say About Us"
          />

          <TestimonialCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}

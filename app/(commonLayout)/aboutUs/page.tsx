import React from 'react';

import Image from 'next/image';
import { Award, Building, Globe } from 'lucide-react';
import { ScrollReveal } from '@/components/scroll-reveal';

const AboutSection = () => {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="bg-gray-100 rounded-lg h-96">
              <Image
                src="/images/about.jpeg"
                alt="University campus"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div>

              <h1 className="text-5xl font-extrabold  text-gray-900 mb-4">About <span className="text-teal-600">Us</span></h1>
              <p className="text-xl text-gray-600 mb-12">
                Excellence in Higher Education Since 1995
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
                    <p className="text-gray-600">
                      Recognized for outstanding academic programs and research contributions with international
                      accreditation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Globe className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Global Perspective</h3>
                    <p className="text-gray-600">
                      International partnerships and exchange programs providing students with global exposure and
                      opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Building className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Modern Infrastructure</h3>
                    <p className="text-gray-600">
                      State-of-the-art facilities including smart classrooms, research labs, and digital library
                      resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
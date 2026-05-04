'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Database, Code, ShieldCheck, Users, FileText, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Data Analysis & Spatial Intelligence',
    description: 'Leveraging ArcGIS and Google Earth Engine for advanced spatial data analysis and visualization.',
    features: ['Geospatial Analysis', 'Remote Sensing', 'Data Visualization', 'Environmental Monitoring'],
    technologies: ['ArcGIS', 'Google Earth Engine', 'QGIS', 'Python'],
  },
  {
    icon: Code,
    title: 'Software Engineering',
    description: 'Building scalable mobile and web applications with modern technologies and best practices.',
    features: ['Mobile Apps', 'Web Applications', 'API Development', 'System Integration'],
    technologies: ['React Native', 'Next.js', 'Node.js', 'Python'],
  },
  {
    icon: ShieldCheck,
    title: 'IT Support',
    description: 'Subscription-based maintenance and support services to keep your systems running smoothly.',
    features: ['24/7 Monitoring', 'System Maintenance', 'Security Updates', 'Technical Support'],
    technologies: ['Cloud Services', 'Monitoring Tools', 'Security Systems'],
  },
  {
    icon: Users,
    title: 'Tech Capacity Building',
    description: 'Training and empowerment programs to build technical skills and digital literacy.',
    features: ['Workshops', 'Certifications', 'Skill Development', 'Knowledge Transfer'],
    technologies: ['Online Platforms', 'Learning Management', 'Assessment Tools'],
  },
  {
    icon: FileText,
    title: 'Business Plan Proposals',
    description: 'Professional documentation and strategic planning for business growth and development.',
    features: ['Market Analysis', 'Financial Planning', 'Strategy Development', 'Implementation Roadmap'],
    technologies: ['Business Intelligence', 'Financial Modeling', 'Project Management'],
  },
  {
    icon: MapPin,
    title: 'Precision Agriculture',
    description: 'Advanced GIS solutions for agricultural optimization, including precision irrigation and crop monitoring.',
    features: ['Crop Monitoring', 'Irrigation Optimization', 'Yield Prediction', 'Resource Management'],
    technologies: ['GIS', 'IoT Sensors', 'Drone Technology', 'AI/ML'],
  },
];

const caseStudies = [
  {
    title: 'Rwanda AgroShield',
    description: 'Disaster intelligence platform for agricultural risk management',
    impact: 'Reduced crop losses by 40%',
    technologies: ['GIS', 'Remote Sensing', 'AI'],
  },
  {
    title: 'Smart City Initiative',
    description: 'Urban planning and infrastructure optimization platform',
    impact: 'Improved resource allocation by 35%',
    technologies: ['Web Apps', 'Data Analytics', 'IoT'],
  },
  {
    title: 'Healthcare Management System',
    description: 'Digital health platform for patient management and analytics',
    impact: 'Enhanced patient care efficiency by 50%',
    technologies: ['Mobile Apps', 'Cloud Services', 'Data Security'],
  },
];

export default function Services() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-logistack-dark mb-6">
            Our <span className="text-logistack-blue">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to transform your business operations,
            drive innovation, and accelerate growth in the digital age.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-logistack-blue/10 text-logistack-blue px-4 py-2 rounded-full">GIS & Spatial Intelligence</span>
            <span className="bg-logistack-blue/10 text-logistack-blue px-4 py-2 rounded-full">Software Development</span>
            <span className="bg-logistack-blue/10 text-logistack-blue px-4 py-2 rounded-full">Digital Transformation</span>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 group"
            >
              <div className="flex items-center justify-between mb-6">
                <service.icon className="w-12 h-12 text-logistack-blue group-hover:scale-110 transition-transform" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-logistack-blue group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-xl font-bold text-logistack-dark mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm text-logistack-dark mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>



        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-gradient-to-r from-logistack-blue to-logistack-dark rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can drive your success.
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-logistack-blue px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
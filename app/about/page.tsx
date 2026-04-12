'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Target, Users, Award, Globe, TrendingUp, Shield } from 'lucide-react';

const stats = [
  { number: '30+', label: 'Clients Served', icon: Target },
  { number: '98%', label: 'Project Success Rate', icon: Users },
  { number: '24/7', label: 'Support Available', icon: Shield },
];

const values = [
  {
    icon: Globe,
    title: 'Innovation',
    description: 'We stay at the forefront of technology trends and implement cutting-edge solutions.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients to understand their needs and deliver tailored solutions.',
  },
  {
    icon: TrendingUp,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We build trust through transparency, reliability, and ethical business practices.',
  },
];

const team = [
  {
    name: 'Jean Baptiste',
    role: 'CEO & Founder',
    expertise: 'Strategic Leadership, GIS, Software Architecture',
    image: '/api/placeholder/150/150',
  },
  {
    name: 'Marie Claire',
    role: 'Technical Lead',
    expertise: 'Full-Stack Development, Data Science, AI/ML',
    image: '/api/placeholder/150/150',
  },
  {
    name: 'Patrick Nkurunziza',
    role: 'GIS Specialist',
    expertise: 'Spatial Analysis, Remote Sensing, Precision Agriculture',
    image: '/api/placeholder/150/150',
  },
];

export default function About() {
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
            About <span className="text-logistack-blue">Logistack Ltd</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            We are a technology company dedicated to transforming data into actionable insights,
            helping businesses make smarter decisions and build scalable digital solutions that drive real impact.
          </p>
          <div className="w-24 h-1 bg-logistack-blue mx-auto rounded-full"></div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-4xl">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-12 bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow"
              >
                <stat.icon className="w-14 h-14 text-logistack-blue mx-auto mb-6" />
                <div className="text-5xl font-bold text-logistack-dark mb-3">{stat.number}</div>
                <div className="text-gray-600 text-lg font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-logistack-dark mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive innovation,
                efficiency, and sustainable growth. We specialize in spatial intelligence, software
                engineering, and digital transformation, helping organizations leverage data for
                better decision-making and operational excellence.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-logistack-dark mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading technology partner for businesses worldwide, recognized for our
                expertise in GIS, data analytics, and innovative software solutions that create
                measurable impact and drive digital transformation across industries.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-logistack-dark mb-4">Our Expertise</h2>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-logistack-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span>Advanced GIS and spatial data analysis using ArcGIS and Google Earth Engine</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-logistack-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span>Precision agriculture and environmental monitoring solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-logistack-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span>Custom software development for mobile and web applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-logistack-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span>IT infrastructure management and 24/7 support services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-logistack-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span>Technology training and capacity building programs</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-logistack-blue to-logistack-dark p-8 rounded-xl text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Global Reach</h4>
                  <p className="text-blue-100">We serve clients worldwide with tailored solutions for your market and regional challenges.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Proven Results</h4>
                  <p className="text-blue-100">International best practices with measurable outcomes and successful project deliveries.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Innovation Focus</h4>
                  <p className="text-blue-100">Cutting-edge technologies adapted to your specific needs and industry requirements.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-logistack-dark mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <value.icon className="w-12 h-12 text-logistack-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-logistack-dark mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>



        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-gradient-to-r from-logistack-blue to-logistack-dark rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our technology expertise.
            Get in touch today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-logistack-blue px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
              Contact Us
            </Link>
            <Link href="/services" className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-logistack-blue transition">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    // Send to WhatsApp
    const message = `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || 'N/A'}\nMessage: ${data.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/250796847804?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    reset();
    alert('Opening WhatsApp with your message. Thank you for reaching out!');
  };

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-logistack-dark mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business with technology? Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-logistack-dark mb-6">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-logistack-blue" />
                  <div>
                    <p className="font-semibold">Office</p>
                    <p className="text-gray-600">Deco Center - NYARUTARAMA</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-logistack-blue" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">logistackltd@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-logistack-blue" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+250 796 847 804 / +250 783 826 653</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MessageCircle className="w-6 h-6 text-logistack-blue" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a
                      href="https://wa.me/250796847804"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-logistack-blue hover:text-logistack-dark transition font-medium"
                    >
                      +250 796 847 804
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-logistack-blue focus:border-transparent"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-logistack-blue focus:border-transparent"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  {...register('company')}
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-logistack-blue focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-logistack-blue focus:border-transparent"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-logistack-blue text-white py-3 px-6 rounded-lg font-bold hover:bg-logistack-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send via WhatsApp'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
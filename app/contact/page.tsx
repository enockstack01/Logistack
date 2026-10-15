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
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-logistack-amber mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-logistack-navy mb-4">Contact us</h1>
          <div className="h-1 w-16 bg-logistack-amber mb-6" />
          <p className="text-lg text-logistack-ink max-w-2xl">
            Tell us about your project and our team will reply.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-logistack-navy mb-6">Get in touch</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-logistack-navy" />
                  <div>
                    <p className="font-bold text-logistack-navy">Address</p>
                    <p className="text-logistack-ink">Deco Center, Nyarutarama, Kigali, Rwanda</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-logistack-navy" />
                  <div>
                    <p className="font-bold text-logistack-navy">Email</p>
                    <p className="text-logistack-ink">logistackltd@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-logistack-navy" />
                  <div>
                    <p className="font-bold text-logistack-navy">Telephone</p>
                    <p className="text-logistack-ink">+250 796 847 804</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MessageCircle className="w-6 h-6 text-logistack-navy" />
                  <div>
                    <p className="font-bold text-logistack-navy">WhatsApp</p>
                    <a
                      href="https://wa.me/250796847804"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-logistack-navy hover:underline font-medium"
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
            className="bg-logistack-cloud border border-logistack-lavender p-8 rounded-xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-logistack-navy mb-2">
                  Name
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-logistack-lavender bg-white rounded-lg focus:outline-none focus:border-logistack-navy focus:ring-2 focus:ring-logistack-navy/20"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-logistack-navy font-bold">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-logistack-navy mb-2">
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-logistack-lavender bg-white rounded-lg focus:outline-none focus:border-logistack-navy focus:ring-2 focus:ring-logistack-navy/20"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-logistack-navy font-bold">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-bold text-logistack-navy mb-2">
                  Company
                </label>
                <input
                  {...register('company')}
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-logistack-lavender bg-white rounded-lg focus:outline-none focus:border-logistack-navy focus:ring-2 focus:ring-logistack-navy/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-logistack-navy mb-2">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-logistack-lavender bg-white rounded-lg focus:outline-none focus:border-logistack-navy focus:ring-2 focus:ring-logistack-navy/20"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-logistack-navy font-bold">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-logistack-navy text-white py-3 px-6 rounded-lg font-bold hover:bg-logistack-amber hover:text-logistack-navy transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
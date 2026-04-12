import dynamic from 'next/dynamic';

// Lazy load the Hero component for better performance
const Hero = dynamic(() => import('../components/Hero'), {
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>
  ),
});

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
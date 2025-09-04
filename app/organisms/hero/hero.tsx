// src/components/organisms/Hero/Hero.jsx
import Button from '../../atoms/button/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-orange-50 to-amber-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Evolve Authentic
            <span className="block text-orange-600">You. Made Digital.</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
          Building digital experiences as unique as you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact-me" className="inline-flex cursor-pointer">
              <Button size="large">Contact Me</Button>
            </Link>
            <Link href="/browse-portfolio" className="inline-flex cursor-pointer">
              <Button variant="outline" size="large">Browse Portfolio</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
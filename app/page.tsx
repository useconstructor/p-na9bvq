'use client';

import Image from 'next/image';

const stats = [
  { icon: '✿', label: 'Handcrafted' },
  { icon: '❀', label: 'Local & Seasonal' },
  { icon: '✦', label: 'Nationwide Delivery' },
];

const featuredProducts = [
  {
    id: 1,
    name: 'The Garden Party',
    price: 185,
    description: 'Seasonal blooms in soft pastels',
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=700&fit=crop',
  },
  {
    id: 2,
    name: 'Midnight Bloom',
    price: 245,
    description: 'Deep burgundy and plum arrangements',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&h=700&fit=crop',
  },
  {
    id: 3,
    name: 'Morning Dew',
    price: 165,
    description: 'Fresh whites and gentle greens',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&h=700&fit=crop',
  },
  {
    id: 4,
    name: 'Sunset Terrace',
    price: 210,
    description: 'Warm oranges and golden hues',
    image: 'https://images.unsplash.com/photo-1518882605630-8996a190c4a4?w=600&h=700&fit=crop',
  },
];

const navLinks = [
  { href: '#collections', label: 'Collections' },
  { href: '#occasions', label: 'Occasions' },
  { href: '#subscriptions', label: 'Subscriptions' },
  { href: '#about', label: 'About' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-[#FDF8F3]/95 backdrop-blur-sm border-b border-[#D4A574]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-serif tracking-wider text-[#8B6F5C]">
            BLOOMBOX
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-widest text-[#8B6F5C]/70 hover:text-[#8B6F5C] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button className="p-2 text-[#8B6F5C] hover:text-[#C97C7C] transition-colors" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            {/* Account Icon */}
            <button className="p-2 text-[#8B6F5C] hover:text-[#C97C7C] transition-colors" aria-label="Account">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </button>
            {/* Cart Icon */}
            <button className="p-2 text-[#8B6F5C] hover:text-[#C97C7C] transition-colors" aria-label="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Split Section - Text Left, Image Right */}
      <section className="grid lg:grid-cols-2 min-h-[85vh]">
        <div className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-0 order-2 lg:order-1">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C97C7C] mb-4">
            Artisan Floristry
          </p>
          <h1 className="text-5xl lg:text-7xl font-serif text-[#8B6F5C] mb-6 leading-tight">
            Flowers,
            <br />
            <span className="italic">Intentionally</span>
          </h1>
          <p className="text-lg text-[#8B6F5C]/70 mb-8 max-w-md leading-relaxed">
            Curated arrangements crafted with purpose. Each bouquet tells a story
            through thoughtfully selected seasonal blooms.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#collections"
              className="bg-[#C97C7C] text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#B86B6B] transition-colors"
            >
              Explore Collections
            </a>
            <a
              href="#about"
              className="border border-[#D4A574] text-[#8B6F5C] px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#D4A574] hover:text-white transition-colors"
            >
              Our Story
            </a>
          </div>
        </div>
        <div className="relative h-[50vh] lg:h-auto order-1 lg:order-2">
          <Image
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1200&h=1400&fit=crop"
            alt="Elegant floral arrangement"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-[#F5EBE0] py-10 border-y border-[#D4A574]/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl mb-2">{stat.icon}</p>
                <p className="text-sm uppercase tracking-widest text-[#8B6F5C]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="collections" className="py-20 px-6 bg-[#FDF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-[#C97C7C] mb-4">
              Seasonal Selection
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#8B6F5C]">
              Featured Arrangements
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <article key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-[#F5EBE0]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xl text-[#8B6F5C] mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-[#8B6F5C]/60 mb-2">
                  {product.description}
                </p>
                <p className="text-lg text-[#C97C7C]">
                  ${product.price}
                </p>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#collections"
              className="inline-block border border-[#D4A574] text-[#8B6F5C] px-10 py-4 text-sm uppercase tracking-wider hover:bg-[#D4A574] hover:text-white transition-colors"
            >
              View All Arrangements
            </a>
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section id="occasions" className="py-20 px-6 bg-[#F5EBE0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-[#C97C7C] mb-4">
              Every Moment Deserves Beauty
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#8B6F5C]">
              Shop by Occasion
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Birthdays', image: 'https://images.unsplash.com/photo-1518882605630-8996a190c4a4?w=800&h=600&fit=crop' },
              { name: 'Anniversaries', image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&h=600&fit=crop' },
              { name: 'Sympathy', image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&h=600&fit=crop' },
            ].map((occasion) => (
              <a
                key={occasion.name}
                href={`#${occasion.name.toLowerCase()}`}
                className="group relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={occasion.image}
                  alt={occasion.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#8B6F5C]/30 group-hover:bg-[#8B6F5C]/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-serif text-white">{occasion.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section id="subscriptions" className="py-20 px-6 bg-[#FDF8F3]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C97C7C] mb-4">
            Fresh Flowers Monthly
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#8B6F5C] mb-6">
            The Bloom Subscription
          </h2>
          <p className="text-lg text-[#8B6F5C]/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Receive a curated arrangement of seasonal blooms delivered to your door every
            month. Flexible plans starting at $95/month with free delivery.
          </p>
          <a
            href="#subscribe"
            className="inline-block bg-[#C97C7C] text-white px-10 py-4 text-sm uppercase tracking-wider hover:bg-[#B86B6B] transition-colors"
          >
            Start Your Subscription
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-[#8B6F5C]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#C97C7C] mb-4">
              Our Philosophy
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
              Floristry as Art
            </h2>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              At BLOOMBOX, we believe flowers are more than decoration — they are
              expressions of emotion, markers of life&apos;s moments, and art in their most
              ephemeral form.
            </p>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Our artisans source only the finest seasonal blooms from sustainable farms,
              creating arrangements that capture the fleeting beauty of nature.
            </p>
            <a
              href="#story"
              className="inline-block border border-white text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-white hover:text-[#8B6F5C] transition-colors"
            >
              Learn More
            </a>
          </div>
          <div className="relative aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=800&fit=crop"
              alt="Florist arranging flowers"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FDF8F3] border-t border-[#D4A574]/20 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-serif text-[#8B6F5C] mb-4">BLOOMBOX</h3>
              <p className="text-sm text-[#8B6F5C]/60 leading-relaxed">
                Artisan floristry for life&apos;s meaningful moments.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#8B6F5C] mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-[#8B6F5C]/60 hover:text-[#C97C7C]">All Arrangements</a></li>
                <li><a href="#" className="text-sm text-[#8B6F5C]/60 hover:text-[#C97C7C]">Subscriptions</a></li>
                <li><a href="#" className="text-sm text-[#8B6F5C]/60 hover:text-[#C97C7C]">Gift Cards</a></li>
                <li><a href="#" className="text-sm text-[#8B6F5C]/60 hover:text-[#C97C7C]">Corporate</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#8B6F5C] mb-4">Help</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-[#8B6F5C]/60 hover:text-[#C97C7C]">Delivery Info</a></li>
                <li><a href="#" className="text-sm text-[#8B6F5C]/60 hover:text-[#C97C7C]">Care Guide</a></li>
                <li><a href="#" className="text-sm text-[#8B6F5C]/60 hover:text-[#C97C7C]">FAQs</a></li>
                <li><a href="#" className="text-sm text-[#8B6F5C]/60 hover:text-[#C97C7C]">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#8B6F5C] mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-[#8B6F5C]/60 hover:text-[#C97C7C]">Instagram</a></li>
                <li><a href="#" className="text-sm text-[#8B6F5C]/60 hover:text-[#C97C7C]">Pinterest</a></li>
                <li><a href="#" className="text-sm text-[#8B6F5C]/60 hover:text-[#C97C7C]">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#D4A574]/20 pt-8 text-center">
            <p className="text-sm text-[#8B6F5C]/60">
              © 2026 BLOOMBOX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';

import Image from 'next/image';

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '1,200+', label: 'Five-Star Reviews' },
  { value: '50K+', label: 'Arrangements Delivered' },
  { value: '24hr', label: 'Same-Day Delivery' },
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
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#1F2A20]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-serif tracking-wider text-[#1F2A20]">
            BLOOMBOX
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-widest text-[#1F2A20]/70 hover:text-[#1F2A20] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button className="bg-[#1F2A20] text-white px-6 py-2 text-sm uppercase tracking-wider hover:bg-[#1F2A20]/90 transition-colors">
            Shop Now
          </button>
        </div>
      </header>

      {/* Hero Split Section */}
      <section className="grid lg:grid-cols-2 min-h-[85vh]">
        <div className="relative h-[50vh] lg:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1200&h=1400&fit=crop"
            alt="Elegant floral arrangement"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-0">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C97C7C] mb-4">
            Artisan Floristry
          </p>
          <h1 className="text-5xl lg:text-7xl font-serif text-[#1F2A20] mb-6 leading-tight">
            Flowers,
            <br />
            <span className="italic">Intentionally</span>
          </h1>
          <p className="text-lg text-[#1F2A20]/70 mb-8 max-w-md leading-relaxed">
            Curated arrangements crafted with purpose. Each bouquet tells a story
            through thoughtfully selected seasonal blooms.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#collections"
              className="bg-[#1F2A20] text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#1F2A20]/90 transition-colors"
            >
              Explore Collections
            </a>
            <a
              href="#about"
              className="border border-[#1F2A20] text-[#1F2A20] px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#1F2A20] hover:text-white transition-colors"
            >
              Our Story
            </a>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-[#1F2A20] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl lg:text-5xl font-serif text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-widest text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="collections" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-[#C97C7C] mb-4">
              Seasonal Selection
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#1F2A20]">
              Featured Arrangements
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <article key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-[#1F2A20]/5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xl text-[#1F2A20] mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-[#1F2A20]/60 mb-2">
                  {product.description}
                </p>
                <p className="text-lg text-[#1F2A20]">
                  ${product.price}
                </p>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#collections"
              className="inline-block border border-[#1F2A20] text-[#1F2A20] px-10 py-4 text-sm uppercase tracking-wider hover:bg-[#1F2A20] hover:text-white transition-colors"
            >
              View All Arrangements
            </a>
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section id="occasions" className="py-20 px-6 bg-[#1F2A20]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-[#C97C7C] mb-4">
              Every Moment Deserves Beauty
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#1F2A20]">
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
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1F2A20]/30 group-hover:bg-[#1F2A20]/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-serif text-white">{occasion.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section id="subscriptions" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C97C7C] mb-4">
            Fresh Flowers Monthly
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#1F2A20] mb-6">
            The Bloom Subscription
          </h2>
          <p className="text-lg text-[#1F2A20]/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Receive a curated arrangement of seasonal blooms delivered to your door every
            month. Flexible plans starting at $95/month with free delivery.
          </p>
          <a
            href="#subscribe"
            className="inline-block bg-[#C97C7C] text-white px-10 py-4 text-sm uppercase tracking-wider hover:bg-[#C97C7C]/90 transition-colors"
          >
            Start Your Subscription
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-[#1F2A20]">
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
              className="inline-block border border-white text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-white hover:text-[#1F2A20] transition-colors"
            >
              Learn More
            </a>
          </div>
          <div className="relative aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=800&fit=crop"
              alt="Florist arranging flowers"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAF7F2] border-t border-[#1F2A20]/10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-serif text-[#1F2A20] mb-4">BLOOMBOX</h3>
              <p className="text-sm text-[#1F2A20]/60 leading-relaxed">
                Artisan floristry for life&apos;s meaningful moments.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#1F2A20] mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-[#1F2A20]/60 hover:text-[#1F2A20]">All Arrangements</a></li>
                <li><a href="#" className="text-sm text-[#1F2A20]/60 hover:text-[#1F2A20]">Subscriptions</a></li>
                <li><a href="#" className="text-sm text-[#1F2A20]/60 hover:text-[#1F2A20]">Gift Cards</a></li>
                <li><a href="#" className="text-sm text-[#1F2A20]/60 hover:text-[#1F2A20]">Corporate</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#1F2A20] mb-4">Help</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-[#1F2A20]/60 hover:text-[#1F2A20]">Delivery Info</a></li>
                <li><a href="#" className="text-sm text-[#1F2A20]/60 hover:text-[#1F2A20]">Care Guide</a></li>
                <li><a href="#" className="text-sm text-[#1F2A20]/60 hover:text-[#1F2A20]">FAQs</a></li>
                <li><a href="#" className="text-sm text-[#1F2A20]/60 hover:text-[#1F2A20]">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#1F2A20] mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-[#1F2A20]/60 hover:text-[#1F2A20]">Instagram</a></li>
                <li><a href="#" className="text-sm text-[#1F2A20]/60 hover:text-[#1F2A20]">Pinterest</a></li>
                <li><a href="#" className="text-sm text-[#1F2A20]/60 hover:text-[#1F2A20]">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#1F2A20]/10 pt-8 text-center">
            <p className="text-sm text-[#1F2A20]/60">
              © 2026 BLOOMBOX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

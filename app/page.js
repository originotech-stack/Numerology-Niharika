const whatsappNumber = '918233363009';

const whatsappMessage = encodeURIComponent(
  'Namaste, I want to book Pandit Vishnu Sharma for a pooja or marriage.'
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pandit Vishnu Sharma',
  jobTitle: 'Pandit',
  description: 'Pandit services for pooja and marriage rituals.',
  url: 'https://example.com/',
  knowsAbout: ['Pooja', 'Marriage Ceremony', 'Griha Pravesh', 'Satyanarayan Katha'],
  sameAs: [`https://wa.me/${whatsappNumber}`]
};

const services = [
  {
    title: 'Pooja Booking',
    desc: 'Daily, festival, and special pooja with complete Vedic vidhi and sankalp guidance.'
  },
  {
    title: 'Marriage Ceremony',
    desc: 'Traditional wedding mantras, kanyadaan, phera, and complete ritual coordination.'
  },
  {
    title: 'Griha Pravesh',
    desc: 'Vastu-friendly home entry pujan, hawan, and family blessings for prosperity.'
  },
  {
    title: 'Satyanarayan Katha',
    desc: 'Detailed katha path with pooja samagri guidance and prasadam rituals.'
  }
];

const bookingSteps = [
  'Share your ceremony type and city on WhatsApp.',
  'Confirm date, muhurat, and required samagri list.',
  'Receive quick booking confirmation from Pandit ji.'
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="sticky top-0 z-50 border-b border-[#f1d8b4] bg-[#fff9ef]/80 backdrop-blur">
        <div className="mx-auto flex w-[92%] max-w-[1140px] items-center justify-between py-4">
          <a href="#home" className="font-display text-xl font-bold text-[#8a4500]">
            Pandit Vishnu Sharma
          </a>
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-5 text-sm font-semibold text-[#6d4722] md:flex">
              <a href="#home" className="transition hover:text-[#8a4500]">
                Home
              </a>
              <a href="#about" className="transition hover:text-[#8a4500]">
                About
              </a>
              <a href="#contact" className="transition hover:text-[#8a4500]">
                Contact
              </a>
            </nav>
            <a
              href="#book"
              className="rounded-xl bg-[#c66a00] px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#8a4500]"
            >
              Book Now
            </a>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden py-14 md:py-20">
          <div className="pointer-events-none absolute -left-10 top-20 h-40 w-40 rounded-full bg-[#ffd08a]/50 blur-3xl" />
          <div className="pointer-events-none absolute -right-14 top-10 h-56 w-56 rounded-full bg-[#ffc062]/30 blur-3xl" />

          <div className="mx-auto grid w-[92%] max-w-[1140px] items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="reveal">
              <span className="mb-4 inline-flex items-center rounded-full border border-[#efc88f] bg-[#fff0d7] px-3 py-1 text-xs font-bold tracking-wide text-[#8a4500]">
                VEDIC RITUALS | FAST WHATSAPP BOOKING
              </span>
              <h1 className="font-display text-4xl font-bold leading-tight text-[#231303] md:text-6xl">
                Spiritual Ceremonies with Traditional Authenticity
              </h1>
              <p className="mt-5 max-w-[62ch] text-lg text-[#4c3620]">
                Book Pandit Vishnu Sharma for pooja, marriage, griha pravesh, and family rituals.
                Clear process, timely response, and complete spiritual guidance.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={whatsappLink}
                  className="rounded-xl bg-[#c66a00] px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#8a4500]"
                >
                  Book on WhatsApp
                </a>
                <a
                  href="#services"
                  className="rounded-xl border border-[#d9ac72] bg-white/80 px-6 py-3 font-bold text-[#8a4500] transition hover:bg-white"
                >
                  View Services
                </a>
              </div>

              <div className="mt-7 grid gap-3 text-sm text-[#5b3e24] sm:grid-cols-3">
                <p className="rounded-lg border border-[#efcf9e] bg-white/70 px-3 py-2">Traditional Mantras</p>
                <p className="rounded-lg border border-[#efcf9e] bg-white/70 px-3 py-2">Quick Confirmation</p>
                <p className="rounded-lg border border-[#efcf9e] bg-white/70 px-3 py-2">Guided Samagri List</p>
              </div>
            </div>

            <aside className="reveal reveal-delay-1 glass-card soft-ring rounded-3xl border border-[#f1d8b4] p-6">
              <p className="font-display text-2xl font-semibold text-[#2a1705]">Why Families Choose Us</p>
              <ul className="mt-4 space-y-3 text-[#4c3620]">
                <li className="rounded-lg bg-white/80 px-3 py-2">Personalized ritual guidance before ceremony day</li>
                <li className="rounded-lg bg-white/80 px-3 py-2">Simple and respectful ceremony experience</li>
                <li className="rounded-lg bg-white/80 px-3 py-2">Support for marriage and home puja bookings</li>
              </ul>
              <div className="mt-5 rounded-2xl bg-[#fff0d5] p-4 text-sm text-[#6a451f]">
                WhatsApp booking is open daily. Share date, location, and ceremony type.
              </div>
            </aside>
          </div>
        </section>

        <section id="services" className="pb-10">
          <div className="mx-auto w-[92%] max-w-[1140px]">
            <div className="reveal reveal-delay-1 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-bold tracking-[0.18em] text-[#8a4500]">SERVICES</p>
                <h2 className="font-display text-4xl font-semibold text-[#251302]">Rituals We Conduct</h2>
              </div>
              <p className="max-w-xl text-[#4c3620]">
                Every ceremony is performed with proper vidhi, clear communication, and devotion.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className={`reveal rounded-2xl border border-[#f0d4ad] bg-white/80 p-6 soft-ring ${
                    index > 1 ? 'reveal-delay-3' : 'reveal-delay-2'
                  }`}
                >
                  <h3 className="font-display text-2xl font-semibold text-[#241303]">{service.title}</h3>
                  <p className="mt-2 text-[#4c3620]">{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="pb-12">
          <div className="mx-auto w-[92%] max-w-[1140px]">
            <div className="reveal reveal-delay-2 rounded-3xl border border-[#f0d4ad] bg-white/80 p-7 soft-ring md:p-9">
              <p className="text-xs font-bold tracking-[0.18em] text-[#8a4500]">ABOUT</p>
              <h2 className="font-display mt-2 text-4xl font-semibold text-[#251302]">About Pandit Vishnu Sharma</h2>
              <p className="mt-4 max-w-3xl text-[#4c3620]">
                Pandit Vishnu Sharma provides traditional Vedic rituals for families who want authentic
                and respectful ceremonies. From marriage to home pooja, each event is guided with clear
                communication, proper mantras, and complete ritual support.
              </p>
            </div>
          </div>
        </section>

        <section id="book" className="pb-14">
          <div className="mx-auto w-[92%] max-w-[1140px]">
            <div className="reveal reveal-delay-2 rounded-3xl border border-[#ebc38c] bg-gradient-to-br from-[#ffedc9] via-[#ffe6ba] to-[#ffdca1] p-7 md:p-10">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-xs font-bold tracking-[0.18em] text-[#8a4500]">BOOKING PROCESS</p>
                  <h2 className="font-display text-4xl font-semibold text-[#291604]">Book in 3 Simple Steps</h2>
                  <div className="mt-5 space-y-3">
                    {bookingSteps.map((step, idx) => (
                      <p key={step} className="rounded-xl bg-white/75 px-4 py-3 text-[#4c3620]">
                        <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#c66a00] text-xs font-bold text-white">
                          {idx + 1}
                        </span>
                        {step}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="text-left md:text-right">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={whatsappLink}
                    className="inline-block rounded-xl bg-[#c66a00] px-7 py-3 text-lg font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#8a4500]"
                  >
                    Book Now on WhatsApp
                  </a>
                  <p className="mt-3 text-sm text-[#5a3918]">Replace {whatsappNumber} with your real WhatsApp number.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="pb-14">
          <div className="mx-auto w-[92%] max-w-[1140px]">
            <div className="reveal reveal-delay-3 rounded-3xl border border-[#ebc38c] bg-[#fff2da] p-7 md:p-9">
              <p className="text-xs font-bold tracking-[0.18em] text-[#8a4500]">CONTACT</p>
              <h2 className="font-display mt-2 text-4xl font-semibold text-[#2a1604]">Contact and Booking</h2>
              <p className="mt-3 text-[#4c3620]">
                For quick booking, message directly on WhatsApp with ceremony type, date, and city.
              </p>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={whatsappLink}
                className="mt-5 inline-block rounded-xl bg-[#c66a00] px-7 py-3 text-lg font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#8a4500]"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#ecd2ad] py-7 text-center text-sm text-[#5a3f26]">
        <div className="mx-auto w-[92%] max-w-[1140px]">
          <p className="font-display m-0 text-xl font-semibold text-[#241303]">Pandit Vishnu Sharma</p>
          <p className="mt-2">Pooja and Marriage Booking | Fast WhatsApp Confirmation</p>
        </div>
      </footer>
    </>
  );
}


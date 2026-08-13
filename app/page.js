'use client';

import { useEffect, useMemo, useState } from 'react';

const navItems = ['Home', 'About', 'Services', 'Calculator', 'Consultancy', 'Testimonials', 'FAQ', 'Contact'];

const services = [
  {
    title: 'Name Numerology',
    amount: 1499,
    desc: 'Name vibration analysis with spelling correction suggestions for personal and professional growth.'
  },
  {
    title: 'Date of Birth Reading',
    amount: 999,
    desc: 'Life path, destiny number, personality traits, favorable dates, and yearly energy guidance.'
  },
  {
    title: 'Business Numerology',
    amount: 2999,
    desc: 'Brand name, launch date, mobile number, and office number compatibility for stronger results.'
  },
  {
    title: 'Relationship Compatibility',
    amount: 1999,
    desc: 'Couple number matching, emotional pattern reading, and practical timing guidance.'
  }
];

const testimonials = [
  {
    name: 'Ritika S.',
    text: 'The name correction report felt clear, practical, and easy to apply. Our client presentation loved the premium feel.'
  },
  {
    name: 'Aman G.',
    text: 'Booking was smooth and the consultation summary was very well structured. It felt professional from start to finish.'
  },
  {
    name: 'Meera K.',
    text: 'Niharika explained my life path and yearly cycle in simple words. The date suggestions were especially helpful.'
  }
];

const faqs = [
  {
    q: 'Is this website ready for a client demo?',
    a: 'Yes. It includes all requested sections, an interactive calculator, appointment slot selection, and a demo payment flow.'
  },
  {
    q: 'Can the payment be connected to a real gateway?',
    a: 'Yes. The demo payment panel can later be connected with Razorpay, Stripe, Cashfree, or another provider.'
  },
  {
    q: 'How many appointments are shown per date?',
    a: 'Each selected date shows only six consultation slots, matching the requested booking demo behavior.'
  },
  {
    q: 'What details are needed for numerology?',
    a: 'Usually full name and date of birth are enough for an introductory reading. Business readings may need brand details too.'
  }
];

const slotTimes = ['09:30 AM', '11:00 AM', '12:30 PM', '03:00 PM', '04:30 PM', '06:00 PM'];

const consultationPlans = [
  { name: 'Quick Clarity', duration: '20 min', amount: 699 },
  { name: 'Personal Reading', duration: '45 min', amount: 1499 },
  { name: 'Premium Guidance', duration: '75 min', amount: 2499 }
];

function reduceNumber(value) {
  let total = String(value)
    .replace(/\D/g, '')
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);

  while (total > 9 && total !== 11 && total !== 22 && total !== 33) {
    total = String(total)
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0);
  }

  return total || '';
}

function nameNumber(name) {
  const map = {
    a: 1, j: 1, s: 1,
    b: 2, k: 2, t: 2,
    c: 3, l: 3, u: 3,
    d: 4, m: 4, v: 4,
    e: 5, n: 5, w: 5,
    f: 6, o: 6, x: 6,
    g: 7, p: 7, y: 7,
    h: 8, q: 8, z: 8,
    i: 9, r: 9
  };

  const total = name
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
    .reduce((sum, letter) => sum + (map[letter] || 0), 0);

  return reduceNumber(total);
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
}

function toDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export default function Home() {
  const [fullName, setFullName] = useState('Niharika Astro');
  const [birthDate, setBirthDate] = useState('1998-08-15');
  const [minBookingDate, setMinBookingDate] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(slotTimes[1]);
  const [selectedPlan, setSelectedPlan] = useState(consultationPlans[1]);
  const [paymentDone, setPaymentDone] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    setMinBookingDate(toDateInputValue(today));
    setSelectedDate(toDateInputValue(tomorrow));
  }, []);

  const numbers = useMemo(() => {
    const cleanDate = birthDate.replaceAll('-', '');
    return {
      destiny: reduceNumber(cleanDate),
      name: nameNumber(fullName),
      day: reduceNumber(birthDate.slice(-2))
    };
  }, [birthDate, fullName]);

  const selectedDayName = useMemo(() => {
    if (!selectedDate) return 'Selected day';
    return new Date(`${selectedDate}T10:00:00`).toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
  }, [selectedDate]);

  const handlePayment = () => {
    setPaymentDone(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#eadfce] bg-[#fffaf2]/90 backdrop-blur-xl">
        <div className="mx-auto flex w-[94%] max-w-7xl items-center justify-between gap-3 py-4">
          <a
            href="#home"
            className="flex min-w-0 items-center gap-3"
            aria-label="Niharika Astro home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#211516] text-lg font-black text-[#f7c76b] shadow-soft">
              NA
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-lg font-bold text-[#211516] sm:text-xl">Niharika Astro</span>
              <span className="block text-xs font-bold uppercase text-[#8b5a2b]">Numerology Studio</span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 text-sm font-bold text-[#53433a] lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[#b35f3d]">
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#consultancy"
            className="hidden rounded-full bg-[#211516] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#3d292b] sm:inline-flex"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Demo
          </a>

          <button
            type="button"
            className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#dcc8b2] bg-white text-[#211516] lg:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          >
            <span className="grid w-5 gap-1.5">
              <span className={`h-0.5 rounded-full bg-current transition ${mobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 rounded-full bg-current transition ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 rounded-full bg-current transition ${mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav
            id="mobile-menu"
            className="mx-auto mb-4 grid w-[94%] gap-2 rounded-2xl border border-[#eadfce] bg-[#fffaf2] p-3 shadow-soft lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-xl px-4 py-3 text-sm font-bold text-[#53433a] transition hover:bg-[#f5efe6] hover:text-[#b35f3d]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="home">
        <section className="hero-band overflow-hidden pb-12 pt-10 md:pb-20 md:pt-16">
          <div className="mx-auto grid w-[94%] max-w-7xl items-center gap-10 lg:grid-cols-[1.03fr_0.97fr]">
            <div className="reveal">
              <p className="section-kicker">Personal Numerology | Name Energy | Appointment Booking</p>
              <h1 className="mt-4 font-display text-5xl font-bold leading-[1.04] text-[#211516] md:text-7xl">
                Niharika Astro
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5d4a3f]">
                A premium numerology consultation website with elegant storytelling, instant number
                insights, six daily booking slots, and a polished demo payment experience.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#calculator" className="btn-primary">
                  Try Calculator
                </a>
                <a href="#consultancy" className="btn-secondary">
                  Book Appointment
                </a>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {['12+ Years Study', '4.9 Client Rating', 'Online Consults'].map((item) => (
                  <div key={item} className="metric-tile">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-1">
              <div className="astro-visual" aria-label="Decorative numerology chart">
                <div className="astro-ring ring-one" />
                <div className="astro-ring ring-two" />
                <div className="astro-grid">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                    <span key={number}>{number}</span>
                  ))}
                </div>
                <div className="hero-note">
                  <span className="text-xs font-bold uppercase text-[#a35a3b]">Today&apos;s Focus</span>
                  <strong className="mt-1 block text-3xl text-[#211516]">Number 6</strong>
                  <span className="mt-2 block text-sm text-[#68544a]">Harmony, care, beauty, home energy.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-pad">
          <div className="mx-auto grid w-[94%] max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="section-kicker">About</p>
              <h2 className="section-title">Guidance that feels calm, modern, and trustworthy.</h2>
            </div>
            <div className="content-panel">
              <p>
                Niharika Astro helps people understand their personal numbers, name vibrations, life
                path patterns, and favorable timing. The design is built for a professional client demo:
                warm, premium, mobile-ready, and focused on conversion.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="mini-stat"><strong>1:1</strong><span>Private sessions</span></div>
                <div className="mini-stat"><strong>6</strong><span>Slots per date</span></div>
                <div className="mini-stat"><strong>3</strong><span>Consult plans</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-pad bg-[#f5efe6]">
          <div className="mx-auto w-[94%] max-w-7xl">
            <div className="section-head">
              <div>
                <p className="section-kicker">Services</p>
                <h2 className="section-title">Numerology services for every important decision.</h2>
              </div>
              <a href="#consultancy" className="btn-secondary">Reserve a Slot</a>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="service-mark">{service.title.slice(0, 2)}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <strong>{formatCurrency(service.amount)}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="calculator" className="section-pad">
          <div className="mx-auto grid w-[94%] max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <p className="section-kicker">Calculator</p>
              <h2 className="section-title">Instant numerology preview for visitors.</h2>
              <p className="section-copy">
                This interactive demo gives users a quick taste of the consultation experience and
                naturally leads them toward booking.
              </p>
            </div>

            <div className="tool-panel">
              <label>
                Full Name
                <input value={fullName} onChange={(event) => setFullName(event.target.value)} />
              </label>
              <label>
                Date of Birth
                <input type="date" value={birthDate} onChange={(event) => setBirthDate(event.target.value)} />
              </label>
              <div className="result-grid">
                <div><span>Name Number</span><strong>{numbers.name || '-'}</strong></div>
                <div><span>Destiny Number</span><strong>{numbers.destiny || '-'}</strong></div>
                <div><span>Birth Day</span><strong>{numbers.day || '-'}</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section id="consultancy" className="section-pad bg-[#211516] text-white">
          <div className="mx-auto w-[94%] max-w-7xl">
            <div className="section-head">
              <div>
                <p className="section-kicker light">Consultancy</p>
                <h2 className="section-title light">Book appointment with demo payment.</h2>
              </div>
              <p className="max-w-xl text-[#e7d7ca]">
                Select a plan, choose a date, pick from exactly six available slots, and complete the
                simulated payment confirmation.
              </p>
            </div>

            <div className="booking-shell mt-8">
              <div className="booking-panel">
                <h3>Select Consultation</h3>
                <div className="plan-list">
                  {consultationPlans.map((plan) => (
                    <button
                      key={plan.name}
                      type="button"
                      className={selectedPlan.name === plan.name ? 'plan active' : 'plan'}
                      onClick={() => {
                        setSelectedPlan(plan);
                        setPaymentDone(false);
                      }}
                    >
                      <span><strong>{plan.name}</strong><small>{plan.duration}</small></span>
                      <b>{formatCurrency(plan.amount)}</b>
                    </button>
                  ))}
                </div>

                <label className="date-field">
                  Select Date
                  <input
                    type="date"
                    value={selectedDate}
                    min={minBookingDate}
                    onChange={(event) => {
                      setSelectedDate(event.target.value);
                      setSelectedSlot(slotTimes[0]);
                      setPaymentDone(false);
                    }}
                  />
                </label>
              </div>

              <div className="booking-panel">
                <div className="slot-head">
                  <h3>{selectedDayName}</h3>
                  <span>6 slots only</span>
                </div>
                <div className="slot-grid">
                  {slotTimes.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      className={selectedSlot === slot ? 'slot active' : 'slot'}
                      onClick={() => {
                        setSelectedSlot(slot);
                        setPaymentDone(false);
                      }}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="payment-panel">
                <p className="section-kicker light">Payment Demo</p>
                <h3>{selectedPlan.name}</h3>
                <div className="summary-row"><span>Date</span><strong>{selectedDayName}</strong></div>
                <div className="summary-row"><span>Time</span><strong>{selectedSlot}</strong></div>
                <div className="summary-row"><span>Amount</span><strong>{formatCurrency(selectedPlan.amount)}</strong></div>
                <button type="button" className="pay-button" onClick={handlePayment}>
                  Pay Demo Amount
                </button>
                {paymentDone && (
                  <div className="success-box">
                    Payment successful. Appointment request is confirmed for demo.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section-pad">
          <div className="mx-auto w-[94%] max-w-7xl">
            <p className="section-kicker">Testimonials</p>
            <h2 className="section-title">What clients say after their readings.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.name} className="testimonial-card">
                  <p>{item.text}</p>
                  <strong>{item.name}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-pad bg-[#f5efe6]">
          <div className="mx-auto grid w-[94%] max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-kicker">FAQ</p>
              <h2 className="section-title">Answers for the client demo.</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad">
          <div className="mx-auto grid w-[94%] max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="section-title">Ready for calls, WhatsApp, and enquiry forms.</h2>
              <p className="section-copy">
                Replace the demo details with the client&apos;s real phone number, email, city, and
                payment gateway credentials when going live.
              </p>
            </div>
            <form className="contact-form">
              <input placeholder="Your name" />
              <input placeholder="Phone number" />
              <input placeholder="Email address" />
              <textarea placeholder="Tell us what guidance you need" rows="4" />
              <button type="button" className="btn-primary">Send Enquiry</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="mx-auto flex w-[94%] max-w-7xl flex-col gap-3 py-8 text-sm text-[#68544a] md:flex-row md:items-center md:justify-between">
          <strong className="font-display text-xl text-[#211516]">Niharika Astro</strong>
          <span>Numerology consultation demo website with booking and payment preview.</span>
        </div>
      </footer>
    </>
  );
}

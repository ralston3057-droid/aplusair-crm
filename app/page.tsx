import Link from 'next/link';
import { CreditCard, ShieldCheck, Sparkles, Star, Wrench } from 'lucide-react';

const serviceCards = [
  { title: 'AC Repair', desc: 'Fast diagnostics and same-day cooling restoration by certified HVAC technicians.' },
  { title: 'Heating Service', desc: 'Furnace and heat-pump tune-ups, repairs, and reliability checks before cold fronts.' },
  { title: 'System Install', desc: 'High-efficiency replacements with financing options and comfort-based load planning.' }
];

const testimonials = [
  { name: 'Rachel M.', city: 'Frisco', text: 'A-Plus Air responded in under an hour and had our AC running before dinner. Professional and honest.' },
  { name: 'Daniel T.', city: 'Plano', text: 'Clean install, clear pricing, and great communication from estimate to final walkthrough.' },
  { name: 'Olivia G.', city: 'McKinney', text: 'The membership plan is worth it. Priority scheduling saved us during peak summer heat.' }
];

export default function HomePage() {
  return (
    <main>
      <section className='relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-900'>
        <div className='container-app grid min-h-[78vh] items-center gap-10 py-14 md:grid-cols-2'>
          <div className='animate-float-up'>
            <p className='mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-sky-700'><Sparkles size={14}/> Trusted HVAC Experts in North Texas</p>
            <h1 className='text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white'>Premium HVAC Service + Modern Customer Experience</h1>
            <p className='mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300'>A-Plus Air brings high-end service operations to Allen, McKinney, Plano, Frisco, and Dallas with seamless booking, financing, memberships, and CRM-powered follow-up.</p>
            <div className='mt-7 flex flex-wrap gap-3'>
              <Link href='/service-request' className='btn-primary'>Book Service</Link>
              <Link href='/estimate' className='btn-secondary'>Request Estimate</Link>
            </div>
            <div className='mt-7 grid grid-cols-3 gap-3'>
              {['24/7 Response', 'Licensed Techs', 'Financing Ready'].map((item) => (
                <div key={item} className='rounded-xl border border-sky-100 bg-white p-3 text-center text-xs font-semibold text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200'>{item}</div>
              ))}
            </div>
          </div>
          <div className='animate-float-up rounded-3xl border border-sky-100 bg-white p-6 shadow-xl shadow-sky-100/70 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none'>
            <h2 className='text-lg font-bold text-slate-900 dark:text-white'>Instant Service Request</h2>
            <p className='mb-4 mt-1 text-sm text-slate-500'>SMS-ready lead capture for quick dispatch.</p>
            <form className='space-y-3'>
              <input className='w-full rounded-xl border border-slate-200 p-3 text-sm bg-transparent dark:border-slate-700' placeholder='Full name' />
              <input className='w-full rounded-xl border border-slate-200 p-3 text-sm bg-transparent dark:border-slate-700' placeholder='Phone number' />
              <input className='w-full rounded-xl border border-slate-200 p-3 text-sm bg-transparent dark:border-slate-700' placeholder='Email address' />
              <textarea className='w-full rounded-xl border border-slate-200 p-3 text-sm bg-transparent dark:border-slate-700' rows={3} placeholder='Describe issue...' />
              <button className='btn-primary w-full'>Submit & Get Callback</button>
            </form>
          </div>
        </div>
      </section>

      <section className='container-app py-16'>
        <div className='mb-8 flex items-end justify-between gap-4'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-wide text-sky-700'>Core Services</p>
            <h2 className='mt-2 text-3xl font-bold tracking-tight'>Built for Comfort, Efficiency, and Speed</h2>
          </div>
        </div>
        <div className='grid gap-5 md:grid-cols-3'>
          {serviceCards.map((card) => (
            <article key={card.title} className='card transition duration-300 hover:-translate-y-1 hover:shadow-lg'>
              <Wrench className='mb-3 text-sky-600' />
              <h3 className='text-xl font-semibold'>{card.title}</h3>
              <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>{card.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='bg-sky-900 py-16 text-white'>
        <div className='container-app grid gap-5 md:grid-cols-2'>
          <div className='rounded-2xl border border-white/20 bg-white/10 p-7'>
            <CreditCard className='mb-3' />
            <h3 className='text-2xl font-bold'>Flexible Financing</h3>
            <p className='mt-2 text-sm text-sky-100'>Offer monthly plans, fast approvals, and seasonal promotional terms to help homeowners upgrade without delay.</p>
            <Link href='/financing' className='mt-4 inline-block rounded-lg bg-white px-4 py-2 text-sm font-semibold text-sky-800'>Explore Financing</Link>
          </div>
          <div className='rounded-2xl border border-white/20 bg-white/10 p-7'>
            <ShieldCheck className='mb-3' />
            <h3 className='text-2xl font-bold'>Maintenance Membership</h3>
            <p className='mt-2 text-sm text-sky-100'>Increase reliability with bi-annual tune-ups, priority dispatch, and exclusive member savings.</p>
            <Link href='/membership' className='mt-4 inline-block rounded-lg bg-white px-4 py-2 text-sm font-semibold text-sky-800'>View Membership</Link>
          </div>
        </div>
      </section>

      <section className='container-app py-16'>
        <div className='mb-8 text-center'>
          <p className='text-sm font-semibold uppercase tracking-wide text-sky-700'>Testimonials</p>
          <h2 className='mt-2 text-3xl font-bold'>What Homeowners Say</h2>
        </div>
        <div className='grid gap-5 md:grid-cols-3'>
          {testimonials.map((t) => (
            <blockquote key={t.name} className='card'>
              <div className='mb-3 flex gap-1 text-amber-400'>{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill='currentColor' />)}</div>
              <p className='text-sm text-slate-700 dark:text-slate-200'>“{t.text}”</p>
              <footer className='mt-4 text-sm font-semibold'>{t.name} • <span className='font-normal text-slate-500'>{t.city}</span></footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className='container-app pb-20'>
        <div className='rounded-3xl bg-gradient-to-r from-sky-600 to-blue-700 p-8 text-white md:flex md:items-center md:justify-between'>
          <div>
            <h3 className='text-2xl font-bold'>Ready to schedule with A-Plus Air?</h3>
            <p className='mt-2 text-sky-100'>Modern booking, faster communication, and dependable HVAC care.</p>
          </div>
          <div className='mt-4 flex gap-3 md:mt-0'>
            <Link href='/service-request' className='rounded-xl bg-white px-5 py-3 text-sm font-semibold text-sky-800'>Request Service</Link>
            <Link href='/crm' className='rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold'>View CRM</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

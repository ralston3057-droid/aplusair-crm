import Link from 'next/link';

const kpis = [
  { label: 'Open Leads', value: '128' },
  { label: 'Booked Jobs', value: '44' },
  { label: 'Avg Response', value: '6 min' }
];

export default function HomePage() {
  return (
    <main className='mx-auto max-w-7xl space-y-10 p-6'>
      <section className='card grid gap-6 md:grid-cols-2'>
        <div>
          <h1 className='text-4xl font-bold'>Modern HVAC CRM + Booking for A-Plus Air</h1>
          <p className='mt-4 text-slate-600 dark:text-slate-300'>Streamline lead capture, scheduling, financing, and memberships with a SaaS-style platform.</p>
          <div className='mt-6 flex gap-3'>
            <Link href='/service-request' className='rounded-xl bg-brand-500 px-5 py-3 text-white'>Request Service</Link>
            <Link href='/estimate' className='rounded-xl border px-5 py-3'>Get Estimate</Link>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-3'>
          {kpis.map((k) => <div key={k.label} className='rounded-xl bg-slate-100 p-4 text-center dark:bg-slate-800'><p className='text-2xl font-bold'>{k.value}</p><p className='text-xs'>{k.label}</p></div>)}
        </div>
      </section>
      <section className='grid gap-6 md:grid-cols-2'>
        <ContactForm />
        <LeadCapture />
      </section>
    </main>
  );
}

function ContactForm() {
  return (
    <form className='card space-y-3'>
      <h2 className='text-2xl font-semibold'>Customer Contact Form</h2>
      <input className='w-full rounded-lg border p-3 bg-transparent' placeholder='Full Name' />
      <input className='w-full rounded-lg border p-3 bg-transparent' placeholder='Phone (SMS-ready)' />
      <input className='w-full rounded-lg border p-3 bg-transparent' placeholder='Email' />
      <textarea className='w-full rounded-lg border p-3 bg-transparent' placeholder='Message / issue details' rows={4}/>
      <button className='rounded-xl bg-brand-500 px-4 py-3 text-white'>Submit Lead</button>
    </form>
  );
}

function LeadCapture() {
  return (
    <div className='card'>
      <h2 className='text-2xl font-semibold'>SMS Lead Capture Workflow</h2>
      <ol className='mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300'>
        <li>Inbound form creates lead in Supabase leads table.</li>
        <li>Auto-tag by service area and urgency.</li>
        <li>Dispatch SMS confirmation and booking link.</li>
        <li>Move lead through estimate to won/lost pipeline.</li>
      </ol>
    </div>
  );
}

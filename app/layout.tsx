import './globals.css';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/crm', label: 'CRM' },
  { href: '/financing', label: 'Financing' },
  { href: '/membership', label: 'Membership' },
  { href: '/admin', label: 'Admin' }
] as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <header className='sticky top-0 z-50 border-b border-sky-100/80 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90'>
          <div className='container-app flex h-20 items-center justify-between gap-4'>
            <div>
              <p className='text-base font-bold tracking-tight text-sky-900 dark:text-sky-300'>A-Plus Air Conditioning, Heating & Refrigeration</p>
              <p className='text-xs text-slate-500'>Allen • McKinney • Plano • Frisco • Dallas, TX</p>
            </div>
            <nav className='hidden items-center gap-5 md:flex'>
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className='text-sm font-medium text-slate-700 transition hover:text-sky-700 dark:text-slate-300 dark:hover:text-sky-300'>
                  {item.label}
                </Link>
              ))}
              <Link href='/login' className='btn-secondary px-4 py-2'>Login</Link>
            </nav>
            <div className='flex items-center gap-2'>
              <ThemeToggle />
            </div>
          </div>
        </header>
        {children}
        <a
          href='tel:9452375986'
          className='fixed bottom-5 right-5 z-50 rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-sky-300/50 transition hover:bg-sky-700'
        >
          Call Now • 945-237-5986
        </a>
      </body>
    </html>
  );
}

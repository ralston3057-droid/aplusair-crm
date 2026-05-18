import './globals.css';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <header className='sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80'>
          <div className='mx-auto flex max-w-7xl items-center justify-between p-4'>
            <div>
              <p className='font-semibold'>A-Plus Air Conditioning</p>
              <p className='text-xs text-slate-500'>Allen • McKinney • Plano • Frisco • Dallas</p>
            </div>
            <nav className='hidden gap-4 md:flex text-sm'>
              <Link href='/'>Home</Link><Link href='/crm'>CRM</Link><Link href='/financing'>Financing</Link><Link href='/membership'>Membership</Link><Link href='/admin'>Admin</Link>
            </nav>
            <ThemeToggle />
          </div>
        </header>
        {children}
        <a href='tel:9452375986' className='fixed bottom-5 right-5 rounded-full bg-brand-500 px-5 py-3 font-semibold text-white shadow-lg'>Call 945-237-5986</a>
      </body>
    </html>
  );
}

export default function LoginPage() {
  return <main className='mx-auto grid min-h-[70vh] max-w-md place-items-center p-6'><form className='card w-full space-y-3'><h1 className='text-2xl font-bold'>Authentication Login</h1><input className='w-full rounded border p-3 bg-transparent' placeholder='Email'/><input className='w-full rounded border p-3 bg-transparent' placeholder='Password' type='password'/><button className='w-full rounded bg-brand-500 px-4 py-3 text-white'>Sign In</button></form></main>;
}

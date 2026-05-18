const leads = [
  ['L-1001', 'Jenny Parker', 'Plano', 'System Replacement', 'Qualified'],
  ['L-1002', 'Carlos Diaz', 'Frisco', 'No Cooling', 'Scheduled'],
  ['L-1003', 'Morgan Lee', 'Allen', 'Maintenance', 'New']
];

export default function CRMPage() {
  return <main className='mx-auto max-w-7xl p-6'><div className='card'><h1 className='text-3xl font-bold'>CRM Dashboard</h1><table className='mt-4 w-full text-sm'><thead><tr className='text-left'><th>ID</th><th>Name</th><th>City</th><th>Need</th><th>Status</th></tr></thead><tbody>{leads.map((r)=><tr key={r[0]} className='border-t'><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td>{r[4]}</td></tr>)}</tbody></table></div></main>;
}

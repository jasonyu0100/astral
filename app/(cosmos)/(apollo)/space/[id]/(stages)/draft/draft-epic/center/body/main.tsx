export function DraftBody({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: '100%', height: '100%' }} className='flex flex-row'>
      {children}
    </div>
  );
}

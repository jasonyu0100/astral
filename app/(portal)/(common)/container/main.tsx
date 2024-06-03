export function PortalContainer({ children }: { children?: React.ReactNode }) {
  return (
    <div className='aspect-[13/16] h-full bg-white shadow-2xl'>
      {children}
    </div>
  );
}

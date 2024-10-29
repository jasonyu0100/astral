export function PortalContainer({ children }: { children?: React.ReactNode }) {
  return (
    <div className='min-w-[400px] flex-shrink-0 bg-white shadow-2xl md:aspect-[13/16]'>
      {children}
    </div>
  );
}

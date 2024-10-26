export function PortalContainer({ children }: { children?: React.ReactNode }) {
  return (
    <div className='aspect-[13/16] min-w-[400px] flex-shrink-0 bg-white shadow-2xl'>
      {children}
    </div>
  );
}

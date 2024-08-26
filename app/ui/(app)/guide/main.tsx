export function GuideController({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className='absolute right-[-350px] top-0 h-[700px] w-[350px] overflow-auto'
      style={{ height: '100%' }}
    >
      {children}
    </div>
  );
}

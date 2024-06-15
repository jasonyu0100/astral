export function Footer({ children }: { children?: React.ReactNode }) {
  return (
    <div className='mt-auto flex h-[80px] w-full flex-shrink-0 flex-row items-center justify-between'>
      {children}
    </div>
  );
}

export function AbsoluteHolder({ children }: { children: React.ReactNode }) {
  return <div className='absolute left-0 top-0 h-full w-full'>{children}</div>;
}

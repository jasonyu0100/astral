export function SearchImageLabel({ children }: { children?: React.ReactNode }) {
  return (
    <label className='mb-1 w-full text-xs font-bold text-slate-400'>
      {children}
    </label>
  );
}

export function MomentDescription({ children }: { children: React.ReactNode }) {
  return (
    <span className='flex w-[500px] flex-col space-y-[1rem] p-[1rem] pb-[3rem]'>
      {children}
    </span>
  );
}

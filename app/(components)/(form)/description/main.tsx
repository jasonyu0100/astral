export function FormDescription({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full'>
      <p className='px-[1rem] pb-[2rem] font-bold'>{children}</p>
    </div>
  );
}

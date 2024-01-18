export function FormDescription({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full'>
      <p className='font-bold px-[1rem] pb-[2rem]'>{children}</p>
    </div>
  );
}

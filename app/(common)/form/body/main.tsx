export function FormBody({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='w-full flex flex-col space-y-[2rem] overflow-auto py-[1rem] pr-[1rem]'
      style={{ height: '100%' }}
    >
      {children}
    </div>
  );
}

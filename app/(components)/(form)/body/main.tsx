export function FormBody({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className='flex w-full flex-col overflow-auto space-y-[1rem] py-[1rem]'
      style={{ height: '100%' }}
    >
      {children}
    </div>
  );
}

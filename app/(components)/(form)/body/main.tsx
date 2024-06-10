export function FormBody({ children }: { children?: React.ReactNode }) {
  return (
    <div className='w-full overflow-auto p-[1rem]'>
      <div
        className='flex w-full flex-col space-y-[1rem] py-[1rem]'
        style={{ height: '100%' }}
      >
        {children}
      </div>
    </div>
  );
}

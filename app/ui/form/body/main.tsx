export function FormBody({ children }: { children?: React.ReactNode }) {
  return (
    <div className='h-full w-full overflow-auto'>
      <div className='h-full w-full pr-[1rem]'>
        <div className='flex w-full flex-col space-y-[1rem] py-[1rem]'>
          {children}
        </div>
      </div>
    </div>
  );
}

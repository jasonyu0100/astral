export function FormBody({ children }: { children?: React.ReactNode }) {
  return (
    <div className='h-full w-full overflow-auto p-[1rem] pl-[1rem]'>
      <div className='flex w-full flex-col space-y-[1rem]'>{children}</div>
    </div>
  );
}

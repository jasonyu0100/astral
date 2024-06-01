export function GuideBody({ children }: { children?: React.ReactNode }) {
  return (
    <div className='flex w-full flex-col space-y-[50px] overflow-auto p-[3rem]'>
      {children}
    </div>
  );
}

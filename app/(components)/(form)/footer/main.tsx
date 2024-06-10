export function FormFooter({ children }: { children?: React.ReactNode }) {
  return (
    <div className='mt-auto flex w-full flex-col space-y-[1rem] flex-shrink-0 pt-[1rem]'>
      {children}
    </div>
  );
}

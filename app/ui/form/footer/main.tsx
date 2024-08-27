export function FormFooter({ children }: { children?: React.ReactNode }) {
  return (
    <div className='mt-auto flex w-full flex-shrink-0 flex-col space-y-[1rem] pt-[1rem]'>
      {children}
    </div>
  );
}

export function ResourcesFooter({ children }: { children?: React.ReactNode }) {
  return (
    <div className='flex w-full flex-shrink-0 flex-row items-center justify-between mt-auto h-[80px]'>
      {children}
    </div>
  );
}

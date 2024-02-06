export function SpacesHeaderText({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-[200px] flex-col justify-center space-y-[1rem] px-[40px] py-[40px]'>
      {children}
    </div>
  );
}

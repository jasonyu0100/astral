export function TabsContainer({ children }: { children?: React.ReactNode }) {
  return (
    <div className='flex w-full flex-row justify-between p-[1rem] px-[2rem]'>
      {children}
    </div>
  );
}

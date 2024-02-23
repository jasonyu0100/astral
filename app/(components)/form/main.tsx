export function FormContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-full w-full flex-col items-center space-y-[2rem]'>
      {children}
    </div>
  );
}

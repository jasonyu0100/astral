export function FormContainer({ children }: { children?: React.ReactNode }) {
  return (
    <div className='flex h-full w-full flex-col items-center'>{children}</div>
  );
}

export function GenerateTab({ children }: { children?: React.ReactNode }) {
  return (
    <div className='flex w-[9rem] flex-col items-start pt-1'>{children}</div>
  );
}

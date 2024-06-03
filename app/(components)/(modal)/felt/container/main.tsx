export function FeltModalContainer({ children }: { children?: React.ReactNode }) {
  return (
    <div className='aspect-[18/12] h-3/4 bg-green-600 p-[30px] rounded-full border-[1rem] border-black'>{children}</div>
  );
}

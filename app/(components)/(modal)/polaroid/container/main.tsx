export function PolaroidModalContainer({ children }: { children?: React.ReactNode }) {
  return (
    <div className='aspect-[13/16] h-3/4 bg-white p-[30px]'>{children}</div>
  );
}

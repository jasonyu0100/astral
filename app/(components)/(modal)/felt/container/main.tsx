export function FeltModalContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='aspect-[18/12] h-4/5 rounded-full border-[0.2rem] border-white bg-green-600'>
      <div className='h-full w-full rounded-full border-[1rem] border-black bg-green-600 p-[30px]'>
        {children}
      </div>
    </div>
  );
}

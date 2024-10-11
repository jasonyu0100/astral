export function CustomisableModalHalfContents({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className='flex h-1/2 w-full flex-row items-center justify-center space-x-[2rem] p-[2rem]'
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {children}
    </div>
  );
}

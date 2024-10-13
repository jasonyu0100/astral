export function CustomisableModalContents({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className='flex h-3/4 w-full flex-row items-center justify-center space-x-[2rem] p-[2rem]'
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {children}
    </div>
  );
}

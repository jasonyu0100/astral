export function PolaroidModalContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div
      className='h-3/4 bg-white p-[3rem] md:aspect-[13/16]'
      id={PolaroidModalContainer.name}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {children}
    </div>
  );
}

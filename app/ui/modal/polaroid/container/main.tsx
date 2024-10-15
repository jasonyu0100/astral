export function PolaroidModalContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div
      className='aspect-[13/16] h-3/4 bg-white p-[3rem]'
      id={PolaroidModalContainer.name}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {children}
    </div>
  );
}

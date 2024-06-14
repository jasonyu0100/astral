export function SpaceVerseDescriptionBody({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <span className='w-full text-base font-normal leading-normal text-white'>
      {children}
    </span>
  );
}

export function SpaceJourneyColumn({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-full flex-col space-y-[1rem] overflow-auto'>
      {children}
    </div>
  );
}

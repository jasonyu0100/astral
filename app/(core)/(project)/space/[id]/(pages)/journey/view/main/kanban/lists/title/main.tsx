export function SpaceJourneyKanbanListTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      <p className='text-2xl font-bold text-slate-300'>{children}</p>
    </div>
  );
}

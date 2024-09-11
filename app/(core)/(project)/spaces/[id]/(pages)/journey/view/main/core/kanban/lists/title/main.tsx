export function SpacesJourneyKanbanListTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      <p className='text-2xl font-bold text-slate-500'>{children}</p>
    </div>
  );
}

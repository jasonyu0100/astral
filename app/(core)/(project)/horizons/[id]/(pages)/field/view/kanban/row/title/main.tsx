export function SpacesJourneyKanbanListTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex w-full flex-row items-center'>
      <p className='text-md font-bold text-slate-500'>{children}</p>
    </div>
  );
}

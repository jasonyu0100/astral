export function SpacesBoardKanbanListTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex w-full flex-row items-center'>
      <p className='font-extraBold text-lg text-slate-300'>{children}</p>
    </div>
  );
}

export function SpacesJourneyColumnHeadingIdeas({
  title,
  length,
  color,
}: {
  title: string;
  length: number;
  color: string;
}) {
  return (
    <div className='flex w-full flex-row items-center justify-between space-x-[1rem]'>
      <p className='font-bold text-slate-300'>{title}</p>
      <div
        className={`${color} flex h-[2rem] w-[2rem] items-center justify-center rounded-full`}
      >
        <p className='font-bold text-slate-300'>{length}</p>
      </div>
    </div>
  );
}

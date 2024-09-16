export enum KarmaState {
  Full = '🌕',
  Waxing = '🌖',
  Half = '🌗',
  Waning = '🌘',
  New = '🌑',
}

export function HorizonHorizonSidebarItemHeader({
  title,
  karma,
}: {
  title: string;
  karma: KarmaState;
}) {
  return (
    <div className='flex w-full space-x-[1rem]'>
      <span className='text-2xl'>{karma}</span>
      <p className='text-md ml-auto mt-[3px] flex-grow text-right font-light text-slate-300'>
        {title}
      </p>
    </div>
  );
}

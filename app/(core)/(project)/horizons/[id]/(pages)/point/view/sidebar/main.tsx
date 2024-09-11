import { borderFx, glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';

export function HorizonPointSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonPointSidebar.name}
      sizeFx='w-[360px] h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-r']}
    >
      <p className='text-lg font-bold text-slate-300'>Upcoming</p>
      <p className='text-lg font-bold text-slate-300'>
        🌑 - Member just sent brain-dead meme to their organization - visible in
        1hr - negative karma
      </p>
      <p className='text-lg font-bold text-slate-300'>
        🌒 - Member just spread a conspiracy - visible in 1hr ago
      </p>
      <p className='text-lg font-bold text-slate-300'>
        🌕 - Member just spread a conspiracy
      </p>
    </GlassAreaContainer>
  );
}

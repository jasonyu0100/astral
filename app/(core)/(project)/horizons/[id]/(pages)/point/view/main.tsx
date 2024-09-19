import { borderFx, glassFx, roundedFx } from '@/style/data';
import { ImageBackground } from '@/ui/background/img/main';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { HorizonPointSidebar } from './sidebar/main';

export function HorizonPointView() {
  return (
    <GlassAreaContainer
      name={HorizonPointView.name}
      sizeFx='flex-grow h-full'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      <HorizonPointSidebar />
      <div className='relative flex w-full flex-grow'>
        <ImageBackground />
      </div>
    </GlassAreaContainer>
  );
}

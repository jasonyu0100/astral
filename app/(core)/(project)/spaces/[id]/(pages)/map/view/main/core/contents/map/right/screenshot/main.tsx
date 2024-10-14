import { ContextForSpacesMap } from '@/(core)/(project)/spaces/[id]/(pages)/map/controller/main';
import { AstralCameraIcon } from '@/icons/camera/main';
import { useContext } from 'react';

export function SpacesMapScreenshot() {
  const {
    actions: { takeScreenshot },
  } = useContext(ContextForSpacesMap);
  return (
    <div className='absolute right-[2rem] top-[0rem] z-30 flex h-full w-[4rem] flex-col items-center justify-center'>
      <AstralCameraIcon onClick={takeScreenshot} />
    </div>
  );
}

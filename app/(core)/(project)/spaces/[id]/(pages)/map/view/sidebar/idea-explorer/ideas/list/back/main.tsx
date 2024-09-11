import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';
import {
  ContextForSpacesMap,
  SpacesMapSidebarMode,
} from '../../../../../../controller/main';

export function SpacesMapSidebarIdeasBack() {
  const {
    actions: { updateSidebarMode },
  } = useContext(ContextForSpacesMap);

  return (
    <GlassWindowFrame className='w-full flex-shrink-0 pb-[0.5rem]'>
      <GlassWindowContents className='flex h-full w-full items-center space-x-[1rem]'>
        <p className='cursor-pointer text-sm font-bold text-slate-500'>
          <span
            onClick={() => {
              updateSidebarMode(SpacesMapSidebarMode.SCENES);
            }}
          >
            Back to Scenes
          </span>
        </p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}

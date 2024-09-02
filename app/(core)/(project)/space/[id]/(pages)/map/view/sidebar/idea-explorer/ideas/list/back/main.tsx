import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapSidebarListMode,
} from '../../../../../../controller/map/main';

export function SpaceMapSidebarIdeasBack() {
  const {
    actions: { updateListSceneMode },
  } = useContext(ContextForSpaceMap);

  return (
    <GlassWindowFrame className='w-full flex-shrink-0 pb-[0.5rem]'>
      <GlassWindowContents className='flex h-full w-full items-center space-x-[1rem]'>
        <p className='cursor-pointer text-sm font-bold text-slate-500'>
          <span
            onClick={() => {
              updateListSceneMode(SpaceMapSidebarListMode.SCENES);
            }}
          >
            Back to Scenes
          </span>
        </p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}

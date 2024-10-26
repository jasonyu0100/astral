import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { useContext } from 'react';
import {
  ContextForSpacesView,
  SpacesViewSidebarMode,
} from '../../../../../../../controller/main';

export function SpacesViewSidebarIdeasBack() {
  const {
    actions: { updateSidebarMode },
  } = useContext(ContextForSpacesView);

  return (
    <GlassWindowFrame className='w-full flex-shrink-0 pb-[0.5rem]'>
      <GlassWindowContents className='flex h-full w-full items-center space-x-[1rem]'>
        <p className='cursor-pointer text-sm font-bold text-slate-500'>
          <span
            onClick={() => {
              updateSidebarMode(SpacesViewSidebarMode.SCENES);
            }}
          >
            Back to Scenes
          </span>
        </p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}

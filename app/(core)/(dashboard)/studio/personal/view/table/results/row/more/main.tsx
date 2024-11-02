import { liveMap } from '@/(core)/(public)/live/[id]/map';
import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralDeleteIcon } from '@/icons/delete/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { glassFx } from '@/style/data';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';
import { useContext } from 'react';

export function StudioPersonalRowMore() {
  const spaceListController = useContext(ContextForSpaceList);
  const spaceObj = useContext(ContextForSpaceObj);

  return (
    <Popover>
      <PopoverTrigger>
        <AstralMoreVertIcon />
      </PopoverTrigger>
      <PopoverContent>
        <GlassWindowFrame className='p-[1rem]'>
          <GlassWindowContents className='flex flex-col space-y-[1rem]'>
            <div
              className='flex cursor-pointer flex-row space-x-[1rem]'
              onClick={() => {
                navigator.clipboard.writeText(
                  `astral.fun${liveMap.live.link(spaceListController.state.objId)}`,
                );
                window.open(liveMap.live.link(spaceListController.state.objId));
              }}
            >
              <AstralLinkIcon />
              <p className='font-bold text-slate-300'>View Live</p>
            </div>
            <HorizontalDivider />
            <div
              className='flex cursor-pointer flex-row space-x-[1rem]'
              onClick={() => {
                spaceListController.actions.deleteActions.delete(spaceObj.id);
              }}
            >
              <AstralDeleteIcon />
              <p className='font-bold text-slate-300'>Delete Space</p>
            </div>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </PopoverContent>
    </Popover>
  );
}

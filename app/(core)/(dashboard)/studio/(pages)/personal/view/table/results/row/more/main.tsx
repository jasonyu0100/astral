import { ContextForSpaceList } from '@/(server)/controller/space/list';
import { ContextForSpaceObj } from '@/(server)/model/space/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralDeleteIcon } from '@/icons/delete/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { glassFx, roundedFx } from '@/style/data';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';
import { useContext } from 'react';

export function StudioSpacesRowMore() {
  const spaceListController = useContext(ContextForSpaceList);
  const spaceObj = useContext(ContextForSpaceObj);

  return (
    <Popover>
      <PopoverTrigger>
        <AstralMoreVertIcon />
      </PopoverTrigger>
      <PopoverContent>
        <GlassWindowFrame className='p-[1rem]' roundedFx={roundedFx.rounded}>
          <GlassWindowContents>
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

import { ContextForSpaceList } from '@/(server)/controller/space/list';
import { ContextForSpaceObj } from '@/(server)/model/space/main';
import { AstralDeleteIcon } from '@/icons/delete/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';
import { useContext } from 'react';
import { StudioSpacesRowCategory } from './category/main';
import { StudioSpacesRowInfo } from './info/main';
import { StudioSpacesRowNumber } from './number/main';
import { StudioSpacesRowDays } from './stat/day/main';
import { StudioSpacesRowIdeas } from './stat/ideas/main';
import { StudioSpacesRowLogs } from './stat/logs/main';
import { StudioSpacesRowPosts } from './stat/posts/main';

export function StudioSpacesRow() {
  const spaceListController = useContext(ContextForSpaceList);
  const spaceObj = useContext(ContextForSpaceObj);
  return (
    <>
      <div className='grid w-full grid-cols-8 py-[2rem]'>
        <StudioSpacesRowNumber />
        <StudioSpacesRowInfo />
        <StudioSpacesRowCategory />
        <div></div>
        <div className='col-span-2 grid grid-cols-4'>
          <StudioSpacesRowDays />
          <StudioSpacesRowIdeas />
          <StudioSpacesRowLogs />
          <StudioSpacesRowPosts />
        </div>
        <div className='flex items-center justify-center'>
          <Popover>
            <PopoverTrigger>
              <AstralMoreVertIcon />
            </PopoverTrigger>
            <PopoverContent>
              <GlassWindowFrame
                className='mt-[2rem] p-[1rem]'
                roundedFx={roundedFx.rounded}
              >
                <GlassWindowContents>
                  <div
                    className='flex cursor-pointer flex-row space-x-[1rem]'
                    onClick={() => {
                      spaceListController.actions.deleteActions.delete(
                        spaceObj.id,
                      );
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
        </div>
      </div>
    </>
  );
}

import { liveMap } from '@/(core)/(live)/live/[id]/map';
import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralDeleteIcon } from '@/icons/delete/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { AstralStarIcon } from '@/icons/star/main';
import { glassFx, roundedFx } from '@/style/data';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';
import Link from 'next/link';
import { useContext } from 'react';

export function HomeProjectsRowMore() {
  const spaceListController = useContext(ContextForSpaceList);
  const spaceObj = useContext(ContextForSpaceObj);

  const starSpace = () => {
    spaceListController.actions.editActions.edit(spaceObj.id, {
      starred: !spaceObj.starred,
    });
  };

  return (
    <div className='flex items-center justify-center'>
      <Popover>
        <PopoverTrigger>
          <AstralMoreVertIcon />
        </PopoverTrigger>
        <PopoverContent>
          <GlassWindowFrame className='p-[1rem]' roundedFx={roundedFx.rounded}>
            <GlassWindowContents className='flex flex-col space-y-[1rem]'>
              <Link
                className='flex cursor-pointer flex-row space-x-[1rem]'
                href={liveMap.live.link(spaceObj.id)}
              >
                <AstralLinkIcon />
                <p className='font-bold text-slate-300'>View Live</p>
              </Link>
              <div
                className='flex cursor-pointer flex-row space-x-[1rem]'
                onClick={(e) => {
                  console.log('asdads');
                  e.stopPropagation();
                  starSpace();
                }}
              >
                <AstralStarIcon />
                <p className='font-bold text-slate-300'>
                  {spaceObj.starred ? 'Unstar Space' : 'Star Space'}
                </p>
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
    </div>
  );
}

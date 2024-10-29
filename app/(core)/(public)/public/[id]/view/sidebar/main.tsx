import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { ContextForSpaceChapterObj } from '@/server/model/space/chapter/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { publicSpaceMap } from '../../map';
import { PublicSpaceSidebarItem } from './item/main';

export function PublicSpaceSidebar() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div className='flex flex-shrink-0 flex-col space-y-[2rem] p-[4rem]'>
      <GlassWindowFrame
        className='h-[250px] w-[400px] flex-shrink-0 p-[1rem]'
        roundedFx={roundedFx.rounded}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents className='flex h-full w-full flex-col justify-between space-y-[1rem] pr-[1rem]'>
          <div className='flex flex-row items-center justify-between space-x-[1rem]'>
            <p className='text-xl font-bold text-slate-300'>
              {spaceMainController.state.obj.title}
            </p>
          </div>
          <HorizontalDivider />
          <p className='text-sm font-light text-slate-300'>
            {spaceMainController.state.obj.description}
          </p>
          <GlassWindowFrame
            className='h-[50px] w-full flex-shrink-0 p-[1rem]'
            roundedFx={roundedFx['rounded-full']}
            borderFx={borderFx['border-around']}
          >
            <GlassWindowContents
              onClick={() => {
                navigator.clipboard.writeText(
                  `astral.fun${publicSpaceMap.space.link(spaceMainController.state.objId)}`,
                );
              }}
              className='flex h-full w-full cursor-pointer flex-row items-center justify-between space-x-[1rem]'
            >
              <AstralLinkIcon className='h-[2rem] w-[2rem]' />
              <p className='max-w-[300px] overflow-hidden whitespace-nowrap font-bold text-slate-300'>
                astral.fun
                {publicSpaceMap.space.link(spaceMainController.state.obj.id)}
              </p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
      <GlassWindowFrame
        className='w-[400px] flex-shrink-0 p-[1rem]'
        roundedFx={roundedFx.rounded}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] pr-[1rem]'>
          <p className='text-xl font-bold text-slate-300'>Chapters</p>
          <HorizontalDivider />
          {chapterListController.state.objs.map((chapter) => (
            <ContextForSpaceChapterObj.Provider value={chapter}>
              <PublicSpaceSidebarItem />
            </ContextForSpaceChapterObj.Provider>
          ))}
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}

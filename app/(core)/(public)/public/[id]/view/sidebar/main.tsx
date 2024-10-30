import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralEditIcon } from '@/icons/edit/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { ContextForSpaceChapterObj } from '@/server/model/space/chapter/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { publicSpaceMap } from '../../map';
import { PublicSpaceidebarItem } from './item/main';

export function PublicSpaceidebar() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div className='flex flex-shrink-0 flex-col space-y-[2rem] py-[4rem]'>
      <GlassWindowFrame
        className='w-[400px] flex-shrink-0 p-[1rem]'
        roundedFx={roundedFx.rounded}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] pr-[1rem]'>
          <div className='flex w-full flex-row items-center justify-between space-x-[1rem]'>
            <p className='text-2xl font-bold text-slate-300'>Chapters</p>
            <div className='flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-blue-500'>
              <p className='font-bold text-slate-300'>
                {chapterListController.state.objs.length}
              </p>
            </div>
          </div>
          <HorizontalDivider />
          {chapterListController.state.objs.map((chapter) => (
            <ContextForSpaceChapterObj.Provider value={chapter}>
              <PublicSpaceidebarItem />
            </ContextForSpaceChapterObj.Provider>
          ))}
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
      <GlassWindowFrame
        className='h-[250px] w-[400px] flex-shrink-0 p-[1rem]'
        roundedFx={roundedFx.rounded}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents className='flex h-full w-full flex-col justify-between space-y-[1rem]'>
          <div className='flex flex-col space-y-[1rem]'>
            <div className='flex flex-row items-center justify-between space-x-[1rem]'>
              <p className='font-extraBold text-2xl text-slate-300'>
                {spaceMainController.state.obj.title}
              </p>
              <div className='flex h-[3rem] w-[3rem] flex-shrink-0 items-center justify-center rounded-full bg-blue-500'>
                <AstralEditIcon
                  onClick={() => {
                    window.open(
                      spacesMap.spaces.id.board.link(
                        spaceMainController.state.objId,
                      ),
                    );
                  }}
                />
              </div>
            </div>
            <p className='text-sm font-light text-slate-300'>
              {spaceMainController.state.obj.description}
            </p>
          </div>
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
    </div>
  );
}

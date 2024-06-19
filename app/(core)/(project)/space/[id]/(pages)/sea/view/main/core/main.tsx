import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForChapterChatList } from '@/(server)/(controller)/space/chapter/chat/list';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { exampleFileElems } from '@/(server)/(model)/elements/file/main';
import { ContextForChapterChatObj } from '@/(server)/(model)/space/chapter/chat/main';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext } from 'react';
import { SpaceFlowCore } from '../../../../flow/view/main/core/main';
import { SpaceSeaCardChapter } from './variants/chapter/main';
import { SpaceSeaCardChat } from './variants/chat/main';
import { SpaceSeaCardScene } from './variants/scene/main';
import { SpaceSeaCardVerse } from './variants/verse/main';

export function SpaceSeaCore() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const chatListController = useContext(ContextForChapterChatList);
  const verseListController = useContext(ContextForChapterVerseList);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceFlowCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto`}
      >
        <div className='flex h-full w-full flex-col items-center justify-between space-y-[2rem] p-[2rem]'>
          <div className='flex w-full flex-row items-center space-x-[4rem]'>
            <GlassWindowFrame
              className='aspect-[9/13] h-[500px] flex-shrink-0'
              roundedFx={roundedFx.rounded}
            >
              <GlassWindowContents className='flex flex-col space-y-[1rem] p-[2rem]'>
                <p className='text-xl font-bold text-slate-300'>Chapter One</p>
                <p className='text-md font-light text-slate-300'>
                  {getFormattedDate(new Date())}
                </p>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-10']} />
            </GlassWindowFrame>
            <div className='flex flex-col space-y-[1rem]'>
              <p className='text-xl font-bold text-slate-300'>Title</p>
              <p className='text-xl text-slate-300'>A new chapter</p>
              <p className='text-xl font-bold text-slate-300'>Description</p>
              <p className='text-xl text-slate-300'>
                I worked on adding a new chapter into the vision and it didn't
                work so well.
              </p>
              <p className='text-xl font-bold text-slate-300'>Collaborators</p>
              <div className='flex flex-row flex-wrap gap-[1rem]'>
                {exampleFileElems.map((fileElem) => (
                  <img
                    className='h-[3rem] w-[3rem] rounded-full object-cover'
                    src={fileElem.src}
                  />
                ))}
              </div>
            </div>
            <div className='h-[5rem] w-[5rem] rounded-full bg-blue-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-[3/4] w-[3/4]'
                viewBox='0 0 24 24'
                fill='none'
              >
                <mask
                  id='mask0_3270_3507'
                  maskUnits='userSpaceOnUse'
                  x='0'
                  y='0'
                  width='24'
                  height='24'
                >
                  <rect width='24' height='24' fill='#D9D9D9' />
                </mask>
                <g mask='url(#mask0_3270_3507)'>
                  <path
                    d='M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z'
                    fill='#CBD5E1'
                  />
                </g>
              </svg>
            </div>
          </div>
          <HorizontalDivider />
          <div className='flex flex-row flex-wrap gap-[1rem]'>
            <ContextForSpaceChapterObj.Provider
              value={chapterListController.state.currentObj}
            >
              <SpaceSeaCardChapter />
            </ContextForSpaceChapterObj.Provider>
            {sceneListController.state.objs.map((scene) => (
              <ContextForChapterSceneList.Provider value={scene}>
                <SpaceSeaCardScene />
              </ContextForChapterSceneList.Provider>
            ))}
            {chatListController.state.objs.map((chat) => (
              <ContextForChapterChatObj.Provider value={chat}>
                <SpaceSeaCardChat />
              </ContextForChapterChatObj.Provider>
            ))}
            {verseListController.state.objs.map((verse) => (
              <ContextForChapterVerseList.Provider value={verse}>
                <SpaceSeaCardVerse />
              </ContextForChapterVerseList.Provider>
            ))}
          </div>
        </div>
      </GlassAreaContainer>
    </div>
  );
}

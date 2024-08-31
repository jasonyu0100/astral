import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { exampleFileElems } from '@/(server)/model/elements/file/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { getFormattedAMPMSS, getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';
import { ContextForSpaceJourneyModals } from '../../modal/controller/main';
import { SpaceJourneyContainer } from './core/container/main';
import { SpaceJourneyHeader } from './header/main';
import { SpaceJourneyChapterNavigation } from './navigation/main';

export function SpaceJourneyMain() {
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sceneListController = useContext(ContextForChapterSceneList);
  const modalController = useContext(ContextForSpaceJourneyModals);

  return (
    <GlassWindowFrame
      name={SpaceJourneyMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpaceJourneyHeader />
      <SpaceJourneyContainer>
        <div
          style={{ height: 'calc(100% - 8rem)', width: '100%' }}
          className='overflow-auto px-[2rem]'
        >
          <div className='grid w-full grid-cols-7 items-center justify-items-center py-[1rem]'>
            <p className='font-bold text-slate-300'>#</p>
            <p className='font-bold text-slate-300'>Log</p>
            <p className='font-bold text-slate-300'></p>
            <p className='font-bold text-slate-300'></p>
            <p className='font-bold text-slate-300'>Status</p>
            <p className='font-bold text-slate-300'>Hours</p>
            <p className='font-bold text-slate-300'>Links</p>
          </div>
          <HorizontalDivider />
          <div className='flex w-full flex-col pt-[2rem]'>
            <GlassWindowFrame className='flex w-full flex-col space-y-[1rem]'>
              <GlassWindowFrame className='w-full py-[2rem]'>
                <GlassWindowContents className='grid w-full grid-cols-7 items-center justify-items-center'>
                  <div>
                    <GlassWindowFrame
                      className='h-[3rem] w-[3rem]'
                      roundedFx={roundedFx['rounded-full']}
                    >
                      <GlassWindowContents className='flex items-center justify-center bg-blue-500 font-bold text-slate-300'>
                        1
                      </GlassWindowContents>
                      <GlassWindowPane glassFx={glassFx['glass-5']} />
                    </GlassWindowFrame>
                  </div>
                  <div className='col-span-2 flex flex-col space-y-[0.5rem]'>
                    <div className='flex w-full flex-col space-y-[0.5rem] bg-yellow-500 p-[2rem]'>
                      <p className='text-xl font-bold'>Something new</p>
                      <p className='font-md'>
                        Worked on some interesting stuff. I think I'm onto
                        something. Worked on some interesting stuff. I think I'm
                        onto something.
                      </p>
                      <p className='text-sm font-light'>
                        {getFormattedAMPMSS(new Date())},{' '}
                        {getFormattedDate(new Date())}
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-row space-x-[-1.5rem]'>
                    {exampleFileElems.slice(0, 2).map((fileElem) => (
                      <img
                        src={fileElem.src}
                        alt='example'
                        className='aspect-square h-[3rem] w-[3rem] rounded-full'
                      />
                    ))}
                  </div>
                  <div>
                    <p className='text-light text-sm font-bold text-slate-300'>
                      Done
                    </p>
                  </div>
                  <div>
                    <p className='text-light text-sm font-bold text-slate-300'>
                      16
                    </p>
                  </div>
                  <div>
                    <p className='text-light text-sm font-bold text-slate-300'>
                      16
                    </p>
                  </div>
                </GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-5']} />
              </GlassWindowFrame>
            </GlassWindowFrame>
            <GlassWindowFrame className='flex w-full flex-col space-y-[1rem]'>
              <GlassWindowFrame className='w-full py-[2rem]'>
                <GlassWindowContents className='grid w-full grid-cols-7 items-center justify-items-center'>
                  <div>
                    <GlassWindowFrame
                      className='h-[3rem] w-[3rem]'
                      roundedFx={roundedFx['rounded-full']}
                    >
                      <GlassWindowContents className='flex items-center justify-center font-bold text-slate-300'>
                        1
                      </GlassWindowContents>
                      <GlassWindowPane glassFx={glassFx['glass-5']} />
                    </GlassWindowFrame>
                  </div>
                  <div className='col-span-2 flex flex-col space-y-[0.5rem]'>
                    <div className='flex w-full flex-col space-y-[0.5rem] bg-yellow-500 p-[2rem]'>
                      <p className='text-xl font-bold'>Something new</p>
                      <p className='font-md'>
                        Worked on some interesting stuff. I think I'm onto
                        something. Worked on some interesting stuff. I think I'm
                        onto something.
                      </p>
                      <p className='text-sm font-light'>
                        {getFormattedAMPMSS(new Date())},{' '}
                        {getFormattedDate(new Date())}
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-row space-x-[-1.5rem]'>
                    {exampleFileElems.slice(0, 2).map((fileElem) => (
                      <img
                        src={fileElem.src}
                        alt='example'
                        className='aspect-square h-[3rem] w-[3rem] rounded-full'
                      />
                    ))}
                  </div>
                  <div>
                    <p className='text-light text-sm font-bold text-slate-300'>
                      In Progress
                    </p>
                  </div>
                  <div>
                    <p className='text-light text-sm font-bold text-slate-300'>
                      16
                    </p>
                  </div>
                  <div>
                    <p className='text-light text-sm font-bold text-slate-300'>
                      16
                    </p>
                  </div>
                </GlassWindowContents>
              </GlassWindowFrame>
            </GlassWindowFrame>
          </div>
        </div>
        {/* <SpaceJourneyKanban /> */}
      </SpaceJourneyContainer>
      <SpaceJourneyChapterNavigation />
    </GlassWindowFrame>
  );
}

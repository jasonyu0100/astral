import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { AstralChevronDownIcon } from '@/icons/chevron-down/main';
import { AstralChevronUpIcon } from '@/icons/chevron-up/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { GlassWindowPane } from '@/ui/(glass)/window/pane/main';
import { useContext } from 'react';
import { ContextForSpaceMapModals } from '../../../../../modal/controller/main';

export function SpaceMapCoreContentsStatus() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const modalController = useContext(ContextForSpaceMapModals);

  return (
    <div className='flex h-[10rem] w-full flex-shrink-0 items-center justify-center p-[2rem]'>
      <GlassWindowFrame
        className='h-full w-full items-center justify-center p-[2rem]'
        roundedFx={roundedFx.rounded}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents className='flex flex-row items-center'>
          <div className='flex w-full flex-row items-center space-x-[2rem]'>
            <div className='flex h-[3rem] w-[3rem] flex-shrink-0 items-center justify-center rounded-full bg-purple-500'>
              <p className='text-2xl font-bold text-slate-300'>
                {sceneListController.state.index + 1}
              </p>
            </div>
            <div className='flex w-full flex-col'>
              <p className='text-lg font-bold text-slate-300'>
                {sceneListController.state.currentObj?.title}
              </p>
              <p className='text-md font-light text-slate-300'>
                {sceneListController.state.currentObj?.description}
              </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <AstralChevronUpIcon
                className='h-[2rem] w-[2rem] cursor-pointer'
                onClick={() => {
                  if (
                    sceneListController.state.index ===
                    sceneListController.state.objs.length - 1
                  ) {
                    modalController.addSceneController.open();
                  } else {
                    sceneListController.actions.stateActions.goNext();
                  }
                }}
              />
              <AstralChevronDownIcon
                className='h-[2rem] w-[2rem] cursor-pointer'
                onClick={() => {
                  sceneListController.actions.stateActions.goPrev();
                }}
              />
            </div>
          </div>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}

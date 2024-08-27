import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { AstralChevronDownIcon } from '@/icons/chevron-down/main';
import { AstralChevronUpIcon } from '@/icons/chevron-up/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { ContextForSpaceMapModals } from '../../../../../modal/controller/main';

export function SpaceMapCoreContentsStatus() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const modalController = useContext(ContextForSpaceMapModals);

  return (
    <div className='flex h-[14rem] w-full flex-shrink-0 flex-col items-center justify-center p-[2rem] pt-[4rem]'>
      <HorizontalDivider />
      <GlassWindowFrame className='h-full w-full items-center justify-center p-[2rem]'>
        <GlassWindowContents className='flex h-full w-full flex-row items-center'>
          <div className='flex h-full w-full flex-col justify-center space-y-[0.5rem]'>
            <p className='text-lg font-bold text-slate-300'>
              {sceneListController.state.index + 1}.{' '}
              {sceneListController.state.currentObj?.title}
            </p>
            <p className='text-sm font-light text-slate-300'>
              Objective: {sceneListController.state.currentObj?.description}
            </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <AstralChevronUpIcon
              className='h-[2.5rem] w-[2.5rem] cursor-pointer'
              onClick={() => {
                if (sceneListController.state.index === 0) {
                  alert('Cannot go back');
                } else {
                  sceneListController.actions.stateActions.goPrev();
                }
              }}
            />
            <AstralChevronDownIcon
              className='h-[2.5rem] w-[2.5rem] cursor-pointer'
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
          </div>
        </GlassWindowContents>
      </GlassWindowFrame>
      <HorizontalDivider />
    </div>
  );
}

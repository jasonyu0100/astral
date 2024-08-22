import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { VerticalDivider } from '@/(components)/(indicator)/divider/vertical/main';
import { useContext } from 'react';
import { ContextForSpaceProgressController } from '../../(controller)/space-session/main';
import { SpaceProgressContainer } from './core/container/main';
import { SpaceProgressHeader } from './header/main';
import { SpaceProgressListItem } from './lists/item/main';
import { SpaceProgressList } from './lists/main';
import { SpaceProgressChapterNavigation } from './navigation/main';

export function SpaceProgressMain() {
  const spaceSessionController = useContext(ContextForSpaceProgressController);

  return (
    <GlassWindowFrame
      name={SpaceProgressMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpaceProgressHeader />
      <SpaceProgressContainer>
        <div className='flex h-full flex-row space-x-[2rem] overflow-auto p-[2rem]'>
          <div className='flex flex-col space-y-[1rem]'>
            <p className='font-bold text-slate-300'>Ideas</p>
            <SpaceProgressList>
              <SpaceProgressListItem>adsdas</SpaceProgressListItem>
              <SpaceProgressListItem>dasasd</SpaceProgressListItem>
            </SpaceProgressList>
          </div>
          <div className='flex flex-col space-y-[1rem]'>
            <p className='font-bold text-slate-300'>In Progress</p>
            <SpaceProgressList>
              <SpaceProgressListItem>adsdas</SpaceProgressListItem>
              <SpaceProgressListItem>dasasd</SpaceProgressListItem>
            </SpaceProgressList>
          </div>
          <div className='flex flex-col space-y-[1rem]'>
            <p className='font-bold text-slate-300'>Verses</p>
            <SpaceProgressList>
              <SpaceProgressListItem>adsdas</SpaceProgressListItem>
              <SpaceProgressListItem>dasasd</SpaceProgressListItem>
            </SpaceProgressList>
          </div>
          <VerticalDivider />
          <div className='flex flex-col space-y-[1rem]'>
            <p className='font-bold text-slate-300'>Done</p>
            <SpaceProgressList>
              <SpaceProgressListItem>adsdas</SpaceProgressListItem>
              <SpaceProgressListItem>dasasd</SpaceProgressListItem>
            </SpaceProgressList>
          </div>
        </div>
        {/* {spaceSessionController.page === SpaceProgressPage.VIEW_SESSION && (
          <SpaceProgressViewSession />
        )}
        {spaceSessionController.page ===
          SpaceProgressPage.VIEW_SESSION_UPDATE && <SpaceProgressViewUpdate />}

        {spaceSessionController.page === SpaceProgressPage.COMPLETE_SESSION && (
          <SpaceProgressCompleteSession />
        )}
        {spaceSessionController.page ===
          SpaceProgressPage.COMPLETE_SESSION_UPDATE && (
          <SpaceProgressCompleteUpdate />
        )} */}
      </SpaceProgressContainer>
      <SpaceProgressChapterNavigation />
    </GlassWindowFrame>
  );
}

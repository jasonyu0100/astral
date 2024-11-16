import { ContextForChapterConversationList } from '@/architecture/controller/conversation/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesChat,
  SpacesChatSidebarVisibility,
} from '../../../../../controller/main';

export function SpacesChatHeaderLeft() {
  const spacesChannelController = useContext(ContextForSpacesChat);

  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const conversationListController = useContext(
    ContextForChapterConversationList,
  );

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <div
        className={`flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full ${spacesChannelController.state.sidebarVisibility === SpacesChatSidebarVisibility.OPEN ? 'bg-blue-500' : 'bg-slate-500'}`}
        onClick={() => {
          spacesChannelController.actions.updateSidebarVisibility(
            spacesChannelController.state.sidebarVisibility ===
              SpacesChatSidebarVisibility.CLOSED
              ? SpacesChatSidebarVisibility.OPEN
              : SpacesChatSidebarVisibility.CLOSED,
          );
        }}
      >
        <AstralSidebarLeftIcon
          className={ctwn({
            'rotate-180 transform':
              spacesChannelController.state.sidebarVisibility ===
              SpacesChatSidebarVisibility.CLOSED,
          })}
        />
      </div>
      <BarDividerIndicator />
      <AstralAddIcon
        onClick={() => {
          conversationListController.actions.createActions.createConversation(
            loggedInUser.id,
            chapterListController.state.objId,
          );
        }}
      />
    </div>
  );
}

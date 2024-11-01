import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralCloseIcon } from '@/icons/close/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { ContextForChapterConversationList } from '@/server/controller/conversation/list';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesChat,
  SpacesChatSidebarVisibility,
} from '../../../../../controller/main';

export function SpacesChatHeaderLeft() {
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesChat);

  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const conversationListController = useContext(
    ContextForChapterConversationList,
  );

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
          'rotate-180 transform':
            sidebarVisibility === SpacesChatSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          updateSidebarVisibility(
            sidebarVisibility === SpacesChatSidebarVisibility.CLOSED
              ? SpacesChatSidebarVisibility.OPEN
              : SpacesChatSidebarVisibility.CLOSED,
          );
        }}
      />
      <BarDividerIndicator />
      <AstralAddIcon
        onClick={() => {
          conversationListController.actions.createActions.createConversation(
            loggedInUser.id,
            chapterListController.state.objId,
          );
        }}
      />
      <AstralCloseIcon
        onClick={() => {
          conversationListController.actions.deleteActions.delete(
            conversationListController.state.objId,
          );
        }}
      />
      {/* <AstralForumIcon
        onClick={() => {
          alert('Simulated conversations coming soon');
        }}
      /> */}
    </div>
  );
}

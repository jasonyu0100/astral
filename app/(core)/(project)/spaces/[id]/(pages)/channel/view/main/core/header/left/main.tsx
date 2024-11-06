import { ContextForChapterConversationList } from '@/architecture/controller/conversation/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesChannel,
  SpacesChannelSidebarVisibility,
} from '../../../../../controller/main';

export function SpacesChannelHeaderLeft() {
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesChannel);

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
            sidebarVisibility === SpacesChannelSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          updateSidebarVisibility(
            sidebarVisibility === SpacesChannelSidebarVisibility.CLOSED
              ? SpacesChannelSidebarVisibility.OPEN
              : SpacesChannelSidebarVisibility.CLOSED,
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
      {/* <AstralCloseIcon
        onClick={() => {
          conversationListController.actions.deleteActions.delete(
            conversationListController.state.objId,
          );
        }}
      /> */}
      {/* <AstralForumIcon
        onClick={() => {
          alert('Simulated conversations coming soon');
        }}
      /> */}
    </div>
  );
}

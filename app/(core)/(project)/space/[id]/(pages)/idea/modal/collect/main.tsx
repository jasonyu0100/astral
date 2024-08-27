import { spaceMap } from '@/(core)/(project)/space/[id]/map';
import { ContextForChatConversationList } from '@/(server)/controller/space/chapter/chat/conversation/list';
import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/chat/conversation/message/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useState } from 'react';

export function SpaceIdeaCollectModal() {
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const messageListController = useContext(ContextForConversationMessageList);
  const conversationListController = useContext(ContextForChatConversationList);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Collect</FormTitle>
          <FormBody>
            {messageListController.state.objs.map((message, index) => (
              <div className='flex flex-row space-x-[1rem]'>
                <div className='flex h-[1.5rem] w-[1.5rem] flex-shrink-0 items-center justify-center rounded-full bg-blue-500'>
                  <p className='font-bold text-white'>{index}</p>
                </div>
                <div className='font-bold text-black'>{message.message}</div>
              </div>
            ))}
          </FormBody>
          <FormFooter>
            <FormButton
              onClick={() => {
                window.location.href = spaceMap.space.id.map.link(
                  spaceController.state.objId,
                );
              }}
            >
              Next
            </FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}

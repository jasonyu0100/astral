import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { ContextForTaskLinkList } from '@/server/controller/way/link/list';
import { ContextForTaskList } from '@/server/controller/way/list';
import {
  TextElement,
  TextElementVariant,
} from '@/server/model/elements/text/main';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import { useContext, useState } from 'react';

export function SpacesProgressAddTextLinkModal() {
  const user = useContext(ContextForLoggedInUserObj);
  const linkListController = useContext(ContextForTaskLinkList);
  const wayListController = useContext(ContextForTaskList);
  const openableController = useContext(ContextForOpenable);
  const [title, changeTitle] = useState<string>('');
  const [description, changeDescription] = useState<string>('');
  const [text, changeText] = useState<string>('');

  function createStickyLink() {
    linkListController.actions.createActions
      .createLinkFromTextIdea(
        user.id,
        wayListController.state.objId,
        title,
        description,
        {
          id: crypto.randomUUID(),
          title: title,
          text: text,
          variant: TextElementVariant.STICKY,
        } as TextElement,
      )
      .then(() => {
        openableController.close();
      });
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <div className='flex flex-row items-center space-x-[2rem]'>
            <div className='aspect-square h-full space-y-[2rem] bg-yellow-500 p-[2rem]'>
              <textarea
                placeholder='Enter description here...'
                value={text}
                className='h-full w-full bg-transparent outline-none placeholder:text-slate-800'
                onChange={(e) => changeText(e.target.value)}
              />
            </div>
            <AstralRoundedActionButton onClick={createStickyLink}>
              <AstralCheckIcon />
            </AstralRoundedActionButton>
          </div>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}

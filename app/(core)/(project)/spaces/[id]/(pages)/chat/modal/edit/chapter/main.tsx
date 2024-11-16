import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { AstralDeleteIcon } from '@/icons/delete/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext, useEffect, useState } from 'react';

export function SpacesChatEditChapterModal() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useContext(ContextForOpenable);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [objective, setObjective] = useState('');

  useEffect(() => {
    if (chapterListController.state.currentObj) {
      setTitle(chapterListController.state.currentObj.title);
      setDescription(chapterListController.state.currentObj.description);
      setObjective(chapterListController.state.currentObj.objective);
    }
  }, [chapterListController.state.currentObj]);

  async function editChapter() {
    const payload = {
      ...chapterListController.state.currentObj,
      title,
      description,
      objective,
    };
    const chapter = await chapterListController.actions.editActions.edit(
      chapterListController.state.objId,
      payload,
    );

    console.log(chapter);
    openableController.close();
  }

  async function deleteChapter() {
    const chapter = await chapterListController.actions.deleteActions.delete(
      chapterListController.state.objId,
    );
    console.log(chapter);
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <AstralModalTitle>Edit Chapter</AstralModalTitle>
              <AstralTextLineInput
                title='Title'
                placeholder='Enter your title...'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <AstralTextAreaInput
                title='Objective'
                placeholder='Enter your objective...'
                rows={5}
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                style={{ resize: 'none' }}
              />
              <AstralTextAreaInput
                title='Description'
                placeholder='Enter your description...'
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ resize: 'none' }}
              />
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton onClick={editChapter}>
                <AstralCheckIcon />
              </AstralRoundedActionButton>
              <AstralRoundedActionButton
                onClick={deleteChapter}
                className='bg-gradient-to-br from-slate-600 to-slate-400'
              >
                <AstralDeleteIcon />
              </AstralRoundedActionButton>
            </AstralModalBodyAction>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}

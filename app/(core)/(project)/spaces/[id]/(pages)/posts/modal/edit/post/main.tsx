import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { exampleFileElement } from '@/architecture/model/elements/file/main';
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

export function SpacesPostsEditPostModal() {
  const postListController = useContext(ContextForUserPostListFromChapter);
  const openableController = useContext(ContextForOpenable);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [background, setBackground] = useState(exampleFileElement);

  useEffect(() => {
    if (postListController.state.currentObj) {
      setTitle(postListController.state.currentObj.title);
      setDescription(postListController.state.currentObj.description);
    }
  }, [postListController.state.currentObj]);

  async function editPost() {
    const payload = {
      ...postListController.state.currentObj,
      title,
      description: description,
    };
    const post = await postListController.actions.editActions.edit(
      postListController.state.objId,
      payload,
    );
    openableController.close();
  }

  async function deletePost() {
    const post = await postListController.actions.deleteActions.delete(
      postListController.state.objId,
    );
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <AstralModalTitle>Edit Post</AstralModalTitle>
              <AstralTextLineInput
                title='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <AstralTextAreaInput
                title='Description'
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ resize: 'none' }}
              />
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton onClick={editPost}>
                <AstralCheckIcon />
              </AstralRoundedActionButton>
              <AstralRoundedActionButton
                onClick={deletePost}
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

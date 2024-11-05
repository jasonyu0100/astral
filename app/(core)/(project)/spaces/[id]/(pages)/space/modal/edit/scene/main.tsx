import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
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

export function SpacesSpaceEditSceneModal() {
  const sceneListController = useContext(ContextForIdeaSceneList);
  const openableController = useContext(ContextForOpenable);
  const [title, setTitle] = useState('');
  const [objective, setObjective] = useState('');

  useEffect(() => {
    if (sceneListController.state.currentObj) {
      setTitle(sceneListController.state.currentObj.title);
      setObjective(sceneListController.state.currentObj.objective);
    }
  }, [sceneListController.state.currentObj]);

  async function editScene() {
    const payload = {
      ...sceneListController.state.currentObj,
      title,
      objective,
    };
    const scene = await sceneListController.actions.editActions.edit(
      sceneListController.state.objId,
      payload,
    );

    console.log(scene);
    openableController.close();
  }

  async function deleteScene() {
    const scene = await sceneListController.actions.deleteActions.delete(
      sceneListController.state.objId,
    );
    console.log(scene);
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <AstralModalTitle>Edit Scene</AstralModalTitle>
              <AstralTextLineInput
                title='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <AstralTextAreaInput
                title='Objective'
                rows={5}
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                style={{ resize: 'none' }}
              />
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton onClick={editScene}>
                <AstralCheckIcon />
              </AstralRoundedActionButton>
              <AstralRoundedActionButton
                onClick={deleteScene}
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

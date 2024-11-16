import { ContextForFlowList } from '@/architecture/controller/flow/list';
import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext, useState } from 'react';
import { ContextForHomeFlow } from '../../controller/main';

export function HomeFlowAddFlowModal() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const openableController = useContext(ContextForOpenable);
  const flowCurrentController = useContext(ContextForHomeFlow);
  const flowListController = useContext(ContextForFlowList);
  const spaceListController = useContext(ContextForSpaceList);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [objective, setObjective] = useState('');

  async function HomeFlow() {
    if (flowCurrentController.state.selectedSpaces.length === 0) {
      alert('Please select at least one space');
      return;
    }
    flowListController.actions.createActions
      .createFlow(loggedInUser.id, title, description, new Date().toISOString())
      .then((flow) => {
        flowCurrentController.state.selectedSpaces.map((spaceId) => {
          spaceListController.actions.editActions.edit(spaceId, {
            flowId: flow.id,
          });
        });
        flowCurrentController.actions.updateSelectedSpaces([]);
      });
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <AstralModalTitle>Create Flow</AstralModalTitle>
              <AstralTextLineInput
                title='Title'
                placeholder='Enter title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <AstralTextAreaInput
                title='Description'
                placeholder='Enter description'
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ resize: 'none' }}
              />
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton onClick={HomeFlow}>
                <AstralArrowForwardIcon />
              </AstralRoundedActionButton>
            </AstralModalBodyAction>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}

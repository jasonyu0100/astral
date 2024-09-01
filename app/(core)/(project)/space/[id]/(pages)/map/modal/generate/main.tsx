import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useControllerForLogLinkList } from '@/(server)/controller/space/chapter/log/link/list';
import { useControllerForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { FormTextArea } from '@/ui/form/area/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormInput } from '@/ui/form/input/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useState } from 'react';
import { spaceMap } from '../../../../map';
import { ContextForSpaceMap } from '../../controller/map/main';

export function SpaceMapPlanModal() {
  const user = useGlobalUser((state) => state.user);
  const mapController = useContext(ContextForSpaceMap);
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const logListController = useControllerForChapterLogList(
    chapterListController.state.objId,
  );
  const linkListController = useControllerForLogLinkList(
    logListController.state.objId,
  );
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Create Log</FormTitle>
          <FormBody>
            <FormInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              title='Title'
            />
            <FormTextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              title='Description'
            />
            {ideaListController.state.objs.map((idea, index) => (
              <div className='flex flex-row space-x-[1rem]'>
                <div className='flex h-[1.5rem] w-[1.5rem] flex-shrink-0 items-center justify-center rounded-full bg-blue-500'>
                  <p className='font-bold text-white'>{index}</p>
                </div>
                <img src={idea.fileElem?.src} />
              </div>
            ))}
          </FormBody>
          <FormFooter>
            <FormButton
              onClick={() => {
                logListController.actions.createActions
                  .createLog(
                    chapterListController.state.objId,
                    user.id,
                    title,
                    description,
                  )
                  .then((log) => {
                    mapController.selectedIdeas.forEach((idea) => {
                      linkListController.actions.createActions.createLink(
                        user.id,
                        log.id,
                        idea,
                      );
                    });
                  })
                  .then(() => {
                    window.location.href = spaceMap.space.id.journey.link(
                      spaceController.state.objId,
                    );
                  });
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

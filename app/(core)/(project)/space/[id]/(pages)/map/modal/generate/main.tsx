import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useControllerForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext } from 'react';
import { spaceMap } from '../../../../map';

export function SpaceMapPlanModal() {
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const logListController = useControllerForChapterLogList(
    chapterListController.state.objId,
  );

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Create Log</FormTitle>
          <FormBody>
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
                  .createEmpty()
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

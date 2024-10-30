import { FormBody } from '@/components/form/body/main';
import { FormButton } from '@/components/form/button/main';
import { FormFooter } from '@/components/form/footer/main';
import { FormContainer } from '@/components/form/main';
import { FormTitle } from '@/components/form/title/main';
import { PolaroidModal } from '@/components/modal/polaroid/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { useContext } from 'react';
import { spacesMap } from '../../../../map';

export function SpacesScenePlanModal() {
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Generate Plan</FormTitle>
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
                window.location.href = spacesMap.spaces.id.progress.link(
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

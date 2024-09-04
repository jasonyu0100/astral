import { spaceMap } from '@/(core)/(project)/space/[id]/map';
import { useControllerForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { TextElem, TextElemVariant } from '@/(server)/model/elements/text/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { ContextForLoading } from '@/ui/loading/controller/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useEffect, useState } from 'react';
import { ContextForSpaceChat } from '../../controller/main';

export function SpaceChatGenerateSceneModal() {
  const user = useGlobalUser((state) => state.user);
  const loadingController = useContext(ContextForLoading);
  const {
    actions: { synthesiseConversation },
  } = useContext(ContextForSpaceChat);
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const sceneListController = useContext(ContextForChapterSceneList);
  const ideaListController = useControllerForSceneIdeaList(
    sceneListController.state.objId,
  );
  const [stickies, setStickies] = useState<string[]>([]);

  useEffect(() => {
    if (openableController.opened) {
      loadingController.loadingController.open();
      synthesiseConversation().then((stickies) => {
        setStickies(stickies.map((sticky) => sticky.text));
        loadingController.loadingController.close();
      });
    }
  }, [openableController.opened]);

  async function addStickiesToScene() {
    stickies.forEach((sticky, index) => {
      const title = `Step ${index + 1}`;
      const description = sticky;
      const text = sticky;
      const variant = TextElemVariant.STICKY;
      ideaListController.actions.createActions.createFromText(
        user.id,
        sceneListController.state.objId,
        title,
        description,
        index * 200,
        0,
        150,
        150,
        {
          id: crypto.randomUUID(),
          title: title,
          text: text,
          variant: variant,
        } as TextElem,
        ideaListController.state.objs.length,
      );
    });
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Generate Map</FormTitle>
          <FormBody>
            <div className='grid w-full grid-cols-3 gap-[1rem]'>
              {stickies.map((sticky, index) => (
                <div className='aspect-square bg-yellow-500 p-[1rem]'>
                  <textarea
                    className='h-full w-full resize-none bg-transparent font-bold outline-none'
                    value={sticky}
                    onChange={(e) => {
                      setStickies(
                        stickies.map((s, i) => {
                          if (i === index) {
                            return e.target.value;
                          }
                          return s;
                        }),
                      );
                    }}
                  />
                </div>
              ))}
            </div>
          </FormBody>
          <FormFooter>
            <FormButton
              onClick={() => {
                addStickiesToScene().then(() => {
                  window.location.href = spaceMap.space.id.map.link(
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

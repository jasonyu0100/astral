import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { useOpenAIController } from '@/api/controller/openai/main';
import { AstralChevronDownIcon } from '@/icons/chevron-down/main';
import { AstralChevronUpIcon } from '@/icons/chevron-up/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { ContextForSpaceMapModals } from '../../../../../modal/controller/main';

export function SpaceMapCoreContentsStatus() {
  const openAi = useOpenAIController();
  const sceneListController = useContext(ContextForChapterSceneList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const modalController = useContext(ContextForSpaceMapModals);

  // useEffect(() => {
  //   const text = ideaListController.state.objs
  //     .map(
  //       (idea, index) =>
  //         `${index}. title: ${idea.title} description: ${idea.description} variant:${idea.variant}, `,
  //     )
  //     .join(' ');

  //   if (text.trim() === '') {
  //     return;
  //   }

  //   openAi
  //     .getMessageResponse(
  //       `These are ideas in a mindmap. Summarise the scene within 100 characters. ${text}`,
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       sceneListController.actions.editActions.edit(currentScene?.id || '', {
  //         summary: response || '',
  //       });
  //     });
  // }, [ideaListController.state.objs]);

  return (
    <div className='flex h-[14rem] w-full flex-shrink-0 flex-col items-center justify-center p-[2rem] pt-[4rem]'>
      <HorizontalDivider />
      <GlassWindowFrame className='h-full w-full items-center justify-center p-[2rem]'>
        <GlassWindowContents className='flex h-full w-full flex-row items-center'>
          <div className='flex h-full w-full flex-col justify-center space-y-[0.5rem]'>
            <p className='text-lg font-bold text-slate-300'>
              Objective:{' '}
              {sceneListController.state.currentObj?.description ||
                'Open-ended'}
            </p>
            <p className='text-sm font-light text-slate-300'>
              {sceneListController.state.currentObj?.summary || '...'}
            </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <AstralChevronUpIcon
              className='h-[2.5rem] w-[2.5rem] cursor-pointer'
              onClick={() => {
                if (sceneListController.state.index === 0) {
                  alert('Cannot go back');
                } else {
                  sceneListController.actions.stateActions.goPrev();
                }
              }}
            />
            <AstralChevronDownIcon
              className='h-[2.5rem] w-[2.5rem] cursor-pointer'
              onClick={() => {
                if (
                  sceneListController.state.index ===
                  sceneListController.state.objs.length - 1
                ) {
                  modalController.addSceneController.open();
                } else {
                  sceneListController.actions.stateActions.goNext();
                }
              }}
            />
          </div>
        </GlassWindowContents>
      </GlassWindowFrame>
      <HorizontalDivider />
    </div>
  );
}

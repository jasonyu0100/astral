import { GlassAreaPane } from '@/(components)/(glass)/area/pane/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForChapterItemList } from '@/(server)/(controller)/space/chapter/update/item/chapter-list';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { getFormattedAMPM } from '@/(utils)/dateFormat';
import { useContext } from 'react';
import { EditContext } from '../../main';
import { ContextForUpdateEdit } from '../main';

export function SpaceSeaUpdateForm() {
  const { updateComplete } = useContext(EditContext);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const updateItemListController = useContext(ContextForChapterItemList);
  const updateEditController = useContext(ContextForUpdateEdit);

  return (
    <div className='flex h-full flex-grow flex-col justify-between space-y-[1rem]'>
      <div className='flex flex-col'>
        <p className='mb-[1rem] text-sm font-bold text-slate-300'>
          {updateItemListController.state.objs.length} updates
        </p>
        <p className='text-xl font-bold text-slate-300'>
          {chapterListController.state.currentObj?.title}
        </p>
        <p className='text-sm font-light text-slate-300'>
          {getFormattedAMPM(new Date())}
        </p>
      </div>
      <div className='h-full w-full overflow-auto'>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <p className='text-lg text-slate-300'>Title</p>
          <GlassWindowFrame
            className='h-[3rem] w-full'
            borderFx={borderFx['border-around']}
            roundedFx={roundedFx['rounded']}
          >
            <GlassWindowContents>
              <input
                className='h-full w-full bg-transparent p-[1rem] font-bold text-white outline-none'
                value={updateEditController.title}
                onChange={(e) => updateEditController.setTitle(e.target.value)}
              />
            </GlassWindowContents>
            <GlassAreaPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
          <p className='text-lg text-slate-300'>Description</p>
          <GlassWindowFrame
            className='w-full'
            borderFx={borderFx['border-around']}
            roundedFx={roundedFx['rounded']}
          >
            <GlassWindowContents>
              <textarea
                className='h-full w-full resize-none bg-transparent p-[1rem] font-bold text-white outline-none'
                value={updateEditController.description}
                onChange={(e) =>
                  updateEditController.setDescription(e.target.value)
                }
              />
            </GlassWindowContents>
            <GlassAreaPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
          <p className='text-lg text-slate-300'>Linked Items</p>
          <div className='flex flex-col'>
            {updateItemListController.state.objs.map((item, index) => (
              <div className='text-sm text-slate-300'>
                {index + 1}. {item.variant} {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex w-full flex-row justify-end'>
        <GlassWindowFrame
          className='h-[3rem] w-[200px]'
          roundedFx={roundedFx['rounded']}
        >
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center bg-blue-500'
            onClick={() => {
              updateEditController.saveUpdate().then(() => {
                chapterListController.actions.stateActions.goNext();
                updateComplete(false);
              });
            }}
          >
            <p className='font-bold text-white'>Save</p>
          </GlassWindowContents>
          <GlassAreaPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      </div>
    </div>
  );
}

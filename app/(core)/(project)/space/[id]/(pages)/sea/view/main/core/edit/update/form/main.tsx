import { GlassAreaPane } from '@/(components)/(glass)/area/pane/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForChapterItemList } from '@/(server)/(controller)/space/chapter/update/item/chapter-list';
import { ContextForChapterUpdateList } from '@/(server)/(controller)/space/chapter/update/list';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { getFormattedAMPM } from '@/(utils)/dateFormat';
import { useContext, useState } from 'react';
import { EditContext } from '../../main';

export function SpaceSeaUpdateForm() {
  const { updateComplete } = useContext(EditContext);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const updateItemListController = useContext(ContextForChapterItemList);
  const updateListController = useContext(ContextForChapterUpdateList);
  const update = updateListController.state.currentObj;
  const [title, setTitle] = useState(update?.title);
  const [description, setDescription] = useState(update?.description);

  return (
    <div className='flex h-full flex-grow flex-col justify-around space-y-[1rem]'>
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
      <p className='text-lg text-slate-300'>Title</p>
      <GlassWindowFrame
        className='h-[3rem] w-full'
        borderFx={borderFx['border-around']}
        roundedFx={roundedFx['rounded']}
      >
        <GlassWindowContents>
          <input
            className='h-full w-full bg-transparent p-[1rem] font-bold text-white outline-none'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </GlassWindowContents>
        <GlassAreaPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
      <p className='text-lg text-slate-300'>Linked Items</p>
      <div className='flex flex-row flex-wrap gap-[1rem]'>
        <div className='h-[3rem] w-[3rem] bg-blue-500'></div>
        <div className='h-[3rem] w-[3rem] bg-blue-500'></div>
        <div className='h-[3rem] w-[3rem] bg-blue-500'></div>
        <div className='h-[3rem] w-[3rem] bg-blue-500'></div>
      </div>
      <div className='flex w-full flex-row justify-end'>
        <GlassWindowFrame
          className='h-[3rem] w-[200px]'
          roundedFx={roundedFx['rounded']}
        >
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center bg-blue-500'
            onClick={() => {
              chapterListController.actions.stateActions.goNext();
              updateComplete(false);
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

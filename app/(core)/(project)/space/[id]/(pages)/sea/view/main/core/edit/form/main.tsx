import { GlassAreaPane } from '@/(components)/(glass)/area/pane/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { ContextForChapterItemList } from '@/(server)/(controller)/space/chapter/update/item/chapter-list';
import { exampleFileElems } from '@/(server)/(model)/elements/file/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { getFormattedAMPM } from '@/(utils)/dateFormat';
import { useContext, useState } from 'react';

export function SpaceSeaEditForm() {
  const updateItemListController = useContext(ContextForChapterItemList);
  const current = updateItemListController.state.currentObj;
  const [title, setTitle] = useState(current.title);
  const [description, setDescription] = useState(current.description);

  return (
    <div className='flex h-full flex-grow flex-col justify-around space-y-[1rem]'>
      <div className='flex flex-col'>
        <p className='mb-[1rem] text-sm font-bold text-slate-300'>
          {updateItemListController.state.index + 1} of{' '}
          {updateItemListController.state.objs.length}
        </p>
        <p className='text-xl font-bold text-slate-300'>
          {updateItemListController.state.currentObj.variant} UPDATE
        </p>
        <p className='text-sm font-light text-slate-300'>
          {getFormattedAMPM(
            new Date(updateItemListController.state.currentObj?.created),
          )}
        </p>
      </div>
      <br />
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
      <p className='text-lg text-slate-300'>Collabs</p>
      <div className='flex flex-row flex-wrap gap-[1rem]'>
        {exampleFileElems.map((fileElem) => (
          <img
            className='h-[3rem] w-[3rem] rounded-full object-cover'
            src={fileElem.src}
          />
        ))}
      </div>
      <div className='flex w-full flex-row justify-end'>
        <GlassWindowFrame
          className='h-[3rem] w-[200px]'
          roundedFx={roundedFx['rounded']}
        >
          <GlassWindowContents className='flex items-center justify-center bg-blue-500'>
            <p className='font-bold text-white'>Save</p>
          </GlassWindowContents>
          <GlassAreaPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      </div>
    </div>
  );
}

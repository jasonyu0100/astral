import { GlassAreaPane } from '@/(components)/(glass)/area/pane/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { ContextForChapterItemList } from '@/(server)/(controller)/space/chapter/update/item/chapter-list';
import { exampleFileElems } from '@/(server)/(model)/elements/file/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { EditContext } from '../../main';
import { ContextForItemEdit } from '../main';
import { SpaceSeaItemFormHeader } from './header/main';

export function SpaceSeaItemForm() {
  const { updateComplete } = useContext(EditContext);
  const itemEditController = useContext(ContextForItemEdit);
  const updateItemListController = useContext(ContextForChapterItemList);
  const current = updateItemListController.state.currentObj;

  async function handleUpdate() {
    if (
      updateItemListController.state.index ===
      updateItemListController.state.objs.length - 1
    ) {
      itemEditController.updateItem().then(() => {
        updateComplete(true);
      });
    } else {
      itemEditController.updateItem().then(() => {
        updateItemListController.actions.stateActions.goNext();
        updateComplete(false);
      });
    }
  }

  return (
    <div className='flex h-full flex-grow flex-col justify-around space-y-[1rem]'>
      <SpaceSeaItemFormHeader />
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
            value={itemEditController.title}
            onChange={(e) => itemEditController.setTitle(e.target.value)}
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
            value={itemEditController.description}
            onChange={(e) => itemEditController.setDescription(e.target.value)}
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
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center bg-blue-500'
            onClick={handleUpdate}
          >
            <p className='font-bold text-white'>Update</p>
          </GlassWindowContents>
          <GlassAreaPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      </div>
    </div>
  );
}

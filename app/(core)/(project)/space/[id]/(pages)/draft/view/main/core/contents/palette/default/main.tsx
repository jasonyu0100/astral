import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';
import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import {
  ContextForPaletteController,
  PaletteState,
} from '../../../../../../page';

export function SpaceDraftContentsPaletteDefault({
  onToggle,
}: {
  onToggle: () => void;
}) {
  const paletteController = useContext(ContextForPaletteController);
  const galleryListController = useContext(ContextForGalleryList);
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div className='flex w-full flex-col'>
      <div className='flex w-full cursor-pointer items-center space-x-[1rem] px-[1rem] py-[0.5rem] text-sm font-bold text-slate-300'>
        {[
          PaletteState.HOME,
          PaletteState.GALLERY,
          PaletteState.COLLECTION,
        ].includes(paletteController.state) && (
          <p
            onClick={() => {
              paletteController.actions.goToHome();
            }}
          >
            Home
          </p>
        )}
        {[PaletteState.GALLERY, PaletteState.COLLECTION].includes(
          paletteController.state,
        ) && (
          <p
            onClick={() => {
              galleryListController.state.currentObj &&
                paletteController.actions.goToGallery(
                  galleryListController.state.currentObj,
                );
            }}
          >
            / {galleryListController.state.currentObj?.title}
          </p>
        )}
        {[PaletteState.COLLECTION].includes(paletteController.state) && (
          <p
            onClick={() => {
              collectionListController.state.currentObj &&
                paletteController.actions.goToCollection(
                  collectionListController.state.currentObj,
                );
            }}
          >
            / {collectionListController.state.currentObj?.title}
          </p>
        )}
        {/* <svg
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => onToggle()}
          className='h-[2rem] w-[2rem] cursor-pointer'
          viewBox='0 0 24 24'
          fill='none'
        >
          <mask
            id='mask0_3264_5809'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='24'
            height='24'
          >
            <rect width='24' height='24' fill='#D9D9D9' />
          </mask>
          <g mask='url(#mask0_3264_5809)'>
            <path
              d='M12 10.8L7.4 15.4L6 14L12 8L18 14L16.6 15.4L12 10.8Z'
              fill='#CBD5E1'
            />
          </g>
        </svg> */}
      </div>
      <GlassWindowFrame
        className='h-[7rem] w-full overflow-auto'
        roundedFx={roundedFx['rounded']}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents className='space-x-[1rem flex w-full cursor-pointer flex-row'>
          {paletteController.state === PaletteState.HOME && (
            <>
              {galleryListController.state.objs.length === 0 && (
                <p className='font-bold text-slate-300'>No gallery found</p>
              )}
              {galleryListController.state.objs.map((gallery) => (
                <div
                  className='flex aspect-square h-full cursor-pointer items-center justify-center border-r-[1px] border-slate-300 border-opacity-30'
                  onClick={() => {
                    paletteController.actions.goToGallery(gallery);
                  }}
                >
                  <p className='font-bold text-slate-300'>{gallery.title}</p>
                </div>
              ))}
            </>
          )}
          {paletteController.state === PaletteState.COLLECTION && (
            <>
              {resourceListController.state.objs.length === 0 && (
                <p className='font-bold text-slate-300'>No resources found</p>
              )}
              {resourceListController.state.objs.map((resource) => (
                <div
                  onClick={() => {}}
                  className='flex aspect-square h-full cursor-pointer items-center justify-center bg-black'
                >
                  <img
                    className='h-full w-full object-cover'
                    src={resource.fileElem?.src}
                  />
                </div>
              ))}
            </>
          )}
          {paletteController.state === PaletteState.GALLERY && (
            <>
              {collectionListController.state.objs.length === 0 && (
                <p className='font-bold text-slate-300'>No collections found</p>
              )}
              {collectionListController.state.objs.map((collection) => (
                <div
                  onClick={() => {
                    paletteController.actions.goToCollection(collection);
                  }}
                  className='flex aspect-square h-full cursor-pointer items-center justify-center bg-black'
                >
                  <p className='font-bold text-slate-300'>{collection.title}</p>
                </div>
              ))}
            </>
          )}
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}

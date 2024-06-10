import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { cn } from '@/(utils)/cn';
import { DivInputProps } from '@/(types)/props/main';
import React, { useContext } from 'react';
import {
  ContextForCollectionResourceList,
  useControllerForCollectionResourceList,
} from '@/(server)/(controller)/gallery/collection/resource/list';
import { ContextForGalleryCollectionObj } from '@/(server)/(model)/gallery/collection/main';
import { ContextForGalleryCollectionMain, useControllerForGalleryCollectionMain } from '@/(server)/(controller)/gallery/collection/main';

interface InputProps extends DivInputProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export function CollectionContainer({ children, ...props }: InputProps) {
  const collection = useContext(ContextForGalleryCollectionObj);
  console.log(collection)
  const collectionMainController = useControllerForGalleryCollectionMain(
    collection.id,
  );
  console.log(collectionMainController.state.obj);
  const resourceListController = useControllerForCollectionResourceList(
    collection.id,
  );

  return (
    <ContextForGalleryCollectionMain.Provider value={collectionMainController}>
      <ContextForCollectionResourceList.Provider value={resourceListController}>
        <GlassWindowFrame
          name={CollectionContainer.name}
          roundedFx={roundedFx['rounded-xs']}
          className={cn(
            `aspect-[32/16] w-full  overflow-hidden rounded`,
            props.className,
          )}
        >
          <GlassWindowContents
            className='flex flex-row items-center'
            onClick={props.onClick}
          >
            {children}
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </ContextForCollectionResourceList.Provider>
    </ContextForGalleryCollectionMain.Provider>
  );
}

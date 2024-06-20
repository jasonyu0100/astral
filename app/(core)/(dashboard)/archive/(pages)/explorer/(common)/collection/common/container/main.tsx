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
import {
  ContextForGalleryCollectionMain,
  useControllerForGalleryCollectionMain,
} from '@/(server)/(controller)/gallery/collection/main';

interface InputProps extends DivInputProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export function CollectionContainer({ children, ...props }: InputProps) {
  const collection = useContext(ContextForGalleryCollectionObj);
  const collectionMainController = useControllerForGalleryCollectionMain(
    collection.id,
  );
  const resourceListController = useControllerForCollectionResourceList(
    collection.id,
  );
  return (
    <ContextForGalleryCollectionMain.Provider value={collectionMainController}>
      <ContextForCollectionResourceList.Provider value={resourceListController}>
        <GlassWindowFrame
          name={CollectionContainer.name}
          className={cn(`w-full`, props.className)}
        >
          <GlassWindowContents
            className='flex flex-col items-center'
            onClick={props.onClick}
          >
            {children}
          </GlassWindowContents>
        </GlassWindowFrame>
      </ContextForCollectionResourceList.Provider>
    </ContextForGalleryCollectionMain.Provider>
  );
}

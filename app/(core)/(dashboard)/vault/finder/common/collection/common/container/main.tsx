import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { DivInputProps } from '@/props/main';
import {
  ContextForGalleryCollectionMain,
  useControllerForGalleryCollectionMain,
} from '@/server/controller/gallery/collection/main';
import {
  ContextForCollectionResourceList,
  useControllerForCollectionResourceList,
} from '@/server/controller/gallery/collection/resource/list';
import { ContextForGalleryCollectionObj } from '@/server/model/gallery/collection/main';
import { ctwn } from '@/utils/cn';
import React, { useContext } from 'react';

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
          className={ctwn(`w-full`, props.className)}
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

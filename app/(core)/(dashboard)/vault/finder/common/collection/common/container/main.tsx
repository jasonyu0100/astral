import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
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
import { borderFx, glassFx, roundedFx } from '@/style/data';
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
          className='aspect-[3/2] w-full'
          roundedFx={roundedFx.rounded}
          borderFx={borderFx['border-all']}
        >
          <GlassWindowContents className='flex h-full w-full flex-col p-[1rem]'>
            {children}
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-20']} />
        </GlassWindowFrame>
      </ContextForCollectionResourceList.Provider>
    </ContextForGalleryCollectionMain.Provider>
  );
}

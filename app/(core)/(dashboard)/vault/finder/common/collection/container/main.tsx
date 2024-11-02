import {
  ContextForGalleryCollectionMain,
  useControllerForGalleryCollectionMain,
} from '@/architecture/controller/gallery/collection/main';
import {
  ContextForCollectionResourceList,
  useControllerForCollectionResourceList,
} from '@/architecture/controller/gallery/collection/resource/list';
import { ContextForGalleryCollectionObj } from '@/architecture/model/gallery/collection/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { DivInputProps } from '@/props/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import React, { useContext } from 'react';

interface InputProps extends DivInputProps {
  children?: React.ReactNode;
}

export function CollectionContainer({ children }: InputProps) {
  const collectionObj = useContext(ContextForGalleryCollectionObj);
  const collectionMainController = useControllerForGalleryCollectionMain(
    collectionObj.id,
  );
  const resourceListController = useControllerForCollectionResourceList(
    collectionObj.id,
  );
  return (
    <ContextForGalleryCollectionMain.Provider value={collectionMainController}>
      <ContextForCollectionResourceList.Provider value={resourceListController}>
        <GlassWindowFrame
          className='aspect-[3/2] w-full'
          roundedFx={roundedFx.rounded}
          borderFx={borderFx['border-all']}
        >
          <GlassWindowContents className='flex h-full w-full flex-col'>
            {children}
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-20']} />
        </GlassWindowFrame>
      </ContextForCollectionResourceList.Provider>
    </ContextForGalleryCollectionMain.Provider>
  );
}

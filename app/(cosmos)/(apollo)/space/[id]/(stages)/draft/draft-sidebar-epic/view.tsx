import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import { SidebarBody } from './modes/main';
import { HomeInterface } from './modes/home-view/main';
import { HomeGallery } from './modes/home-view/gallery/main';
import { CollectionResource } from './modes/collection-view/resource/main';
import { CollectionHeader } from './modes/collection-view/header/main';
import { CollectionHeaderSearch } from './modes/collection-view/header/search/main';
import { CollectionInterface } from './modes/collection-view/main';
import { GalleryCollection } from './modes/gallery-view/collection/main';
import { GalleryInterface } from './modes/gallery-view/main';
import { DraftSidebarContext, SidebarMode } from './main';
import { useContext } from 'react';
import { DraftSidebarHeader } from './header/main';
import { CollectionResourceAdd } from './modes/collection-view/add-resource/main';
import { GalleryCollectionAdd } from './modes/gallery-view/add-collection/main';
import { HomeGalleryAdd } from './modes/home-view/add-gallery/main';

export function DraftSidebarView() {
  const { sidebarMode, gallerys, collections, searchResults, resourceHandler } =
    useContext(DraftSidebarContext);

  return (
    <Layer
      displayName={DraftSidebarView.name}
      sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col']} space-y-[1rem] px-[1rem]`}
      backgroundStyle={backgroundStyles['glass-10']}
    >
      <DraftSidebarHeader />
      <SidebarBody>
        {sidebarMode === SidebarMode.Home && (
          <HomeInterface>
            {gallerys.map((gallery) => (
              <HomeGallery gallery={gallery} />
            ))}
            <HomeGalleryAdd onClick={() => alert('Not implemented')} />
          </HomeInterface>
        )}
        {sidebarMode === SidebarMode.Gallery && (
          <GalleryInterface>
            {collections.map((collection) => (
              <GalleryCollection collection={collection} />
            ))}
            <GalleryCollectionAdd
              onClick={() => {
                alert('NOT IMPLEMENTED');
              }}
            />
          </GalleryInterface>
        )}
        {sidebarMode === SidebarMode.Collection && (
          <CollectionInterface>
            <div className='h-full flex-col space-y-[1rem] w-full'>
              <CollectionResourceAdd
                onClick={() => {
                  alert('NOT IMPLEMENTED');
                }}
              />
              {searchResults.map((resource) => (
                <CollectionResource resource={resource} />
              ))}
            </div>
            <CollectionHeader>
              <CollectionHeaderSearch />
            </CollectionHeader>
          </CollectionInterface>
        )}
      </SidebarBody>
    </Layer>
  );
}

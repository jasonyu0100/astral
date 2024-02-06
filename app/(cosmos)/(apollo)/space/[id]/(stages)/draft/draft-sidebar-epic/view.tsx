import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import { SidebarBody } from './modes/main';
import { HomeInterface } from './modes/home/main';
import { HomeGallery } from './modes/home/gallery/main';
import { CollectionResource } from './modes/collection/resource/main';
import { CollectionHeader } from './modes/collection/header/main';
import { CollectionHeaderSearch } from './modes/collection/header/search/main';
import { CollectionInterface } from './modes/collection/main';
import { GalleryCollection } from './modes/gallery/collection/main';
import { GalleryInterface } from './modes/gallery/main';
import { DraftSidebarContext, SidebarMode } from './main';
import { useContext } from 'react';
import { DraftSidebarHeader } from './header/main';

export function DraftSidebarView() {
  const { sidebarMode, gallerys, collections, searchResults } =
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
          </HomeInterface>
        )}
        {sidebarMode === SidebarMode.Gallery && (
          <GalleryInterface>
            {collections.map((collection) => (
              <GalleryCollection collection={collection} />
            ))}
          </GalleryInterface>
        )}
        {sidebarMode === SidebarMode.Collection && (
          <CollectionInterface>
            <CollectionHeader>
              <CollectionHeaderSearch />
            </CollectionHeader>
            {searchResults.map((resource) => (
              <CollectionResource resource={resource} />
            ))}
          </CollectionInterface>
        )}
      </SidebarBody>
    </Layer>
  );
}

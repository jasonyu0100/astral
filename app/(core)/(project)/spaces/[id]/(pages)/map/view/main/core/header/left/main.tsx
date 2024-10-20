import { ContextForGalleryList } from '@/(server)/controller/gallery/list';
import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { AstralCalendarIcon } from '@/icons/calendar/main';
import { AstralDownloadIcon } from '@/icons/download/main';
import { AstralFolderIcon } from '@/icons/folder/main';
import { AstralFullscreenIcon } from '@/icons/fullscreen/main';
import { AstralManageSearchIcon } from '@/icons/manage-search/main';
import { AstralSaveIcon } from '@/icons/save/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { AstralSortIcon } from '@/icons/sort/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { BarDividerIndicator } from '@/ui/indicator/bar/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesMap,
  SpacesMapSidebarContentMode,
  SpacesMapSidebarVisibility,
} from '../../../../../controller/main';
import { ContextForSpacesMapModals } from '../../../../../modal/controller/main';

export function SpacesMapHeaderLeft() {
  const {
    state: { sidebarVisibility, selectedIdeas },
    actions: {
      updateSidebarContentMode,
      goToGallery,
      updateSidebarVisibility,
      autoSort,
      selectAll,
    },
  } = useContext(ContextForSpacesMap);
  const user = useGlobalUser((state) => state.user);
  const space = useContext(ContextForSpaceMain);
  const galleryController = useContext(ContextForGalleryList);
  const modalController = useContext(ContextForSpacesMapModals);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
          'rotate-180 transform':
            sidebarVisibility === SpacesMapSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          updateSidebarVisibility(
            sidebarVisibility === SpacesMapSidebarVisibility.CLOSED
              ? SpacesMapSidebarVisibility.OPEN
              : SpacesMapSidebarVisibility.CLOSED,
          );
        }}
      />
      <BarDividerIndicator />
      <AstralCalendarIcon
        onClick={() => {
          goToGallery(
            galleryController.actions.stateActions.find(user.journalId),
          );
          updateSidebarContentMode(SpacesMapSidebarContentMode.EXPLORER);
        }}
      />
      <AstralFolderIcon
        onClick={() => {
          goToGallery(
            galleryController.actions.stateActions.find(
              space.state.obj.galleryId,
            ),
          );
          updateSidebarContentMode(SpacesMapSidebarContentMode.EXPLORER);
        }}
      />
      <BarDividerIndicator />
      <AstralManageSearchIcon
        onClick={() => {
          modalController.addSearchIdeaController.open();
        }}
      />
      <AstralSortIcon className='fill-slate-300' onClick={() => autoSort()} />
      <AstralFullscreenIcon
        onClick={() => selectAll()}
        className={
          selectedIdeas.length >= ideaListController.state.objs.length &&
          selectedIdeas.length > 0
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
      />
      <AstralDownloadIcon
        onClick={() => {
          alert('Coming Soon...');
        }}
      />
      <BarDividerIndicator />
      <AstralSaveIcon
        onClick={() => {
          ideaListController.actions.editActions.sync().then(() => {
            alert('save all');
          });
        }}
      />{' '}
      {/* <AstralBubbleIcon
        className={
          connectionMode === SpacesMapConnectionMode.DEFAULT
            ? 'fill-blue-500'
            : 'fill-slate-300'
        }
        onClick={() => {
          if (connectionMode === SpacesMapConnectionMode.DEFAULT) {
            updateConnectionMode(SpacesMapConnectionMode.BUBBLE);
          } else {
            updateConnectionMode(SpacesMapConnectionMode.DEFAULT);
          }
        }}
      />
      <AstralPersonIcon
        className={
          peopleMode === SpacesMapPeopleMode.OFF
            ? 'fill-slate-300'
            : 'fill-blue-500'
        }
        onClick={() => {
          if (peopleMode === SpacesMapPeopleMode.OFF) {
            updatePeopleMode(SpacesMapPeopleMode.ON);
          } else {
            updatePeopleMode(SpacesMapPeopleMode.OFF);
          }
        }}
      />
      <BarDividerIndicator /> */}
    </div>
  );
}

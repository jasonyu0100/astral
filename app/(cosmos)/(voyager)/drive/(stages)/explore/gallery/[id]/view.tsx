'use client';

import { DriveWrapper } from '../../home/home-epic/wrapper/main';
import { DriveController } from '../../home/home-epic/main';
import { DriveBreadcrumbs } from '../../(common)/breadcrumb/main';
import { DriveBreadcrumbItem } from '../../(common)/breadcrumb/item/main';
import { DriveBreadcrumbDivider } from '../../(common)/breadcrumb/divider/main';
import { GalleryCollectionGrid } from './gallery-epic/grid/main';
import { driveMap } from '../../../../map';
import { GalleryCollection } from './gallery-epic/grid/collection/main';
import { GalleryCollectionAdd } from './gallery-epic/grid/add/main';
import { useContext, useState } from 'react';
import { ExploreGalleryContext } from './page';
import { FileObj } from '@/tables/file/main';
import { Modal } from '@/(common)/modal/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormUploadFiles } from '@/(common)/form/upload-files/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormDescription } from '@/(common)/form/description/main';

export function DriveSectionView() {
  const { gallery, collections, addCollection } = useContext(
    ExploreGalleryContext,
  );
  const [showModal, changeShowModal] = useState(false);
  const [name, changeName] = useState('');
  const [files, changeFiles] = useState([] as FileObj[]);

  return (
    <DriveWrapper>
      <Modal isOpen={showModal} onClose={() => changeShowModal(false)}>
        <FormContainer>
          <FormTitle>Create Collection</FormTitle>
          <FormBody>
            <FormDescription>Create your collection here</FormDescription>
            <FormInput
              placeholder='Name'
              title='Name'
              value={name}
              onChange={(e) => changeName(e.target.value)}
            />
            <FormUploadFiles onChange={(files) => changeFiles(files)} />
          </FormBody>
          <FormFooter>
            <FormButton
              onClick={() => {
                addCollection(name, files);
                changeShowModal(false);
                alert('Submit Idea');
              }}
            >
              Submit Idea
            </FormButton>
          </FormFooter>
        </FormContainer>
      </Modal>
      <DriveController>
        <DriveBreadcrumbs>
          <DriveBreadcrumbItem
            href={driveMap.drive.explore.link}
            active={false}
          >
            Home
          </DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
          <DriveBreadcrumbItem
            active={true}
            href={driveMap.drive.explore.gallery.id.link(gallery.id)}
          >
            {gallery.title}
          </DriveBreadcrumbItem>
        </DriveBreadcrumbs>
        {gallery !== null && (
          <GalleryCollectionGrid>
            {collections.map((collection) => (
              <GalleryCollection
                collection={collection}
                href={driveMap.drive.explore.collection.id.link(collection.id)}
              />
            ))}
            <GalleryCollectionAdd onClick={() => changeShowModal(true)} />
          </GalleryCollectionGrid>
        )}
      </DriveController>
    </DriveWrapper>
  );
}

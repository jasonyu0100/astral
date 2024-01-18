'use client';

import { DriveController } from '../../home/home-epic/main';
import { DriveBreadcrumbs } from '../../(common)/breadcrumb/main';
import { DriveBreadcrumbItem } from '../../(common)/breadcrumb/item/main';
import { DriveBreadcrumbDivider } from '../../(common)/breadcrumb/divider/main';
import { driveMap } from '../../../../map';
import { CollectionResourceGrid } from './collection-epic/grid/main';
import { CollectionResource } from './collection-epic/grid/file/main';
import { CollectionResourceAdd } from './collection-epic/grid/add/main';
import { ExploreCollectionContext } from './page';
import { useContext, useState } from 'react';
import { FormButton } from '@/(common)/form/button/main';
import { FormInput } from '@/(common)/form/input/main';
import { Modal } from '@/(common)/modal/main';
import { FormUploadFile } from '@/(common)/form/upload-file/main';
import { FormTextArea } from '@/(common)/form/area/main';
import { FileObj } from '@/tables/file/main';
import { DriveWrapper } from '../../home/home-epic/wrapper/main';
import { FormContainer } from '@/(common)/form/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormDescription } from '@/(common)/form/description/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormTitle } from '@/(common)/form/title/main';

export default function DriveFolderView() {
  const { gallery, collection, resources, resourceHandler } = useContext(
    ExploreCollectionContext,
  );
  const [name, changeName] = useState('');
  const [description, changeDescription] = useState('');
  const [file, changeFile] = useState({} as FileObj);
  const [showModal, changeShowModal] = useState(false);

  return (
    <DriveWrapper>
      <Modal isOpen={showModal} onClose={() => changeShowModal(false)}>
        <FormContainer>
          <FormTitle>Upload File</FormTitle>
          <FormBody>
            <FormDescription>Upload your file here</FormDescription>
            <FormInput
              placeholder='Name'
              title='Name'
              value={name}
              onChange={(e) => changeName(e.target.value)}
            />
            <FormTextArea
              title='Description'
              rows={5}
              value={description}
              onChange={(e) => changeDescription(e.target.value)}
              style={{ resize: 'none' }}
            />
            <FormUploadFile onChange={(file) => changeFile(file)} />
          </FormBody>
          <FormFooter>
            <FormButton
              onClick={() => {
                resourceHandler.addResource(name, description, file);
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
            active={false}
            href={driveMap.drive.explore.gallery.id.link(gallery.id)}
          >
            {gallery.title}
          </DriveBreadcrumbItem>
          <DriveBreadcrumbDivider />
          <DriveBreadcrumbItem
            active={true}
            href={driveMap.drive.explore.collection.id.link(collection.id)}
          >
            {collection.name}
          </DriveBreadcrumbItem>
        </DriveBreadcrumbs>
        <CollectionResourceGrid>
          <CollectionResourceAdd onClick={() => changeShowModal(true)} />
          {resources.map((resource) => (
            <CollectionResource resource={resource} />
          ))}
        </CollectionResourceGrid>
      </DriveController>
    </DriveWrapper>
  );
}

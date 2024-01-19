'use client';
import { HomeGallery } from './home-epic/grid/gallery/main';
import { HomeGalleryAdd } from './home-epic/grid/add/main';
import { DriveWrapper } from './home-epic/wrapper/main';
import { DriveController } from './home-epic/main';
import { DriveBreadcrumbs } from '../(common)/breadcrumb/main';
import { DriveBreadcrumbItem } from '../(common)/breadcrumb/item/main';
import { HomeGalleryGrid } from './home-epic/grid/main';
import { driveMap } from '../../../map';
import { ExploreHomeContext } from './page';
import { useContext, useState } from 'react';
import { FormTextArea } from '@/(common)/form/area/main';
import { FormInput } from '@/(common)/form/input/main';
import { Modal } from '@/(common)/modal/main';
import { FormUploadFile } from '@/(common)/form/upload-file/main';
import { FileObj } from '@/tables/file/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormTitle } from '@/(common)/form/title/main';
import { FormDescription } from '@/(common)/form/description/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormContainer } from '@/(common)/form/main';

export function ExploreView() {
  const { gallerys, galleryHandler } = useContext(ExploreHomeContext);
  const [showModal, changeShowModal] = useState(false);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [thumbnail, changeThumbnail] = useState({} as FileObj);

  return (
    <DriveWrapper>
      <Modal isOpen={showModal} onClose={() => changeShowModal(false)}>
        <FormContainer>
          <FormTitle>Create Gallery</FormTitle>
          <FormBody>
            <FormDescription>Create your gallery here!</FormDescription>
            <FormInput
              placeholder='Title'
              title='Title'
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
            <FormTextArea
              title='Description'
              rows={5}
              value={description}
              onChange={(e) => changeDescription(e.target.value)}
              style={{ resize: 'none' }}
            />
            <FormUploadFile onChange={(file) => changeThumbnail(file)} />
          </FormBody>
          <FormFooter>
            <FormButton
              onClick={() => {
                galleryHandler.queryCreateGallery(title, description, thumbnail);
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
          <DriveBreadcrumbItem href={driveMap.drive.link} active={true}>
            Home
          </DriveBreadcrumbItem>
        </DriveBreadcrumbs>
        <HomeGalleryGrid>
          {gallerys.map((gallery) => (
            <HomeGallery
              gallery={gallery}
              href={driveMap.drive.explore.gallery.id.link(gallery.id)}
            />
          ))}
          <HomeGalleryAdd
            onClick={() => {
              changeShowModal(true);
            }}
          />
        </HomeGalleryGrid>
      </DriveController>
    </DriveWrapper>
  );
}

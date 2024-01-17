"use client";

import { DriveWrapper } from "../../home/home-epic/wrapper/main";
import { DriveController } from "../../home/home-epic/main";
import { DriveBreadcrumbs } from "../../(common)/breadcrumb/main";
import { DriveBreadcrumbItem } from "../../(common)/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "../../(common)/breadcrumb/divider/main";
import { GalleryCollectionGrid } from "./gallery-epic/grid/main";
import { driveMap } from "../../../../map";
import { GalleryCollection } from "./gallery-epic/grid/collection/main";
import { GalleryCollectionAdd } from "./gallery-epic/grid/add/main";
import { useContext, useState } from "react";
import { ExploreGalleryContext } from "./page";
import { FileObj } from "@/tables/file/main";
import { Modal } from "@/(common)/modal/main";
import { InputProps } from "@/(common)/form/button/main";
import { FormInput } from "@/(common)/form/input/main";
import { UploadFilesInput } from "@/(common)/form/upload-files/main";

export function DriveSectionView() {
  const { gallery, collections, addCollection } = useContext(
    ExploreGalleryContext
  );
  const [showModal, changeShowModal] = useState(true);
  const [name, changeName] = useState("");
  const [files, changeFiles] = useState([] as FileObj[]);

  return (
    <DriveWrapper>
      <Modal isOpen={showModal} onClose={() => changeShowModal(false)}>
        <div className="flex flex-col items-center w-full h-full space-y-[2rem]">
          <h2 className="text-4xl font-extraBold mb-4">Create Collection</h2>
          <div
            className="w-full flex flex-col space-y-[2rem] overflow-auto py-[1rem] pr-[1rem]"
            style={{ height: "100%" }}
          >
            <div className="w-full">
              <p className="font-bold px-[1rem] pb-[2rem]">
                Create your collection here
              </p>
            </div>
            <FormInput
              placeholder="Name"
              title="Name"
              value={name}
              onChange={(e) => changeName(e.target.value)}
            />
            <UploadFilesInput onChange={(files) => changeFiles(files)} />
          </div>
          <div className="flex flex-col w-full mt-auto">
            <FormButton
              onClick={() => {
                addCollection(name, files);
                changeShowModal(false);
                alert("Submit Idea");
              }}
            >
              Submit Idea
            </FormButton>
          </div>
        </div>
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
            <GalleryCollectionAdd onClick={() => changeShowModal(true)}/>
          </GalleryCollectionGrid>
        )}
      </DriveController>
    </DriveWrapper>
  );
}

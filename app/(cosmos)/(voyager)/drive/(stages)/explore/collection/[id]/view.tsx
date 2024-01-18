"use client";

import { DriveController } from "../../home/home-epic/main";
import { DriveBreadcrumbs } from "../../(common)/breadcrumb/main";
import { DriveBreadcrumbItem } from "../../(common)/breadcrumb/item/main";
import { DriveBreadcrumbDivider } from "../../(common)/breadcrumb/divider/main";
import { driveMap } from "../../../../map";
import { CollectionResourceGrid } from "./collection-epic/grid/main";
import { CollectionResource } from "./collection-epic/grid/file/main";
import { CollectionResourceAdd } from "./collection-epic/grid/add/main";
import { ExploreCollectionContext } from "./page";
import { resourceTable } from "@/tables/resource/table";
import { useContext, useState } from "react";
import { FormButton } from "@/(common)/form/button/main";
import { FormInput } from "@/(common)/form/input/main";
import { Modal } from "@/(common)/modal/main";
import { UploadFileInput } from "@/(common)/form/upload-file/main";
import { FormTextArea } from "@/(common)/form/area/main";
import { FileObj } from "@/tables/file/main";
import { DriveWrapper } from "../../home/home-epic/wrapper/main";

export default function DriveFolderView() {
  const { gallery, collection, resources, resourceHandler } = useContext(
    ExploreCollectionContext
  );
  const [name, changeName] = useState("");
  const [description, changeDescription] = useState("");
  const [file, changeFile] = useState({} as FileObj);
  const [showModal, changeShowModal] = useState(false);

  return (
    <DriveWrapper>
      <Modal isOpen={showModal} onClose={() => changeShowModal(false)}>
        <div className="flex flex-col items-center w-full h-full space-y-[2rem]">
          <h2 className="text-4xl font-extraBold mb-4">Upload File</h2>
          <div
            className="w-full flex flex-col space-y-[2rem] overflow-auto py-[1rem] pr-[1rem]"
            style={{ height: "100%" }}
          >
            <div className="w-full">
              <p className="font-bold px-[1rem] pb-[2rem]">
                Upload your file here
              </p>
            </div>
            <FormInput
              placeholder="Name"
              title="Name"
              value={name}
              onChange={(e) => changeName(e.target.value)}
            />
            <FormTextArea
              title="Description"
              rows={5}
              value={description}
              onChange={(e) => changeDescription(e.target.value)}
              style={{ resize: "none" }}
            />
            <UploadFileInput onChange={(file) => changeFile(file)} />
          </div>
          <div className="flex flex-col w-full mt-auto">
            <FormButton
              onClick={() => {
                resourceHandler.addResource(name, description, file);
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

"use client";
import { HomeGallery } from "./home-epic/grid/gallery/main";
import { HomeGalleryAdd } from "./home-epic/grid/add/main";
import { DriveWrapper } from "./home-epic/wrapper/main";
import { DriveController } from "./home-epic/main";
import { DriveBreadcrumbs } from "../(common)/breadcrumb/main";
import { DriveBreadcrumbItem } from "../(common)/breadcrumb/item/main";
import { HomeGalleryGrid } from "./home-epic/grid/main";
import { driveMap } from "../../../map";
import { ExploreHomeContext } from "./page";
import { useContext, useState } from "react";
import { FormTextArea } from "@/(common)/form/area/main";
import { InputProps } from "@/(common)/form/button/main";
import { FormInput } from "@/(common)/form/input/main";
import { Modal } from "@/(common)/modal/main";
import { UploadFileInput } from "@/(common)/form/upload-file/main";
import { FileObj } from "@/tables/file/main";

export function ExploreView() {
  const { gallerys, addGallery } = useContext(ExploreHomeContext);
  const [showModal, changeShowModal] = useState(true);
  const [title, changeTitle] = useState("");
  const [description, changeDescription] = useState("");
  const [thumbnail, changeThumbnail] = useState({} as FileObj)

  return (
    <DriveWrapper>
      <Modal isOpen={showModal} onClose={() => changeShowModal(false)}>
        <div className="flex flex-col items-center w-full h-full space-y-[2rem]">
          <h2 className="text-4xl font-extraBold mb-4">Create Gallery</h2>
          <div
            className="w-full flex flex-col space-y-[2rem] overflow-auto py-[1rem] pr-[1rem]"
            style={{ height: "100%" }}
          >
            <div className="w-full">
              <p className="font-bold px-[1rem] pb-[2rem]">
                Create your gallery here!
              </p>
            </div>
            <FormInput
              placeholder="Title"
              title="Title"
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
            <FormTextArea
              title="Description"
              rows={5}
              value={description}
              onChange={(e) => changeDescription(e.target.value)}
              style={{ resize: "none" }}
            />
            <UploadFileInput onChange={(file) => changeThumbnail(file)} />
          </div>
          <div className="flex flex-col w-full mt-auto">
            <FormButton
              onClick={() => {
                addGallery(title, description, thumbnail);
                changeShowModal(false)
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

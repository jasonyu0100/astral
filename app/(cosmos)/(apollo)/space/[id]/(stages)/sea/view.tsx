import { useState } from "react";
import { SeaWrapper } from "./sea-epic/wrapper/main";
import { Modal } from "@/(common)/modal/main";
import { InputProps } from "@/(common)/form/button/main";
import { FormTextArea } from "@/(common)/form/area/main";
import { FormSelect } from "@/(common)/form/select/main";
import { FormInput } from "@/(common)/form/input/main";
import { UploadFileInput } from "@/(common)/form/upload-file/main";
import { FileObj } from "@/tables/file/main";
import { UploadFilesInput } from "@/(common)/form/upload-files/main";

export function SeaView() {
  const [showTestModal, changeShowTestModal] = useState(true);

  return (
    <SeaWrapper>
      <button
        className="p-[1rem] bg-blue-500"
        onClick={() => changeShowTestModal(true)}
      >
        Click Me
      </button>
      <Modal isOpen={showTestModal} onClose={() => changeShowTestModal(false)}>
        <div className="flex flex-col items-center w-full h-full space-y-[2rem]">
          <h2 className="text-4xl font-extraBold mb-4">Modal Title</h2>
          <div className="w-full flex flex-col space-y-[2rem] overflow-auto py-[1rem] pr-[1rem]">
            <div className="w-full">
              <p className="font-bold px-[1rem] pb-[2rem]">
                Modal content goes here. Modal content goes here. Modal content
                goes here. Modal content goes here. Modal content goes here.
                Modal content goes here.
              </p>
            </div>
            <FormSelect title={"Categories"}>
              <option value={"Hello"}>Hello</option>
              <option value={"dsaads"}>dasdas</option>
              <option value={"gfdaafds"}>adsdsaads</option>
            </FormSelect>
            <FormInput placeholder="Title" title="Title" />
            <FormInput placeholder="Description" title="Description" />
            <FormInput placeholder="Name" title="Name" />
            <FormTextArea title="Stuff" rows={5} style={{ resize: "none" }} />
            <UploadFileInput onChange={(file: FileObj) => {}} />
            <UploadFilesInput onChange={(files: FileObj[]) => {}} />
          </div>
          <div className="flex flex-col w-full mt-auto">
            <FormButton onClick={() => alert("Submit Idea")}>
              Submit Idea
            </FormButton>
          </div>
        </div>
      </Modal>
      {/* <SeaMain>
        <SeaStory />
      </SeaMain>
      <SeaSidebar>
        <div
          className="flex flex-col w-full overflow-auto"
          style={{ height: "100%" }}
        >
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
        </div>
      </SeaSidebar> */}
    </SeaWrapper>
  );
}

import { useState } from "react";
import { SeaWrapper } from "./sea-epic/wrapper/main";
import { Modal } from "@/(common)/modal/main";
import { FormButton } from "@/(common)/form/button/main";
import { FormTextArea } from "@/(common)/form/area/main";
import { FormSelect } from "@/(common)/form/select/main";
import { FormInput } from "@/(common)/form/input/main";

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
          <h2 className="text-3xl font-bold mb-4">Modal Title</h2>
          <div className="w-full">
            <p className="mb-4">Modal content goes here.</p>
          </div>
          <div
            className="w-full flex flex-col space-y-[2rem] overflow-auto py-[2rem]"
            style={{ height: "100%" }}
          >
            <FormSelect>
              <option value={"Hello"}>Hello</option>
              <option value={"dsaads"}>dasdas</option>
              <option value={"gfdaafds"}>adsdsaads</option>
            </FormSelect>
            <FormInput placeholder="Title" title="title" />
            <FormInput placeholder="Description" title="Description" />
            <FormInput placeholder="Name" title="Name" />
            <FormTextArea
              placeholder="Stuff"
              rows={5}
              style={{ resize: "none" }}
            />
            <div className="flex flex-col">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="multiple_files"
              >
                Upload multiple files
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="multiple_files"
                type="file"
                multiple
              ></input>
            </div>
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

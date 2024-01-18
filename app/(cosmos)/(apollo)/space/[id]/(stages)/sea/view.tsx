import { useState } from "react";
import { SeaWrapper } from "./sea-epic/wrapper/main";
import { Modal } from "@/(common)/modal/main";
import { InputProps } from "@/(common)/form/button/main";
import { FormTextArea } from "@/(common)/form/area/main";
import { FormSelect } from "@/(common)/form/select/main";
import { FormInput } from "@/(common)/form/input/main";
import { FormUploadFile } from "@/(common)/form/upload-file/main";
import { FileObj } from "@/tables/file/main";
import { FormUploadFiles } from "@/(common)/form/upload-files/main";

export function SeaView() {
  const [showTestModal, changeShowTestModal] = useState(true);

  return (
    <SeaWrapper>
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

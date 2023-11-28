import ShowcaseComponent from "@ui/showcase";
import DefaultFileInput from "./default-file-input";
import HelperFileInput from "./helper-file-input";
import MultiFileInput from "./multi-file-input";
import SizeFileInput from "./size-file-input";
import DropzoneFileInput from "./dropzone-file-input";

export default function FileInputPage() {
  return (
    <div>
      <ShowcaseComponent title="Default File Input">
        <DefaultFileInput/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Helper File Input">
        <HelperFileInput/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Multi File Input">
        <MultiFileInput/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Size File Input">
        <SizeFileInput/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Dropzone File Input">
        <DropzoneFileInput/>
      </ShowcaseComponent>
    </div>
  );
}
import ShowcaseComponent from "@ui/showcase";
import DefaultInputField from "./default-input-field";
import SizeInputField from "./size-input-field";
import ValidationInputField from "./validation-input-field";
import GroupInputField from "./group-input-field";
import HelperInputField from "./helper-input-field";
import DropDownInputField from "./drop-down-input-field";
import SearchInputField from "./search-input-field";

export default function MyForm() {
  return (
    <div>
      <ShowcaseComponent title="Default Input Field">
        <DefaultInputField/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Size Input Field">
        <SizeInputField/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Validation Input Field">
        <ValidationInputField/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Group Input Field">
        <GroupInputField/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Helper Input Field">
        <HelperInputField/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Search Input Field">
        <SearchInputField/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Drop Down Input Field">
        <DropDownInputField/>
      </ShowcaseComponent>
    </div>
  );
}

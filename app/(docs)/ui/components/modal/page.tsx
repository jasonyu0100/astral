import { ShowcaseWindowComponent } from "@ui/showcase";
import DefaultModal from "./default-modal";
import FormModal from "./form-modal";
import PopupModal from "./popup-modal";

export default function Modal() {
  return (
    <div>
      <ShowcaseWindowComponent title="Default Modal">
        <DefaultModal />
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Form Modal">
        <FormModal />
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Popup Modal">
        <PopupModal />
      </ShowcaseWindowComponent>
    </div>
  );
}

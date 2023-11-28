import ShowcaseComponent from "@ui/showcase";
import DefaultToast from "./default-toast";
import ColorToast from "./color-toast";
import SimpleToast from "./simple-toast";
import UndoToast from "./undo-toast";
import MessageToast from "./message-toast";
import PushNotificationToast from "./push-notification-toast";
import InteractiveToast from "./interactive-toast";

export default function ToastPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Toast">
        <DefaultToast />
      </ShowcaseComponent>
      <ShowcaseComponent title="Color Toast">
        <ColorToast />
      </ShowcaseComponent>

      <ShowcaseComponent title="Simple Toast">
        <SimpleToast />
      </ShowcaseComponent>
      <ShowcaseComponent title="Undo Toast">
        <UndoToast />
      </ShowcaseComponent>
      <ShowcaseComponent title="Message Toast">
        <MessageToast />
      </ShowcaseComponent>
      <ShowcaseComponent title="Push Notification Toast">
        <PushNotificationToast />
      </ShowcaseComponent>
      <ShowcaseComponent title="Interactive Toast">
        <InteractiveToast />
      </ShowcaseComponent>
    </div>
  );
}

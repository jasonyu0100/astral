import ShowcaseComponent from "@ui/showcase";
import DefaultTextArea from "./default-text-area";
import ChatRoomTextArea from "./chat-room-text-area";
import CommentBoxTextArea from "./comment-box-text-area";
import WysiwygTextArea from "./wysiwyg-text-area";

export default function MyComponent() {
  return (
    <div>
      <ShowcaseComponent title="Default Text Area">
        <DefaultTextArea/>
      </ShowcaseComponent>
      <ShowcaseComponent title="WYSIWYG Text Area">
        <WysiwygTextArea/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Comment Box Text Area">
        <CommentBoxTextArea/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Chat Room Text Area">
        <ChatRoomTextArea/>
      </ShowcaseComponent>
    </div>
  );
}
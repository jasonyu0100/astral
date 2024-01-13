import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles, borderStyles } from "@/(pages)/(common)/styles/data";
import { useContext, useState } from "react";
import { StormContext } from "../../../../page";

export function StormChatMessageInput() {
  const { chatHandler } = useContext(StormContext);
  const [inputMessage, changeInputMessage] = useState("");
  return (
    <Layer
      displayName={StormChatMessageInput.name}
      sizeStyle="max-w-[600px] flex-grow h-[50px]"
      backgroundStyle={backgroundStyles["glass-10"]}
      borderStyle={borderStyles["rounded-full"]}
    >
      <input
        className="w-full h-full px-[2rem] text-white font-bold outline-none bg-transparent"
        onClick={(e) => {
          chatHandler.sendMessage(inputMessage);
          changeInputMessage("");
        }}
        value={inputMessage}
      />
    </Layer>
  );
}

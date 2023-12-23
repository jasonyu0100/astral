"use client";

export interface BoardLoomButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {}

import { setup, isSupported } from "@loomhq/record-sdk";
import { oembed } from "@loomhq/loom-embed";
import { useEffect, useState } from "react";
import BoardLoomIcon from "../../../../../icons/loom/main";
const PUBLIC_APP_ID = "6d3d3c5b-1703-480a-9f11-183bd647c09c";
const BUTTON_ID = "loom-record-sdk-button";

export default function BoardLoomButton({ ...props }: BoardLoomButtonProps) {
  const [videoHTML, setVideoHTML] = useState("");

  useEffect(() => {
    async function setupLoom() {
      const { supported, error } = await isSupported();

      if (!supported) {
        console.warn(`Error setting up Loom: ${error}`);
        return;
      }

      const button = document.getElementById(BUTTON_ID);

      if (!button) {
        return;
      }

      const { configureButton } = await setup({
        publicAppId: PUBLIC_APP_ID,
      });

      const sdkButton = configureButton({ element: button });

      sdkButton.on("insert-click", async (video) => {
        const { html } = await oembed(video.sharedUrl, { width: 400 });
        setVideoHTML(html);
      });
    }

    setupLoom();
  }, []);

  return (
    <>
      <button id={BUTTON_ID} {...props}>
        <BoardLoomIcon />
      </button>
      <div dangerouslySetInnerHTML={{ __html: videoHTML }}></div>
    </>
  );
}

"use client";
import { useContext } from "react";
import { PortalWrapper } from "../polaroid-epic/container/wrapper/main";
import { PortalContainer } from "../polaroid-epic/container/main";
import { PortalGalleryView } from "../polaroid-epic/container/gallery/main";
import { PortalContainerFlip } from "../polaroid-epic/container/flip/main";
import { PolaroidContext } from "../polaroid-epic/handler/polaroid/main";
import { PortalRegisterForm } from "./form/main";

export function RegisterView() {
  const { flipped } = useContext(PolaroidContext)

  return (
    <PortalWrapper>
      <PortalContainer>
        {!flipped ? (
          <PortalGalleryView/>
        ) : (
          <PortalRegisterForm />
        )}
      </PortalContainer>
      <PortalContainerFlip/>
    </PortalWrapper>
  );
}


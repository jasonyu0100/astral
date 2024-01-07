"use client";
import { useEffect, useRef, useState } from "react";
import { PortalContainer } from "../portal-epic/container/main";
import { PortalContainerFlip } from "../portal-epic/container/flip/main";
import { PortalWrapper } from "../portal-epic/container/wrapper/main";
import { PortalGalleryView } from "../portal-epic/container/gallery/main";
import { PortalGalleryPiece } from "../portal-epic/container/gallery/piece/main";
import { PortalGalleryTitle } from "../portal-epic/container/gallery/title/main";
import { portalModel } from "../model/main";
import { PortalLoginForm } from "./form/main";

export function LoginView() {
  const categories = portalModel.categories.example
  const [flipped, changeFlipped] = useState(false);
  const [categoryIndex, changeCategoryIndex] = useState(0);
  const [variant, changeVariant] = useState("m");
  const [imageState, changeImageState] = useState("show");

  const duration = 5000;
  const interval = useRef(0);

  function categoryIncrementCall() {
    changeCategoryIndex(
      (categoryIndex) => (categoryIndex + 1) % portalModel.categories.example.length
    );
    changeVariant((variant) => (variant === "m" ? "f" : "m"));
  }

  function flipPolaroid() {
    if (!flipped) {
      clearInterval(interval.current);
    }
    changeFlipped(!flipped);
  }

  function tapPolaroid() {
    changeImageState("flash");
    changeCategoryIndex(
      (categoryIndex) => (categoryIndex + 1) % categories.length
    );
    setTimeout(() => {
      changeImageState("show");
    }, 300);
    clearInterval(interval.current);
  }

  useEffect(() => {
    if (!flipped) {
      let temp = window.setInterval(categoryIncrementCall, duration);
      interval.current = temp;
      return () => clearInterval(interval.current);
    }
  }, [flipped]);

  return (
    <PortalWrapper>
      <PortalContainer>
        {!flipped ? (
          <PortalGalleryView onClick={tapPolaroid}>
            <PortalGalleryPiece
              imageState={imageState}
              src={`/landing/${categories[categoryIndex]}-${variant}.png`}
            />
            <PortalGalleryTitle>{categories[categoryIndex]}</PortalGalleryTitle>
          </PortalGalleryView>
        ) : (
          <PortalLoginForm/>
        )}
      </PortalContainer>
      <PortalContainerFlip onClick={flipPolaroid}>FLIP ME</PortalContainerFlip>
    </PortalWrapper>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import { PortalContainer } from "./(common)/container/main";
import { PortalContainerFlip } from "./(common)/container/flip/main";
import { PortalWrapper } from "./(common)/container/wrapper/main";
import { PortalGalleryView } from "./(common)/container/gallery/main";
import { PortalGalleryPiece } from "./(common)/container/gallery/piece/main";
import { PortalGalleryTitle } from "./(common)/container/gallery/title/main";
import { PortalForm } from "./(common)/container/form/main";
import { PortalFormBody } from "./(common)/container/form/body/main";
import { PortalFormInput } from "./(common)/container/form/body/input/main";
import { PortalFormSelect } from "./(common)/container/form/body/select/main";
import { PortalFormAction } from "./(common)/container/form/action/main";
import { worksMap } from "@/(pages)/(cosmos)/(voyager)/works/map";

export function RegisterView() {
  const categories = [
    "star",
    "creator",
    "writer",
    "creative",
    "personality",
    "musician",
    "photographer",
    "dj",
    "mover",
    "artist",
    "storyteller",
    "performer",
    "illustrator",
    "producer",
    "designer",
    "architect",
  ];

  const [flipped, changeFlipped] = useState(false);
  const [categoryIndex, changeCategoryIndex] = useState(0);
  const [variant, changeVariant] = useState("m");
  const [imageState, changeImageState] = useState("show");

  const [tag, changeTag] = useState("");
  const [fname, changeFname] = useState("");
  const [lname, changeLname] = useState("");
  const [email, changeEmail] = useState("");
  const [role, changeRole] = useState("");
  const [password, changePassword] = useState("");
  const [rePassword, changeRePassword] = useState("");

  useEffect(() => {
    changeRole(categories[categoryIndex]);
  }, [categoryIndex]);

  const duration = 5000;
  const interval = useRef(0);

  function categoryIncrementCall() {
    changeCategoryIndex(
      (categoryIndex) => (categoryIndex + 1) % categories.length
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
          <PortalForm>
            <PortalFormBody>
              <PortalFormInput
                onChange={(e) => changeTag(e.target.value)}
                value={tag}
                placeholder="J22"
                type="text"
              />
              <PortalFormInput
                value={fname}
                onChange={(e) => changeFname(e.target.value)}
                placeholder="Jason"
                type="text"
              />
              <PortalFormInput
                value={lname}
                onChange={(e) => changeLname(e.target.value)}
                placeholder="Yu"
                type="text"
              />
              <PortalFormInput
                value={email}
                onChange={(e) => changeEmail(e.target.value)}
                placeholder="example@email.com"
                type="text"
              />
              <PortalFormSelect
                value={role}
                onChange={(e) => {
                  changeRole(e.target.value);
                  changeCategoryIndex(categories.indexOf(e.target.value));
                }}
              >
                {categories.map((category) => (
                  <option value={category}>{category}</option>
                ))}
              </PortalFormSelect>
              <PortalFormInput
                value={password}
                onChange={(e) => changePassword(e.target.value)}
                placeholder="Password"
                type="password"
              />
              <PortalFormInput
                type="password"
                value={rePassword}
                onChange={(e) => changeRePassword(e.target.value)}
                placeholder="Re-enter password"
              />
            </PortalFormBody>
            <PortalFormAction href={worksMap.works.now.link}>
              REGISTER
            </PortalFormAction>
          </PortalForm>
        )}
      </PortalContainer>
      <PortalContainerFlip onClick={flipPolaroid}>FLIP ME</PortalContainerFlip>
    </PortalWrapper>
  );
}

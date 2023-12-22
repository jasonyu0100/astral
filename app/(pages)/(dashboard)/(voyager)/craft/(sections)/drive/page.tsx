"use client";

import CraftTableController from "./table/main";
import CraftTableContainer from "./table/container/main";
import CraftTableRow from "./table/row/main";
import CraftCart from "../../(common)/cart/main";
import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import CraftDriveFolder from "./(common)/folder/main";
import CraftDriveFolderAdd from "./(common)/folder/add/main";
import { useState } from "react";
import { CraftFolder, CraftSection } from "../../data";
import { brandSection } from "../../data/brand/main";

export default function Page() {
  const [cartActive, changeCartActive] = useState(false);
  const [section, changeSection] = useState<CraftSection | null>(brandSection);
  const [folder, changeFolder] = useState<CraftFolder | null>(null);

  return (
    <Layer
      sizeStyle="w-full h-full"
      containerStyle={containerStyles["row-center"]}
      backgroundStyle={backgroundStyles["glass-5"]}
    >
      <CraftTableController>
        <div className="flex flex-col space-y-[2rem]">
          <div className="flex flex-col">
            <div className="flex flex-row items-center space-x-[20px] border-b border-slate-400 border-opacity-30 py-[2rem]">
              <div className="flex bg-slate-500 p-[1rem] rounded-full">
                <div className="text-white text-xl font-extraBold font-['Creato Display'] leading-7">
                  Craft
                </div>
              </div>
              <div className="text-white text-xl font-extraBold font-['Creato Display'] leading-7">
                /
              </div>
              <div className="flex bg-slate-500 p-[1rem] rounded-full">
                <div className="text-white text-xl font-extraBold font-['Creato Display'] leading-7">
                  Brand
                </div>
              </div>
              <div className="text-white text-xl font-extraBold font-['Creato Display'] leading-7">
                /
              </div>
              <div className="flex bg-slate-500 p-[1rem] rounded-full">
                <div className="text-white text-xl font-extraBold font-['Creato Display'] leading-7">
                  Logo
                </div>
              </div>
            </div>
          </div>
          <img className="w-full h-[500px]" src="/voyager/craft/cover.png" />
          <p className="text-3xl text-white font-extraBold">Logo</p>
          <div className="w-full text-white text-base font-normal leading-normal">
            Lorem ipsum dolor sit amet consectetur. Non viverra turpis proin
            molestie enim eros. Dolor duis fringilla id leo leo duis. Tortor dui
            quis sagittis nibh blandit. Commodo nibh adipiscing et phasellus.
            Nunc egestas pulvinar dui sapien praesent pretium eu. Purus amet sed
            sed lorem mauris aliquet donec sit in. Consequat eleifend ut quam
            ut. Tristique at imperdiet eget dui netus facilisis massa urna.
            Fermentum leo nascetur at proin donec morbi dui. Quisque consectetur
            varius tempor elit. Est.
          </div>
        </div>
        {section === null && folder === null && (
          <>No Section or Folder Selected</>
        )}
        {section !== null && folder === null && (
          <>
            <div className="w-full flex flex-row flex-wrap items-center py-[50px] gap-[50px]">
              {section.folders.map((folder) => (
                <CraftDriveFolder onClick={() => changeFolder(folder)} />
              ))}
              <CraftDriveFolderAdd
              // onClick={() => changeFolders((prev) => [...prev, 1])}
              />
            </div>
          </>
        )}
        {folder !== null && (
          <CraftTableContainer>
            {folder.files.map((data) => (
              <CraftTableRow {...data} />
            ))}
          </CraftTableContainer>
        )}
      </CraftTableController>
      {cartActive && <CraftCart />}
    </Layer>
  );
}

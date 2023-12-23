"use client";

import CraftCart from "../../(common)/cart/main";
import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { useState } from "react";
import { CraftFolder, CraftSection } from "../../data";
import { brandSection } from "../../data/brand/main";

export default function Page() {
  const [section, changeSection] = useState<CraftSection | null>(brandSection);
  const [folder, changeFolder] = useState<CraftFolder | null>(null);
  const [cartActive, changeCartActive] = useState(true);

  return (
    <Layer sizeStyle="w-full h-full" containerStyle={containerStyles.row}>
      <Layer
        sizeStyle="flex-grow h-full"
        containerStyle={containerStyles["col"]}
        backgroundStyle={backgroundStyles["glass-5"]}
        contentStyle="px-[4rem] pt-[4rem]"
      >
        <Layer
          sizeStyle="w-full h-[6rem]"
          containerStyle={containerStyles["row-center"]}
          backgroundStyle={backgroundStyles["glass-5"]}
          borderStyle={borderStyles["rounded-l"]}
          contentStyle={"px-[3rem] space-x-[2rem] "}
        >
          <div className="flex flex-row space-x-[1rem]">
            <div className="text-white text-xl font-extraBold font-['Creato Display'] leading-7">
              Drive
            </div>
            <div className="text-white text-xl font-extraBold font-['Creato Display'] leading-7">
              /
            </div>
            <div className="text-white text-xl font-extraBold font-['Creato Display'] leading-7">
              Brand
            </div>
            <div className="text-white text-xl font-extraBold font-['Creato Display'] leading-7">
              /
            </div>
            <div className="text-white text-xl font-extraBold font-['Creato Display'] leading-7">
              Logo
            </div>
          </div>
        </Layer>
        <Layer
          sizeStyle="flex-grow"
          containerStyle={containerStyles.col}
          contentStyle={"space-y-[2rem] pt-[3rem] overflow-auto"}
        >
          <div className="flex flex-col space-y-[2rem]">
            <div className="flex flex-col"></div>
            <img className="w-full h-[500px]" src="/voyager/craft/cover.png" />
            <p className="text-3xl text-white font-extraBold">Logo</p>
            <div className="w-full text-white text-base font-normal leading-normal">
              Lorem ipsum dolor sit amet consectetur. Non viverra turpis proin
              molestie enim eros. Dolor duis fringilla id leo leo duis. Tortor
              dui quis sagittis nibh blandit. Commodo nibh adipiscing et
              phasellus. Nunc egestas pulvinar dui sapien praesent pretium eu.
              Purus amet sed sed lorem mauris aliquet donec sit in. Consequat
              eleifend ut quam ut. Tristique at imperdiet eget dui netus
              facilisis massa urna. Fermentum leo nascetur at proin donec morbi
              dui. Quisque consectetur varius tempor elit. Est.
            </div>
          </div>
        </Layer>
      </Layer>
      {cartActive && <CraftCart />}
    </Layer>
  );
}

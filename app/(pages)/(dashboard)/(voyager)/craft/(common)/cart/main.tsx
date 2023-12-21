import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import CraftCartItem from "./item/main";

export default function CraftCart() {
  return (
    <Layer
      displayName="adsads"
      sizeStyle="w-[400px] h-full"
      backgroundStyle={backgroundStyles["glass-10"]}
      borderStyle={`${borderStyles["border-l"]}`}
      containerStyle={containerStyles.row}
    >
      <div className="w-full h-full p-[2rem] flex flex-col justify-between">
        <div className="flex flex-col space-y-[2rem] flex-grow my-[2rem] overflow-auto">
          <CraftCartItem />
          <CraftCartItem />
          <CraftCartItem />
          <CraftCartItem />
          <CraftCartItem />
          <CraftCartItem />
        </div>
        <Layer
          sizeStyle="w-full h-[70px] mt-auto"
          backgroundStyle={backgroundStyles["glass-10"]}
          containerStyle={containerStyles["row-centered"]}
        >
          <p className="text-xl text-white font-bold">Add to Craft</p>
        </Layer>
      </div>
    </Layer>
  );
}

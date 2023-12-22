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
      sizeStyle="w-[350px] h-full flex-shrink-0"
      borderStyle={`${borderStyles["border-l"]}`}
      containerStyle={containerStyles.row}
    >
      <div className="w-full h-full p-[2rem] flex flex-col justify-between">
        <div className="h-[3rem] flex flex-shrink-0 border-b border-slate-200 border-opacity-30 items-center">
          <p className="text-white text-xl font-bold">Cart</p>
        </div>
        <div className="flex flex-col space-y-[2rem] flex-grow my-[2rem] overflow-auto border-b border-slate-200 border-opacity-30">
          <CraftCartItem />
          <CraftCartItem />
          <CraftCartItem />
          <CraftCartItem />
          <CraftCartItem />
          <CraftCartItem />
        </div>
        <Layer
          sizeStyle="w-full h-[50px] mt-auto"
          backgroundStyle={'bg-purple-600'}
          containerStyle={containerStyles["row-centered"]}
          borderStyle={borderStyles["rounded-full"]}
        >
          <p className="text-lg text-white font-extraBold">Add to Craft</p>
        </Layer>
      </div>
    </Layer>
  );
}

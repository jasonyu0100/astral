import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import CraftCartItem from "./item/main";
import CartSidebarHeader from "./header/main";
import CartSidebarHeaderTitle from "./header/title/main";

export default function CartSidebar() {
  return (
    <Layer
      displayName="adsads"
      sizeStyle="max-w-[400px] min-w-[250px] w-1/4 h-full"
      borderStyle={`${borderStyles["border-l"]}`}
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles.col}
      contentStyle="p-[1rem]"
    >
      <CartSidebarHeader>
        <CartSidebarHeaderTitle>Cart (10 items)</CartSidebarHeaderTitle>
      </CartSidebarHeader>
      <div
        className="w-full h-full p-[1rem] flex flex-col overflow-auto"
        style={{ height: "calc(100% - 120px)" }}
      >
        <div className="flex flex-col space-y-[2rem] flex-grow overflow-auto border-b border-slate-200 border-opacity-30">
          <CraftCartItem />
          <CraftCartItem />
          <CraftCartItem />
          <CraftCartItem />
          <CraftCartItem />
          <CraftCartItem />
        </div>
      </div>
      <div className="h-[60px] w-full flex flex-row items-center px-[1rem]">
        <Layer
          sizeStyle="w-full h-full"
          backgroundStyle={"bg-purple-600"}
          containerStyle={containerStyles["row-centered"]}
          borderStyle={borderStyles["rounded-full"]}
        >
          <p className="text-lg text-white font-extraBold">Add to Craft</p>
        </Layer>
      </div>
    </Layer>
  );
}

import Layer from "@/(pages)/(common)/layer/main";
import CraftStoreController from "./(common)/controller/main";
import StoreSearchFilter from "./(common)/controller/search/filter/main";
import StoreSearch from "./(common)/controller/search/main";
import CraftStoreMasonry from "./(common)/masonry/main";
import StoreMasonryMedia from "./(common)/masonry/media/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export default function CraftStorePage() {
  return (
    <>
      <Layer
        displayName="adsads"
        sizeStyle="w-full h-full"
        containerStyle={containerStyles.row}
      >
        <CraftStoreController>
          <StoreSearch />
          <StoreSearchFilter />
          <CraftStoreMasonry>
            <StoreMasonryMedia src="/voyager/craft/store/1.png" />
            <StoreMasonryMedia src="/voyager/craft/store/2.png" />
            <StoreMasonryMedia src="/voyager/craft/store/3.png" />
            <StoreMasonryMedia src="/voyager/craft/store/4.png" />
            <StoreMasonryMedia src="/voyager/craft/store/5.png" />
            <StoreMasonryMedia src="/voyager/craft/store/6.png" />
            <StoreMasonryMedia src="/voyager/craft/store/1.png" />
            <StoreMasonryMedia src="/voyager/craft/store/2.png" />
            <StoreMasonryMedia src="/voyager/craft/store/3.png" />
            <StoreMasonryMedia src="/voyager/craft/store/4.png" />
            <StoreMasonryMedia src="/voyager/craft/store/5.png" />
            <StoreMasonryMedia src="/voyager/craft/store/6.png" />
            <StoreMasonryMedia src="/voyager/craft/store/1.png" />
            <StoreMasonryMedia src="/voyager/craft/store/2.png" />
            <StoreMasonryMedia src="/voyager/craft/store/3.png" />
            <StoreMasonryMedia src="/voyager/craft/store/4.png" />
            <StoreMasonryMedia src="/voyager/craft/store/5.png" />
            <StoreMasonryMedia src="/voyager/craft/store/6.png" />
          </CraftStoreMasonry>
        </CraftStoreController>

        <Layer
          displayName="adsads"
          sizeStyle="w-[400px] h-full"
          backgroundStyle={backgroundStyles["glass-10"]}
          borderStyle={`${borderStyles["rounded-tr"]} ${borderStyles["border-all"]}`}
          containerStyle={containerStyles.row}
        >
          <div className="w-full h-full p-[2rem] flex flex-col justify-between">
            <div className="flex flex-col space-y-[1rem]">
              <div className="opacity-50 text-white text-xl font-bold font-['Creato Display'] leading-7">
                Cart
              </div>
              <div className="w-full h-[0px] border border-slate-200 border-opacity-30"></div>
            </div>
            <div className="flex flex-col space-y-[2rem] flex-grow my-[2rem] overflow-auto">
              <div className="flex flex-row w-full space-x-[2rem] items-center">
                <div className="w-[75px] h-[75px] bg-white"></div>
                <div className="flex flex-col flex-grow">
                  <p className="text-white">dasads</p>
                  <p className="text-white">dasads</p>
                </div>
              </div>
              <div className="flex flex-row w-full space-x-[2rem] items-center">
                <div className="w-[75px] h-[75px] bg-white"></div>
                <div className="flex flex-col flex-grow">
                  <p className="text-white">dasads</p>
                  <p className="text-white">dasads</p>
                </div>
              </div>
              <div className="flex flex-row w-full space-x-[2rem] items-center">
                <div className="w-[75px] h-[75px] bg-white"></div>
                <div className="flex flex-col flex-grow">
                  <p className="text-white">dasads</p>
                  <p className="text-white">dasads</p>
                </div>
              </div>
              <div className="flex flex-row w-full space-x-[2rem] items-center">
                <div className="w-[75px] h-[75px] bg-white"></div>
                <div className="flex flex-col flex-grow">
                  <p className="text-white">dasads</p>
                  <p className="text-white">dasads</p>
                </div>
              </div>
              <div className="flex flex-row w-full space-x-[2rem] items-center">
                <div className="w-[75px] h-[75px] bg-white"></div>
                <div className="flex flex-col flex-grow">
                  <p className="text-white">dasads</p>
                  <p className="text-white">dasads</p>
                </div>
              </div>
              <div className="flex flex-row w-full space-x-[2rem] items-center">
                <div className="w-[75px] h-[75px] bg-white"></div>
                <div className="flex flex-col flex-grow">
                  <p className="text-white">dasads</p>
                  <p className="text-white">dasads</p>
                </div>
              </div>
            </div>
            <div className="bg-white w-full h-[100px] mt-auto">adsads</div>
          </div>
        </Layer>
      </Layer>
    </>
  );
}

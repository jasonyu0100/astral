import CraftStoreController from "./(common)/controller/main";
import StoreSearchFilter from "./(common)/controller/search/filter/main";
import StoreSearch from "./(common)/controller/search/main";
import CraftStoreMasonry from "./(common)/masonry/main";
import StoreMasonryMedia from "./(common)/masonry/media/main";
import CraftCart from "../../(common)/cart/main";

export default function CraftStorePage() {
  return (
    <div className="w-full h-full space-x-[3rem] flex flex-row">
      <CraftStoreController>
        <StoreSearch />
        <StoreSearchFilter />
        <CraftStoreMasonry>
          <StoreMasonryMedia src="/voyager/craft/search/1.png" />
          <StoreMasonryMedia src="/voyager/craft/search/2.png" />
          <StoreMasonryMedia src="/voyager/craft/search/3.png" />
          <StoreMasonryMedia src="/voyager/craft/search/4.png" />
          <StoreMasonryMedia src="/voyager/craft/search/5.png" />
          <StoreMasonryMedia src="/voyager/craft/search/6.png" />
          <StoreMasonryMedia src="/voyager/craft/search/1.png" />
          <StoreMasonryMedia src="/voyager/craft/search/2.png" />
          <StoreMasonryMedia src="/voyager/craft/search/3.png" />
          <StoreMasonryMedia src="/voyager/craft/search/4.png" />
          <StoreMasonryMedia src="/voyager/craft/search/5.png" />
          <StoreMasonryMedia src="/voyager/craft/search/6.png" />
          <StoreMasonryMedia src="/voyager/craft/search/1.png" />
          <StoreMasonryMedia src="/voyager/craft/search/2.png" />
          <StoreMasonryMedia src="/voyager/craft/search/3.png" />
          <StoreMasonryMedia src="/voyager/craft/search/4.png" />
          <StoreMasonryMedia src="/voyager/craft/search/5.png" />
          <StoreMasonryMedia src="/voyager/craft/search/6.png" />
        </CraftStoreMasonry>
      </CraftStoreController>
      <CraftCart />
    </div>
  );
}

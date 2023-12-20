import CraftCart from "../../(common)/cart/main";
import CraftAddController from "./(common)/controller/main";
import CraftAddSection from "./(common)/controller/section/main";

export default function Page() {
  return (
    <>
      <div className="w-full h-full space-x-[3rem] flex flex-row">
        <CraftAddController>
          <CraftAddSection
            title="test"
            description={`testLorem ipsum dolor sit amet consectetur. Risus aliquam id amet laoreet velit. Fringilla etiam ac pharetra auctor sed sed aenean in rhoncus. Quisque diam egestas eget facilisis scelerisque eleifend. Elementum blandit venenatis sagittis enim mauris faucibus fringilla.`}
          />
          <div className="flex flex-wrap w-full gap-[2rem]">
            <div className="w-[75px] h-[75px] bg-blue-500">01</div>
            <div className="w-[75px] h-[75px] bg-blue-500">02</div>
            <div className="w-[75px] h-[75px] bg-blue-500">01</div>
            <div className="w-[75px] h-[75px] bg-blue-500">01</div>
            <div className="w-[75px] h-[75px] bg-blue-500">01</div>
            <div className="w-[75px] h-[75px] bg-blue-500">01</div>
            <div className="w-[75px] h-[75px] bg-blue-500">01</div>
            <div className="w-[75px] h-[75px] bg-blue-500">02</div>
            <div className="w-[75px] h-[75px] bg-blue-500">03</div>
            <div className="w-[75px] h-[75px] bg-blue-500">02</div>
            <div className="w-[75px] h-[75px] bg-blue-500">03</div>
            <div className="w-[75px] h-[75px] bg-blue-500">02</div>
            <div className="w-[75px] h-[75px] bg-blue-500">03</div>
            <div className="w-[75px] h-[75px] bg-blue-500">02</div>
            <div className="w-[75px] h-[75px] bg-blue-500">03</div>
            <div className="w-[75px] h-[75px] bg-blue-500">02</div>
            <div className="w-[75px] h-[75px] bg-blue-500">03</div>
            <div className="w-[75px] h-[75px] bg-blue-500">03</div>
          </div>
        </CraftAddController>
        <CraftCart />
      </div>
    </>
  );
}

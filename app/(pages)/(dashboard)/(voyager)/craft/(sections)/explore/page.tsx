import CraftCart from "../../(common)/cart/main";
import CraftAddController from "./(common)/controller/main";
import CraftAddSection from "./(common)/controller/section/main";

export default function Page() {
  return (
    <>
      <div className="w-full h-full space-x-[3rem] flex flex-row">
        <CraftAddController>
          {/* <CraftAddSection
            title="Explore"
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
          </div> */}
          <div className="flex flex-row space-x-[2rem]">
            <div className="w-48 h-56 flex-col justify-center items-start gap-3 inline-flex">
              <div className="w-48 h-32 justify-start items-start inline-flex">
                  <img className="w-full h-full" src="https://images.unsplash.com/photo-1513553404607-988bf2703777?q=80&w=2893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
              </div>
              <div className="w-48 h-20 flex-col justify-start items-start inline-flex">
                <div className="text-white text-xl font-bold font-['Creato Display'] leading-7">
                  Architecture
                </div>
                <div className="text-white text-base font-normal font-['Creato Display'] leading-normal">
                  54 elements
                </div>
                <div className="text-white text-base font-normal font-['Creato Display'] leading-normal">
                  3443 views, 123 downloads
                </div>
              </div>
            </div>
            <div className="w-48 h-56 flex-col justify-center items-start gap-3 inline-flex">
              <div className="w-48 h-32 justify-start items-start inline-flex">
                  <img className="w-full h-full" src="https://images.unsplash.com/photo-1513553404607-988bf2703777?q=80&w=2893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
              </div>
              <div className="w-48 h-20 flex-col justify-start items-start inline-flex">
                <div className="text-white text-xl font-bold font-['Creato Display'] leading-7">
                  Architecture
                </div>
                <div className="text-white text-base font-normal font-['Creato Display'] leading-normal">
                  54 elements
                </div>
                <div className="text-white text-base font-normal font-['Creato Display'] leading-normal">
                  3443 views, 123 downloads
                </div>
              </div>
            </div>
            <div className="w-48 h-56 flex-col justify-center items-start gap-3 inline-flex">
              <div className="w-48 h-32 justify-start items-start inline-flex">
                  <img className="w-full h-full" src="https://images.unsplash.com/photo-1513553404607-988bf2703777?q=80&w=2893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
              </div>
              <div className="w-48 h-20 flex-col justify-start items-start inline-flex">
                <div className="text-white text-xl font-bold font-['Creato Display'] leading-7">
                  Architecture
                </div>
                <div className="text-white text-base font-normal font-['Creato Display'] leading-normal">
                  54 elements
                </div>
                <div className="text-white text-base font-normal font-['Creato Display'] leading-normal">
                  3443 views, 123 downloads
                </div>
              </div>
            </div>
          </div>
        </CraftAddController>
        <CraftCart />
      </div>
    </>
  );
}

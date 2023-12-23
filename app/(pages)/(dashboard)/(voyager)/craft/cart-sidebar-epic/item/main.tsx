export default function CraftCartItem() {
  return (
    <div className="flex flex-row w-full space-x-[2rem] items-center ">
      <div className="w-[75px] h-[75px] bg-white flex-shrink-0">
        <img className="w-full h-full" src="/apollo/draft/elements/1.png" />
      </div>
      <div className="flex flex-col flex-grow h-full pr-[2rem]">
        <p className="font-bold text-lg text-white">Sunset</p>
        <p className="font-regular text-sm text-white">
          A dreamy sunset over the hills overlooking the water. This is the
          meaning.
        </p>
      </div>
    </div>
  );
}

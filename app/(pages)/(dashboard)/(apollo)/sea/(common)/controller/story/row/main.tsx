import Image from "next/image";

export default function StoryRow() {
  return (
    <div className="px-[2rem] h-[50px] flex flex-row w-full  items-center space-x-[2rem] mt-auto mb-[2rem] relative">
      <div className="w-[50px] h-[50px] bg-white rounded-[25px] overflow-hidden">
        <Image alt="test" src={`/apollo/sea/avatar.png`} width={50} height={50} />
      </div>
      <p className="text-white font-bold">Jason</p>
      <p className="text-white font-regular">21 hours ago</p>
    </div>
  );
}

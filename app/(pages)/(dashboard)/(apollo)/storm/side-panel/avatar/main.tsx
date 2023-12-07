import Image from "next/image";

export default function StormSidePanelAvatar() {
  return (
    <div className="h-[50px] w-[50px] flex-shrink-0 bg-white rounded-[25px] overflow-hidden">
      <Image
        alt="test"
        src={`/apollo/storm/avatar.png`}
        width={50}
        height={50}
      />
    </div>
  );
}

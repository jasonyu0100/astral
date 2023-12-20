import Image from "next/image";

export default function WorksHeaderCover() {
  return (
    <div className="flex flex-col items-center justify-center w-[160px] h-[160px] bg-white">
      <div className="w-[130px] h-[130px] bg-gradient-to-br from-slate-950 to-fuchsia-600">
        <Image
          width={130}
          height={130}
          src="/voyager/works/producer.png"
          alt=""
        />
      </div>
    </div>
  );
}

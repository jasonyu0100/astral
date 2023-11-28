export interface MuseumSection {
  title: string;
  works: MuseumRowProps[];
  description: string;
}

export interface MuseumRowProps {
  author: string;
  title: string;
  date: string;
  description: string;
  src: string;
}

export default function MuseumRow({
  author,
  title,
  date,
  description,
  src,
}: MuseumRowProps) {
  return (
    <div className="flex flex-row w-full justify-evenly items-center">
      <div className="bg-white w-[200px] p-[20px] border-slate-950 border-[10px] flex justify-center items-center">
        <img src={src} />
      </div>
      <div className="bg-white w-[400px] p-[20px]">
        <p className="font-bold">{author}</p>

        <p className="font-regular">
          <span className="font-bold">{title},</span> {date}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export interface DraftPolaroidProps {
  x: number;
  y: number;
}

export default function DraftPolaroid() {
  return (
    <div className="w-[120px] h-[140px] bg-white flex flex-col items-center flex-shrink-0">
      <div className="mt-[10px] w-[100px] h-[100px] bg-black"></div>
      <p className="text-center font-permanentMarker">Inspire</p>
    </div>
  );
}

export function PlacedDraftPolaroid({ x, y }: DraftPolaroidProps) {
  return (
    <div
      className={`absolute left-[${x}px] top-[${y}px] w-[120px] h-[140px] bg-white flex flex-col flex-shrink-0`}
    >
      <div className="m-[10px] w-[100px] h-[100px] bg-black"></div>
      <div className="w-full flex flex-col item-center justify-center">
        <h1 className="text-center">Inspire</h1>
      </div>
    </div>
  );
}

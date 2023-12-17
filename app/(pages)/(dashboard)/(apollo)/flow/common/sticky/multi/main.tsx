function DoneStickyNote() {
  return (
    <div className="w-[120px] h-[120px] justify-start items-start gap-[50px] inline-flex">
      <div className="w-[120px] h-[120px] relative shadow">
        <div className="w-[100px] h-[100px] left-[20px] top-[20px] absolute bg-emerald-600" />
        <div className="w-[100px] h-[100px] left-[1rem] top-[10px] absolute bg-emerald-500" />
        <div className="w-[100px] h-[100px] left-0 top-0 absolute bg-emerald-400" />
      </div>
    </div>
  );
}

function FlowStickyNote() {
  return (
    <div className="w-[120px] h-[120px] justify-start items-start gap-[50px] inline-flex">
      <div className="w-[120px] h-[120px] relative shadow">
        <div className="w-[100px] h-[100px] left-[20px] top-[20px] absolute bg-cyan-600" />
        <div className="w-[100px] h-[100px] left-[10px] top-[10px] absolute bg-cyan-500" />
        <div className="w-[100px] h-[100px] left-0 top-0 absolute bg-cyan-400" />
      </div>
    </div>
  );
}

function ToDoStickyNote() {
  return (
    <div className="w-[120px] h-[120px] justify-start items-start gap-[50px] inline-flex">
      <div className="w-[120px] h-[120px] relative">
        <div className="w-[100px] h-[100px] left-[20px] top-[20px] absolute bg-amber-600" />
        <div className="w-[100px] h-[100px] left-[10px] top-[10px] absolute bg-amber-500" />
        <div className="w-[100px] h-[100px] left-0 top-0 absolute bg-amber-400" />
      </div>
    </div>
  );
}

export interface StickyNoteProps {
  status: string;
}

export default function MultiStickyNote({ status }: StickyNoteProps) {
  return (
    <>
      {status === "todo" && <ToDoStickyNote />}
      {status === "flow" && <FlowStickyNote />}
      {status === "done" && <DoneStickyNote />}
    </>
  );
}

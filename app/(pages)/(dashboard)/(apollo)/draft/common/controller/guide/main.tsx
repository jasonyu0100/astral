import Constellation from "./constellation/main";

export default function DraftGuide() {
  return (
    <div className="w-full overflow-auto flex flex-col space-y-[50px] py-[60px] p-[30px]">
        <Constellation>Const0</Constellation>
        <Constellation>Const1</Constellation>
        <Constellation>Const2</Constellation>
    </div>
  );
}

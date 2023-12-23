export default function LinkFeedSidebarEntry() {
  return (
    <div className="flex flex-row items-center space-x-[1rem]">
      <div className="h-[50px] w-[50px] flex-shrink-0">
        <img
          className="w-full h-full rounded-full"
          alt="test"
          src={`/apollo/storm/avatar.png`}
        />
      </div>
      <p className="text-white font-bold text-lg">Hello World - Chat</p>
    </div>
  );
}

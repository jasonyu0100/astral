export default function PartnerChatMessage({
  children,
}: {
  children: React.ReactNode;
}) {
    return <p className="bg-blue-500 rounded-md p-3 max-w-[300px] ml-auto text-white font-regular">{children}</p>
}

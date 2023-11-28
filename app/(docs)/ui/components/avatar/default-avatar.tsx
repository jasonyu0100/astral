export default function DefaultAvatar() {
  return (
    <div className="flex flex-row space-x-4">
      <img
        className="w-10 h-10 rounded-full"
        src="/docs/images/people/profile-picture-5.jpg"
        alt="Rounded avatar"
      />
      <img
        className="w-10 h-10 rounded"
        src="/docs/images/people/profile-picture-5.jpg"
        alt="Default avatar"
      />
    </div>
  );
}

export default function StackedAvatar() {
  return (
    <div className="flex flex-row space-x-4">
      <div className="flex mb-5 -space-x-4">
        <img
          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
          src="/docs/images/people/profile-picture-5.jpg"
          alt=""
        />
        <img
          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
          src="/docs/images/people/profile-picture-2.jpg"
          alt=""
        />
        <img
          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
          src="/docs/images/people/profile-picture-3.jpg"
          alt=""
        />
        <img
          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
          src="/docs/images/people/profile-picture-4.jpg"
          alt=""
        />
      </div>
      <div className="flex -space-x-4">
        <img
          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
          src="/docs/images/people/profile-picture-5.jpg"
          alt=""
        />
        <img
          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
          src="/docs/images/people/profile-picture-2.jpg"
          alt=""
        />
        <img
          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
          src="/docs/images/people/profile-picture-3.jpg"
          alt=""
        />
        <a
          className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
          href="#"
        >
          +99
        </a>
      </div>
    </div>
  );
}

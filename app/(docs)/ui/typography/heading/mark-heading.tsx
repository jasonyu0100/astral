export default function MarkHeading() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Regain{" "}
        <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
          control
        </mark>{" "}
        over your days
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Here at Ouros we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth.
      </p>
    </>
  );
}

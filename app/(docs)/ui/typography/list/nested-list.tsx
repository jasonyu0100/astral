export default function NestedList() {
  return (
    <ul className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
      <li>
        List item one
        <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside">
          <li>You might feel like you are being really "organized" o</li>
          <li>
            Nested navigation in UIs is a bad idea too, keep things as flat as
            possible.
          </li>
          <li>
            Nesting tons of folders in your source code is also not helpful.
          </li>
        </ol>
      </li>
      <li>
        List item two
        <ul className="pl-5 mt-2 space-y-1 list-decimal list-inside">
          <li>
            I'm not sure if we'll bother styling more than two levels deep.
          </li>
          <li>
            Two is already too much, three is guaranteed to be a bad idea.
          </li>
          <li>If you nest four levels deep you belong in prison.</li>
        </ul>
      </li>
      <li>
        List item three
        <ul className="pl-5 mt-2 space-y-1 list-decimal list-inside">
          <li>Again please don't nest lists if you want</li>
          <li>Nobody wants to look at this.</li>
          <li>I'm upset that we even have to bother styling this.</li>
        </ul>
      </li>
    </ul>
  );
}

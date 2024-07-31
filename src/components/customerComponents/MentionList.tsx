import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

export const MentionList = forwardRef((props: any, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // console.log(props);

  // console.log(props);
  const selectItem = (index: number) => {
    const item = props.items[index];

    if (item) {
      props.command({ id: item });
    }
  };

  const upHandler = () => {
    console.log((selectedIndex + props.items.length - 1) % props.items.length);
    setSelectedIndex(
      (selectedIndex + props.items.length - 1) % props.items.length
    );
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  useEffect(() => setSelectedIndex(0), [props.items]);

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }: any) => {
      if (event.key === "ArrowUp") {
        upHandler();
        return true;
      }

      if (event.key === "ArrowDown") {
        downHandler();
        return true;
      }

      if (event.key === "Enter") {
        enterHandler();
        return true;
      }

      return false;
    },
  }));

  return (
    <div className="bg-slate-700 border border-sky-500 rounded-xl py-1.5 shadow-2xl flex flex-col gap-1 overflow-auto relative w-full">
      {props.items.length ? (
        props.items.map((item: any, index: number) => (
          <button
            className={`flex items-center gap-1 text-left px-1.5 bg-transparent ${index === selectedIndex ? "font-semibold" : "hover:border-l-4 hover:border-sky-500"}`}
            key={index}
            onClick={() => selectItem(index)}
          >
            {item}
          </button>
        ))
      ) : (
        <div className="item">No result</div>
      )}
    </div>
  );
});

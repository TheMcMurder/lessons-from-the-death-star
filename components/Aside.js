/*
Many times, the Markdown `blockquote` ie. `>` is abused when in reality an `aside` element is more appropriate.
This component should be used in those instances, which is almost always.
*/
import React from "react";
import cls from "classnames";

export default function Aside({ children, info, warning }) {
  return (
    <aside
      className={cls("p-2 mt-2 border-l-4 rounded", {
        "text-gray border-gray": !info && !warning,
        "text-blue border-blue": info,
        "border-red rr-shadow": warning,
      })}
    >
      {children}
    </aside>
  );
}

import React from "react";
import cls from "classnames";

export default function Img({ src, alt, className }) {
  return (
    <img
      className={cls(className)}
      src={src}
      alt={alt}
    >
    </img>
  )
}
import React from "react";
import cls from "classnames";
import Img from "./Img.js";

export default function MemeImg({ src, alt, imageClasses = 'max-h-full max-w-full', center = true }) {
  return (
    <div className={cls('absolute inset-0', {
      'flex justify-center items-center': center
    })}>
      <Img
        className={imageClasses}
        src={src}
        alt={alt}
      >
      </Img>
    </div>
  )
}
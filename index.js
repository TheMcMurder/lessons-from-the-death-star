import React from "react";
import { render } from "react-dom";
import cls from "classnames";
import { MDXProvider } from "@mdx-js/react";
import { imperialBackground } from 'imperial-style'

import Deck from "./components/Deck";
import Slide from "./components/Slide";
import Appear from "./components/Appear";
import Code from "./components/Code";
import Aside from "./components/Aside";
import A from "./components/A";
import Img from "./components/Img.js";
import MemeImg from './components/MemeImage.js';
import NextSlideIndicator from './components/NextSlideIndicator.js';

import MDXContent from "./content.mdx";

imperialBackground({animate: false})

const Base = (C, classnames) => (props) => (
  <C {...props} className={cls(classnames, props.className)} />
);

const Table = ({children}) => (
  <div className='terminal border-blue border-4 rounded-lg'>
    <table className='table-auto mx-auto'>
      {children}
    </table>
  </div>
)

render(
  <MDXProvider
    components={{
      wrapper: Deck,
      Slide,
      Appear,
      Aside,
      Img,
      MemeImg,
      NextSlideIndicator,
      code: Code,
      inlineCode: Base("code", "bg-gray-200 px-1 rounded"),
      a: A,
      h1: Base("h1", "text-center text-4xl rr-shadow"),
      h2: Base("h2", "text-center text-3xl wb-shadow"),
      h3: Base("h3", "text-center text-2xl wb-shadow"),
      ul: Base("ul", "list-disc list-inside"),
      table: Table,
      td: Base("td", "px-4 py-2 text-lg border-blue border-4"),
      th: Base("th", "px-4 py-2 text-lg border-blue border-4"),
    }}
  >
    <MDXContent />
  </MDXProvider>,
  document.querySelector("#minideck")
);

import Dumb from "../dumb";

import s from "./styles.scss";

const items = [
  { id: "oocss", name: "OOCSS" },
  { id: "smacss", name: "SMACSS" },
  { id: "atomic", name: "Atomic" },
  { id: "organic", name: "Organic" },
  { id: "bem-css", name: "BEM CSS" },
  { id: "bem-flexboxgrid", name: "BEM Flexbox Grid" },
  { id: "bem-platform/pages/index", name: "BEM Platform" },
  { id: "css-modules", name: "CSS-modules" },
  { id: "raw", name: "Raw" }
];



export default function Smart1() {
  return `<div class="${s.smartComponent}">
      <h2 class="${s.title}">Smart component 2</h2>
      
      ${Dumb()}
      ${Dumb()}
  </div>`;
}

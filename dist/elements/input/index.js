import { D as r, p as a } from "../../util-D2mgkBnY.js";
import { s as d } from "../../style.css-Bma0hoQJ.js";
import "../../theme.css.ts.vanilla-l0sNRNKZ.js";
const p = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.66671 3.99996V14H7.33337V3.99996H3.33337V2.66663H12.6667V3.99996H8.66671Z" fill="currentColor"/>
</svg>
`, e = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00004 0.666626V1.99996H10V0.666626H11.3334V1.99996H14C14.3682 1.99996 14.6667 2.29844 14.6667 2.66663V13.3333C14.6667 13.7015 14.3682 14 14 14H2.00004C1.63185 14 1.33337 13.7015 1.33337 13.3333V2.66663C1.33337 2.29844 1.63185 1.99996 2.00004 1.99996H4.66671V0.666626H6.00004ZM13.3334 7.33329H2.66671V12.6666H13.3334V7.33329ZM4.66671 3.33329H2.66671V5.99996H13.3334V3.33329H11.3334V4.66663H10V3.33329H6.00004V4.66663H4.66671V3.33329Z" fill="currentColor"/>
</svg>
`, c = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5.33329H13.3333C13.7015 5.33329 14 5.63177 14 5.99996V14C14 14.3682 13.7015 14.6666 13.3333 14.6666H2.66667C2.29848 14.6666 2 14.3682 2 14V5.99996C2 5.63177 2.29848 5.33329 2.66667 5.33329H4V4.66663C4 2.45749 5.79086 0.666626 8 0.666626C10.2091 0.666626 12 2.45749 12 4.66663V5.33329ZM3.33333 6.66663V13.3333H12.6667V6.66663H3.33333ZM7.33333 9.33329H8.66667V10.6666H7.33333V9.33329ZM4.66667 9.33329H6V10.6666H4.66667V9.33329ZM10 9.33329H11.3333V10.6666H10V9.33329ZM10.6667 5.33329V4.66663C10.6667 3.19387 9.47273 1.99996 8 1.99996C6.52724 1.99996 5.33333 3.19387 5.33333 4.66663V5.33329H10.6667Z" fill="currentColor"/>
</svg>
`, h = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.00004 2H14C14.3682 2 14.6667 2.29848 14.6667 2.66667V13.3333C14.6667 13.7015 14.3682 14 14 14H2.00004C1.63185 14 1.33337 13.7015 1.33337 13.3333V2.66667C1.33337 2.29848 1.63185 2 2.00004 2ZM13.3334 4.82528L8.04791 9.55867L2.66671 4.81063V12.6667H13.3334V4.82528ZM3.00768 3.33333L8.04131 7.77467L13.0007 3.33333H3.00768Z" fill="currentColorColorColorColorColorColorColorColorColorColor"/>
</svg>
`, V = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33333 1V14.6667H8V2.46933L5 3.27333V1.89267L8.33333 1H9.33333Z" fill="currentColor"/>
</svg>
`, H = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.624 1.66736L14.334 5.37734V10.624L10.624 14.334H5.37734L1.66736 10.624V5.37734L5.37734 1.66736H10.624ZM10.0718 3.00069H5.92962L3.00069 5.92962V10.0718L5.92962 13.0007H10.0718L13.0007 10.0718V5.92962L10.0718 3.00069ZM5.33353 7.33351H10.6668V8.66684H5.33353V7.33351Z" fill="currentColor"/>
</svg>
`;
var w = "sh-1d1c39w0", u = "sh-1d1c39w1", C = "sh-1d1c39w2", g = "sh-1d1c39w3";
const s = "text", o = {
  text: p,
  password: c,
  date: e,
  "datetime-local": e,
  email: h,
  number: V,
  disabled: H
};
class v extends HTMLElement {
  constructor() {
    super(), this.input = this.buildInput();
  }
  connectedCallback() {
    this.classList.add(w);
    const t = this.buildIcon();
    this.appendChild(t), a(this.input, this, [
      "placeholder",
      "type",
      "value",
      "autofocus",
      "disabled",
      "max",
      "min",
      "list",
      "readonly",
      "step",
      "pattern",
      "inputmode",
      "name"
    ]);
  }
  buildInput() {
    const t = document.createElement("input");
    return t.classList.add(u, d), this.appendChild(t), t;
  }
  buildIcon() {
    const t = document.createElement("span"), l = this.getIconType(), i = o[l] || o[s];
    t.innerHTML = i, t.classList.add(C);
    const n = t.firstElementChild;
    return n == null || n.classList.add(g), t;
  }
  getIconType() {
    return this.getAttribute("disabled") !== null ? "disabled" : this.getAttribute("type") || s;
  }
}
const m = "sh-input";
r.define(m, v);
export {
  m as default
};
//# sourceMappingURL=index.js.map

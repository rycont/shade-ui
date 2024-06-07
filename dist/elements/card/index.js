import "../../theme.css.ts.vanilla-l0sNRNKZ.js";
import { D as p } from "../../util-D2mgkBnY.js";
var o = "sh-progressively-appear", c = "sh-1f7zqr50";
const s = class s extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.setAttribute("role", "card"), this.classList.add(c, o);
  }
  attributeChangedCallback(r, a, t) {
    if (a === t)
      return;
    const i = t === null ? "0rem" : +t + "rem";
    r === "p" && this.style.setProperty("padding", i), r === "g" && this.style.setProperty("gap", i);
  }
};
s.observedAttributes = ["p", "g"];
let e = s;
const l = "sh-card";
p.define(l, e);
export {
  l as default
};
//# sourceMappingURL=index.js.map

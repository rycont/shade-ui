import "../../theme.css.ts.vanilla-l0sNRNKZ.js";
import { D as a } from "../../util-D2mgkBnY.js";
var o = "sh-1cu9ibjj", l = "sh-1f7zqr50";
const s = class s extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.setAttribute("role", "card"), this.classList.add(l, o);
  }
  attributeChangedCallback(r, c, t) {
    if (c === t)
      return;
    const i = t === null ? "0rem" : +t + "rem";
    r === "p" && this.style.setProperty("padding", i), r === "g" && this.style.setProperty("gap", i);
  }
};
s.observedAttributes = ["p", "g"];
let e = s;
const p = "sh-card";
a.define(p, e);
export {
  p as default
};
//# sourceMappingURL=index.js.map

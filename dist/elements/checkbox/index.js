import { p as i, D as c } from "../../util-D2mgkBnY.js";
import "../../theme.css.ts.vanilla-l0sNRNKZ.js";
var n = "sh-1iu60wv0";
const s = class s extends HTMLElement {
  constructor() {
    super(), this.inputElement = this.buildInput();
  }
  buildInput() {
    const t = document.createElement("input");
    return t.setAttribute("type", "checkbox"), t.classList.add(n), t;
  }
  connectedCallback() {
    this.appendChild(this.inputElement), this.setAttribute("role", "checkbox"), i(this.inputElement, this, ["checked", "disabled"]);
  }
};
s.observedAttributes = ["checked", "disabled"];
let e = s;
c.define("sh-checkbox", e);
const r = "sh-checkbox";
export {
  r as default
};
//# sourceMappingURL=index.js.map

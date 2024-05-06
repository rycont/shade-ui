import { p as i, D as n } from "./util-BfafNPJz.js";
import "./theme.css.ts.vanilla-l0sNRNKZ.js";
var c = "sh-ui-1iu60wv0";
const s = class s extends HTMLElement {
  constructor() {
    super(), this.inputElement = this.buildInput();
  }
  buildInput() {
    const t = document.createElement("input");
    return t.setAttribute("type", "checkbox"), t.classList.add(c), t;
  }
  connectedCallback() {
    this.appendChild(this.inputElement), this.setAttribute("role", "checkbox"), i(this.inputElement, this, ["checked", "disabled"]);
  }
};
s.observedAttributes = ["checked", "disabled"];
let e = s;
n.define("sh-checkbox", e);
//# sourceMappingURL=checkbox.js.map

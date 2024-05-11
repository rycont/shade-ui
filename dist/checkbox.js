var n = Object.defineProperty;
var u = (s, e, t) => e in s ? n(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var i = (s, e, t) => (u(s, typeof e != "symbol" ? e + "" : e, t), t);
import { D as d, p as l } from "./util-ve1EjmCE.js";
import "./theme.css.ts.vanilla-l0sNRNKZ.js";
var r = "sh-1iu60wv0";
class c extends HTMLElement {
  constructor() {
    super();
    i(this, "inputElement", this.buildInput());
  }
  buildInput() {
    const t = document.createElement("input");
    return t.setAttribute("type", "checkbox"), t.classList.add(r), t;
  }
  connectedCallback() {
    this.appendChild(this.inputElement), this.setAttribute("role", "checkbox"), l(this.inputElement, this, ["checked", "disabled"]);
  }
}
i(c, "observedAttributes", ["checked", "disabled"]);
d.define("sh-checkbox", c);
//# sourceMappingURL=checkbox.js.map

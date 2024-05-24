var l = Object.defineProperty;
var o = (r, t, e) => t in r ? l(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var i = (r, t, e) => (o(r, typeof t != "symbol" ? t + "" : t, e), e);
import "./theme.css.ts.vanilla-l0sNRNKZ.js";
import { D as p } from "./util-D2mgkBnY.js";
var d = "sh-1cu9ibjj", n = "sh-1f7zqr50";
class c extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.setAttribute("role", "card"), this.classList.add(n, d);
  }
  attributeChangedCallback(t, e, s) {
    if (e === s)
      return;
    const a = s === null ? "0rem" : +s + "rem";
    t === "p" && this.style.setProperty("padding", a), t === "g" && this.style.setProperty("gap", a);
  }
}
i(c, "observedAttributes", ["p", "g"]);
const f = "sh-card";
p.define(f, c);
export {
  f as default
};
//# sourceMappingURL=card.js.map

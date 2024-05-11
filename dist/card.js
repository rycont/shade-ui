var d = Object.defineProperty;
var l = (s, t, e) => t in s ? d(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var i = (s, t, e) => (l(s, typeof t != "symbol" ? t + "" : t, e), e);
import { D as o } from "./util-ve1EjmCE.js";
import "./theme.css.ts.vanilla-l0sNRNKZ.js";
var n = "sh-1f7zqr51";
class c extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.setAttribute("role", "card"), this.classList.add(n);
  }
  attributeChangedCallback(t, e, r) {
    if (e === r)
      return;
    const a = r === null ? "0rem" : +r + "rem";
    t === "p" && this.style.setProperty("padding", a), t === "g" && this.style.setProperty("gap", a);
  }
}
i(c, "observedAttributes", ["p", "g"]);
const p = "sh-card";
o.define(p, c);
export {
  p as default
};
//# sourceMappingURL=card.js.map

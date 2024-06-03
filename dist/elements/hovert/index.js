import { D as d } from "../../util-D2mgkBnY.js";
import "../../theme.css.ts.vanilla-l0sNRNKZ.js";
var a = "sh-1mtdroy0", c = "sh-1mtdroy1";
const l = class l extends HTMLElement {
  connectedCallback() {
    this.classList.add(a);
  }
  attributeChangedCallback(t, r, s) {
    t === "gap" ? this.style.gap = s + "rem" : t === "p" ? this.style.padding = s + "rem" : t === "px" ? this.style.paddingInline = s + "rem" : t === "py" && (this.style.paddingBlock = s + "rem");
  }
};
l.observedAttributes = ["gap", "p", "px", "py"];
let e = l;
const h = "sh-horz";
d.define(h, e);
const p = class p extends HTMLElement {
  connectedCallback() {
    this.classList.add(c);
  }
  attributeChangedCallback(t, r, s) {
    t === "gap" ? this.style.gap = s + "rem" : t === "p" ? this.style.padding = s + "rem" : t === "px" ? this.style.paddingInline = s + "rem" : t === "py" && (this.style.paddingBlock = s + "rem");
  }
};
p.observedAttributes = ["gap", "p", "px", "py"];
let i = p;
const o = "sh-vert";
d.define(o, i);
export {
  h as horz,
  o as vert
};
//# sourceMappingURL=index.js.map

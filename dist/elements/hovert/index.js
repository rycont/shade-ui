import { D as p } from "../../util-D2mgkBnY.js";
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
p.define(h, e);
const d = class d extends HTMLElement {
  connectedCallback() {
    this.classList.add(c);
  }
  attributeChangedCallback(t, r, s) {
    t === "gap" ? this.style.gap = s + "rem" : t === "p" ? this.style.padding = s + "rem" : t === "px" ? this.style.paddingInline = s + "rem" : t === "py" && (this.style.paddingBlock = s + "rem");
  }
};
d.observedAttributes = ["gap", "p", "px", "py"];
let i = d;
const o = "sh-vert";
p.define(o, i);
export {
  h as horz,
  o as vert
};
//# sourceMappingURL=index.js.map

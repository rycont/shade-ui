var r = Object.defineProperty;
var h = (e, s, i) => s in e ? r(e, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[s] = i;
var d = (e, s, i) => (h(e, typeof s != "symbol" ? s + "" : s, i), i);
import { D as l } from "./util-D2mgkBnY.js";
var c = "sh-1mtdroy0", g = "sh-1mtdroy1";
class a extends HTMLElement {
  connectedCallback() {
    this.classList.add(c);
  }
  attributeChangedCallback(s, i, t) {
    s === "gap" ? this.style.gap = t + "rem" : s === "p" ? this.style.padding = t + "rem" : s === "px" ? this.style.paddingInline = t + "rem" : s === "py" && (this.style.paddingBlock = t + "rem");
  }
}
d(a, "observedAttributes", ["gap", "p", "px", "py"]);
l.define("sh-horz", a);
class p extends HTMLElement {
  connectedCallback() {
    this.classList.add(g);
  }
  attributeChangedCallback(s, i, t) {
    s === "gap" ? this.style.gap = t + "rem" : s === "p" ? this.style.padding = t + "rem" : s === "px" ? this.style.paddingInline = t + "rem" : s === "py" && (this.style.paddingBlock = t + "rem");
  }
}
d(p, "observedAttributes", ["gap", "p", "px", "py"]);
l.define("sh-vert", p);
//# sourceMappingURL=hovert.js.map

import { D as a } from "./util-BfafNPJz.js";
var h = "sh-ui-1mtdroy0", r = "sh-ui-1mtdroy1";
const d = class d extends HTMLElement {
  connectedCallback() {
    this.classList.add(h);
  }
  attributeChangedCallback(s, p, t) {
    s === "gap" ? this.style.gap = t + "rem" : s === "p" ? this.style.padding = t + "rem" : s === "px" ? this.style.paddingInline = t + "rem" : s === "py" && (this.style.paddingBlock = t + "rem");
  }
};
d.observedAttributes = ["gap", "p", "px", "py"];
let e = d;
a.define("sh-horz", e);
const l = class l extends HTMLElement {
  connectedCallback() {
    this.classList.add(r);
  }
  attributeChangedCallback(s, p, t) {
    s === "gap" ? this.style.gap = t + "rem" : s === "p" ? this.style.padding = t + "rem" : s === "px" ? this.style.paddingInline = t + "rem" : s === "py" && (this.style.paddingBlock = t + "rem");
  }
};
l.observedAttributes = ["gap", "p", "px", "py"];
let i = l;
a.define("sh-vert", i);
//# sourceMappingURL=hovert.js.map

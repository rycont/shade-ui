import { D as o } from "../../util-D2mgkBnY.js";
import { c as d } from "../../style.css-Bma0hoQJ.js";
import "../../theme.css.ts.vanilla-l0sNRNKZ.js";
const h = `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<style>.spinner_aj0A{transform-origin:center;animation:spinner_KYSC .75s infinite linear}@keyframes spinner_KYSC{100%{transform:rotate(360deg)}}</style>
<path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" class="spinner_aj0A" fill="currentColor"/></svg>`;
var c = "sh-ldku260", u = "sh-ldku261", b = "sh-ldku262", g = "sh-ldku263", l = "sh-ldku264", p = "sh-ldku265";
const A = {
  accent: u,
  secondary: b,
  ghost: g
}, e = class e extends HTMLElement {
  constructor() {
    super(), this.typeClass = null, this.loadingIcon = document.createElement("div"), this.loadingIcon.classList.add(p), this.loadingIcon.innerHTML = h;
  }
  connectedCallback() {
    this.setAttribute("aria-atomic", "true"), this.classList.add(c, d), this.insertAdjacentElement("afterbegin", this.loadingIcon), this.setInitialAttributes();
  }
  setInitialAttributes() {
    const t = this.getAttribute("type") || e.defaultType;
    this.setTypeClass(t);
    const s = this.getAttribute("disabled") !== null, i = this.getAttribute("loading") !== null;
    this.setDisability(s, i);
  }
  attributeChangedCallback(t, s, i) {
    if (t === "disabled") {
      const a = this.getAttribute("loading") !== null;
      this.setDisability(i !== null, a);
      return;
    }
    if (t === "type") {
      this.setTypeClass(i);
      return;
    }
    t === "loading" && this.setLoading(i !== null);
  }
  setTypeClass(t) {
    if (!t)
      return;
    this.typeClass && this.classList.remove(this.typeClass);
    const s = A[t];
    s && (this.classList.add(s), this.typeClass = s);
  }
  setDisability(t, s) {
    const i = this.parentElement instanceof HTMLAnchorElement, a = t || s;
    console.log(i);
    const r = i || a ? "-1" : "0";
    a ? (this.classList.add(l), this.setAttribute("aria-disabled", "true")) : (this.classList.remove(l), this.removeAttribute("aria-disabled")), this.setAttribute("tabindex", r);
  }
  setLoading(t) {
    t ? (this.setAttribute("aria-live", "polite"), this.setAttribute("aria-busy", "true")) : (this.removeAttribute("aria-live"), this.removeAttribute("aria-busy"));
  }
};
e.observedAttributes = ["disabled", "type", "icon", "loading"], e.defaultType = "primary";
let n = e;
const v = "sh-button";
o.define("sh-button", n);
export {
  v as default
};
//# sourceMappingURL=index.js.map

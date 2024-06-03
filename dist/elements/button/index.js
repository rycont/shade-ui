import { D as l } from "../../util-D2mgkBnY.js";
import { c as o } from "../../style.css-Bma0hoQJ.js";
import "../../theme.css.ts.vanilla-l0sNRNKZ.js";
const d = `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<style>.spinner_aj0A{transform-origin:center;animation:spinner_KYSC .75s infinite linear}@keyframes spinner_KYSC{100%{transform:rotate(360deg)}}</style>
<path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" class="spinner_aj0A" fill="currentColor"/></svg>`;
var h = "sh-ldku260", u = "sh-ldku261", c = "sh-ldku262", b = "sh-ldku263", n = "sh-ldku264", g = "sh-ldku265";
const p = {
  accent: u,
  secondary: c,
  ghost: b
}, e = class e extends HTMLElement {
  constructor() {
    super(), this.typeClass = null, this.loadingIcon = document.createElement("div"), this.loadingIcon.classList.add(g), this.loadingIcon.innerHTML = d;
  }
  connectedCallback() {
    this.setAttribute("aria-atomic", "true"), this.classList.add(h, o), this.insertAdjacentElement("afterbegin", this.loadingIcon), this.setInitialAttributes();
  }
  setInitialAttributes() {
    const t = this.getAttribute("type") || e.defaultType;
    this.setTypeClass(t);
    const s = this.getAttribute("disabled") !== null, i = this.getAttribute("loading") !== null;
    this.setDisability(s, i);
  }
  attributeChangedCallback(t, s, i) {
    if (t === "disabled") {
      const r = this.getAttribute("loading") !== null;
      this.setDisability(i !== null, r);
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
    const s = p[t];
    s && (this.classList.add(s), this.typeClass = s);
  }
  setDisability(t, s) {
    t || s ? (this.classList.add(n), this.setAttribute("aria-disabled", "true"), this.setAttribute("tabindex", "-1")) : (this.classList.remove(n), this.removeAttribute("aria-disabled"), this.setAttribute("tabindex", "0"));
  }
  setLoading(t) {
    t ? (this.setAttribute("aria-live", "polite"), this.setAttribute("aria-busy", "true")) : (this.removeAttribute("aria-live"), this.removeAttribute("aria-busy"));
  }
};
e.observedAttributes = ["disabled", "type", "icon", "loading"], e.defaultType = "primary";
let a = e;
const m = "sh-button";
l.define("sh-button", a);
export {
  m as default
};
//# sourceMappingURL=index.js.map

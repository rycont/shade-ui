import { D as l } from "./util-BfafNPJz.js";
import { c as o } from "./style.css-Cwz_uohT.js";
import "./theme.css.ts.vanilla-l0sNRNKZ.js";
var c = "sh-ui-ldku260", d = "sh-ui-ldku261", h = "sh-ui-ldku262", u = "sh-ui-ldku263", r = "sh-ui-ldku264", p = "sh-ui-ldku265";
const b = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_aj0A{transform-origin:center;animation:spinner_KYSC .75s infinite linear}@keyframes spinner_KYSC{100%{transform:rotate(360deg)}}</style><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" class="spinner_aj0A" fill="currentColor"/></svg>', g = {
  accent: d,
  secondary: h,
  ghost: u
}, e = class e extends HTMLElement {
  constructor() {
    super(), this.typeClass = null, this.iconWrapper = document.createElement("span");
  }
  connectedCallback() {
    this.classList.add(c, o), this.initializeIcon(), this.setInitialAttributes();
  }
  initializeIcon() {
    this.drawIcon(), this.insertBefore(this.iconWrapper, this.firstChild), this.iconWrapper.classList.add(p);
  }
  async drawIcon() {
    const t = await this.getIcon();
    t && (this.iconWrapper.innerHTML = t);
  }
  async getIcon() {
    if (this.getAttribute("loading") !== null)
      return b;
    const i = this.getAttribute("icon");
    return i ? await (await fetch(i)).text() : void 0;
  }
  setInitialAttributes() {
    const t = this.getAttribute("type") || e.defaultType;
    this.setTypeClass(t);
    const i = this.getAttribute("disabled") !== null, s = this.getAttribute("loading") !== null;
    this.setDisability(i, s);
  }
  attributeChangedCallback(t, i, s) {
    if (t === "disabled") {
      const n = this.getAttribute("loading") !== null;
      this.setDisability(s !== null, n);
      return;
    }
    if (t === "loading") {
      const n = this.getAttribute("disabled") !== null;
      this.setDisability(n, s !== null), this.drawIcon();
      return;
    }
    if (t === "type") {
      this.setTypeClass(s);
      return;
    }
    if (t === "icon") {
      this.drawIcon();
      return;
    }
  }
  setTypeClass(t) {
    if (!t)
      return;
    this.typeClass && this.classList.remove(this.typeClass);
    const i = g[t];
    i && (this.classList.add(i), this.typeClass = i);
  }
  setDisability(t, i) {
    t || i ? (this.classList.add(r), this.setAttribute("aria-disabled", "true"), this.setAttribute("tabindex", "-1")) : (this.classList.remove(r), this.removeAttribute("aria-disabled"), this.setAttribute("tabindex", "0"));
  }
};
e.observedAttributes = ["disabled", "type", "loading", "icon"], e.defaultType = "primary";
let a = e;
l.define("sh-button", a);
//# sourceMappingURL=button.js.map

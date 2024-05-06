var d = Object.defineProperty;
var u = (n, s, t) => s in n ? d(n, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[s] = t;
var a = (n, s, t) => (u(n, typeof s != "symbol" ? s + "" : s, t), t);
import { D as h } from "./util-ve1EjmCE.js";
import { c as p } from "./style.css-8cEf3HUX.js";
import "./theme.css.ts.vanilla-l0sNRNKZ.js";
var b = "sh-ui-ldku260", g = "sh-ui-ldku261", y = "sh-ui-ldku262", f = "sh-ui-ldku263", c = "sh-ui-ldku264", A = "sh-ui-ldku265";
const C = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_aj0A{transform-origin:center;animation:spinner_KYSC .75s infinite linear}@keyframes spinner_KYSC{100%{transform:rotate(360deg)}}</style><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" class="spinner_aj0A" fill="currentColor"/></svg>', m = {
  accent: g,
  secondary: y,
  ghost: f
}, r = class r extends HTMLElement {
  constructor() {
    super();
    a(this, "typeClass", null);
    a(this, "iconWrapper", document.createElement("span"));
  }
  connectedCallback() {
    this.classList.add(b, p), this.initializeIcon(), this.setInitialAttributes();
  }
  initializeIcon() {
    this.drawIcon(), this.insertBefore(this.iconWrapper, this.firstChild), this.iconWrapper.classList.add(A);
  }
  async drawIcon() {
    const t = await this.getIcon();
    t && (this.iconWrapper.innerHTML = t);
  }
  async getIcon() {
    if (this.getAttribute("loading") !== null)
      return C;
    const i = this.getAttribute("icon");
    return i ? await (await fetch(i)).text() : void 0;
  }
  setInitialAttributes() {
    const t = this.getAttribute("type") || r.defaultType;
    this.setTypeClass(t);
    const i = this.getAttribute("disabled") !== null, e = this.getAttribute("loading") !== null;
    this.setDisability(i, e);
  }
  attributeChangedCallback(t, i, e) {
    if (t === "disabled") {
      const l = this.getAttribute("loading") !== null;
      this.setDisability(e !== null, l);
      return;
    }
    if (t === "loading") {
      const l = this.getAttribute("disabled") !== null;
      this.setDisability(l, e !== null), this.drawIcon();
      return;
    }
    if (t === "type") {
      this.setTypeClass(e);
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
    const i = m[t];
    i && (this.classList.add(i), this.typeClass = i);
  }
  setDisability(t, i) {
    t || i ? (this.classList.add(c), this.setAttribute("aria-disabled", "true"), this.setAttribute("tabindex", "-1")) : (this.classList.remove(c), this.removeAttribute("aria-disabled"), this.setAttribute("tabindex", "0"));
  }
};
a(r, "observedAttributes", ["disabled", "type", "loading", "icon"]), a(r, "defaultType", "primary");
let o = r;
h.define("sh-button", o);
//# sourceMappingURL=button.js.map

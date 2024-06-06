import { D as o } from "../../util-D2mgkBnY.js";
import { c as d } from "../../style.css-Bma0hoQJ.js";
import "../../theme.css.ts.vanilla-l0sNRNKZ.js";
const h = `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<style>.spinner_aj0A{transform-origin:center;animation:spinner_KYSC .75s infinite linear}@keyframes spinner_KYSC{100%{transform:rotate(360deg)}}</style>
<path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" class="spinner_aj0A" fill="currentColor"/></svg>`;
var c = "sh-ldku260", u = "sh-ldku261", b = "sh-ldku262", p = "sh-ldku263", r = "sh-ldku264", y = "sh-ldku265";
const g = {
  accent: u,
  secondary: b,
  ghost: p
}, n = class n extends HTMLElement {
  constructor() {
    super(), this.typeClass = null, this.loadingIcon = document.createElement("div"), this.loadingIcon.classList.add(y), this.loadingIcon.innerHTML = h;
  }
  connectedCallback() {
    this.addEventListener("click", (t) => {
      this.getAttribute("type") === "submit" && this.submit();
    }), this.addEventListener("keydown", (t) => {
      const s = t.key === "Enter", i = t.key === " ";
      !s && !i || this.getAttribute("type") === "submit" && this.submit();
    }), this.setAttribute("aria-atomic", "true"), this.classList.add(c, d), this.insertAdjacentElement("afterbegin", this.loadingIcon), this.setInitialAttributes();
  }
  submit() {
    var s, i;
    const t = document.createElement("input");
    t.type = "submit", t.style.display = "none", (s = this.parentElement) == null || s.appendChild(t), t.click(), (i = this.parentElement) == null || i.removeChild(t);
  }
  setInitialAttributes() {
    const t = this.getAttribute("type") || n.defaultType;
    this.setTypeClass(t);
    const s = this.getAttribute("disabled") !== null, i = this.getAttribute("loading") !== null;
    this.setDisability(s, i);
  }
  attributeChangedCallback(t, s, i) {
    if (t === "disabled") {
      const e = this.getAttribute("loading") !== null;
      this.setDisability(i !== null, e);
      return;
    }
    if (t === "type") {
      this.setTypeClass(i);
      return;
    }
    if (t === "loading") {
      this.setLoading(i !== null);
      const e = this.getAttribute("disabled") !== null;
      this.setDisability(e, i !== null), console.log(e, i);
      return;
    }
  }
  setTypeClass(t) {
    if (!t)
      return;
    this.typeClass && this.classList.remove(this.typeClass);
    const s = g[t];
    s && (this.classList.add(s), this.typeClass = s);
  }
  setDisability(t, s) {
    const i = this.parentElement instanceof HTMLAnchorElement, e = t || s, a = i || e ? "-1" : "0";
    e ? (this.classList.add(r), this.setAttribute("aria-disabled", "true")) : (this.classList.remove(r), this.removeAttribute("aria-disabled")), this.setAttribute("tabindex", a);
  }
  setLoading(t) {
    t ? (this.setAttribute("aria-live", "polite"), this.setAttribute("aria-busy", "true"), this.loadingIcon.style.setProperty("display", "block")) : (this.removeAttribute("aria-live"), this.removeAttribute("aria-busy"), this.loadingIcon.style.setProperty("display", "none"));
  }
  set textContent(t) {
    this.childNodes.forEach((s) => {
      var a;
      !(s instanceof Text) || !((a = s.textContent) != null && a.trim().length) || (s.textContent = t);
    });
  }
};
n.observedAttributes = ["disabled", "type", "icon", "loading"], n.defaultType = "primary";
let l = n;
const v = "sh-button";
o.define("sh-button", l);
export {
  v as default
};
//# sourceMappingURL=index.js.map

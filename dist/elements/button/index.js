import { D as o } from "../../util-D2mgkBnY.js";
import { c as d } from "../../style.css-Bma0hoQJ.js";
import "../../theme.css.ts.vanilla-l0sNRNKZ.js";
const h = `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<style>.spinner_aj0A{transform-origin:center;animation:spinner_KYSC .75s infinite linear}@keyframes spinner_KYSC{100%{transform:rotate(360deg)}}</style>
<path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" class="spinner_aj0A" fill="currentColor"/></svg>`;
var c = "sh-ldku260", u = "sh-ldku261", b = "sh-ldku262", p = "sh-ldku263", r = "sh-ldku264", y = "sh-ldku265";
const m = {
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
      const e = t.key === "Enter", s = t.key === " ";
      !e && !s || this.getAttribute("type") === "submit" && this.submit();
    }), this.setAttribute("aria-atomic", "true"), this.classList.add(c, d), this.insertAdjacentElement("afterbegin", this.loadingIcon), this.setInitialAttributes();
  }
  submit() {
    var e, s;
    const t = document.createElement("input");
    t.type = "submit", t.style.display = "none", (e = this.parentElement) == null || e.appendChild(t), t.click(), (s = this.parentElement) == null || s.removeChild(t);
  }
  setInitialAttributes() {
    const t = this.getAttribute("type") || n.defaultType;
    this.setTypeClass(t);
    const e = this.getAttribute("disabled") !== null, s = this.getAttribute("loading") !== null;
    this.setDisability(e, s);
  }
  attributeChangedCallback(t, e, s) {
    if (t === "disabled") {
      const i = this.getAttribute("loading") !== null;
      this.setDisability(s !== null, i);
      return;
    }
    if (t === "type") {
      this.setTypeClass(s);
      return;
    }
    if (t === "loading") {
      this.setLoading(s !== null);
      const i = this.getAttribute("disabled") !== null;
      this.setDisability(i, s !== null), console.log(i, s);
      return;
    }
  }
  setTypeClass(t) {
    if (!t)
      return;
    this.typeClass && this.classList.remove(this.typeClass);
    const e = m[t];
    e && (this.classList.add(e), this.typeClass = e);
  }
  setDisability(t, e) {
    const s = this.parentElement instanceof HTMLAnchorElement, i = t || e, l = s || i ? "-1" : "0";
    i ? (this.classList.add(r), this.setAttribute("aria-disabled", "true")) : (this.classList.remove(r), this.removeAttribute("aria-disabled")), this.setAttribute("tabindex", l);
  }
  setLoading(t) {
    t ? (this.setAttribute("aria-live", "polite"), this.setAttribute("aria-busy", "true"), this.loadingIcon.style.setProperty("display", "block")) : (this.removeAttribute("aria-live"), this.removeAttribute("aria-busy"), this.loadingIcon.style.setProperty("display", "none"));
  }
  set textContent(t) {
    const e = Array.from(this.childNodes).filter(
      (s) => {
        var i;
        return s instanceof Text && ((i = s.textContent) == null ? void 0 : i.trim().length);
      }
    );
    for (const s of e)
      this.removeChild(s);
    this.appendChild(document.createTextNode(t));
  }
};
n.observedAttributes = ["disabled", "type", "icon", "loading"], n.defaultType = "primary";
let a = n;
const v = "sh-button";
o.define("sh-button", a);
export {
  v as default
};
//# sourceMappingURL=index.js.map

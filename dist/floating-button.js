var s = Object.defineProperty;
var c = (e, o, t) => o in e ? s(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t;
var n = (e, o, t) => (c(e, typeof o != "symbol" ? o + "" : o, t), t);
import { D as h } from "./util-D2mgkBnY.js";
import "./theme.css.ts.vanilla-l0sNRNKZ.js";
import "./style.css.ts.vanilla-l0sNRNKZ.js";
var a = "sh-1y8b0hx0", l = "sh-1y8b0hx1";
class u extends HTMLElement {
  constructor() {
    super();
    n(this, "iconWrapper", document.createElement("span"));
    this.iconWrapper.classList.add(l);
  }
  connectedCallback() {
    this.classList.add(a), this.hasAttribute("icon") && this.drawIcon(), this.hasAttribute("text-color") && this.setTextColor(), this.hasAttribute("background-color") && this.setBackgroundColor();
  }
  async drawIcon() {
    const t = this.getAttribute("icon");
    if (!t)
      return;
    const i = await (await fetch(t)).text();
    this.iconWrapper.innerHTML = i, this.insertBefore(this.iconWrapper, this.firstChild), this.setIconSize();
  }
  setIconSize() {
    const t = this.iconWrapper;
    if (!t)
      return;
    const r = this.getAttribute("icon-width"), i = this.getAttribute("icon-height");
    r && t.style.setProperty(
      "--sh-floating-button-icon-width",
      r
    ), i && t.style.setProperty(
      "--sh-floating-button-icon-height",
      i
    );
  }
  setTextColor() {
    const t = this.getAttribute("text-color");
    t && this.style.setProperty("--sh-floating-button-text-color", t);
  }
  setBackgroundColor() {
    const t = this.getAttribute("background-color");
    t && this.style.setProperty(
      "--sh-floating-button-background-color",
      t
    );
  }
}
h.define("sh-floating-button", u);
export {
  u as ShadeFloatingButton
};
//# sourceMappingURL=floating-button.js.map

import { D as e } from "./util-D2mgkBnY.js";
import "./theme.css.ts.vanilla-l0sNRNKZ.js";
import "./style.css.ts.vanilla-l0sNRNKZ.js";
var r = "sh-1y8b0hx0", s = "sh-1y8b0hx1";
class n extends HTMLElement {
  constructor() {
    super(), this.iconWrapper = document.createElement("span"), this.iconWrapper.classList.add(s);
  }
  connectedCallback() {
    this.classList.add(r), this.hasAttribute("icon") && this.drawIcon(), this.hasAttribute("text-color") && this.setTextColor(), this.hasAttribute("background-color") && this.setBackgroundColor();
  }
  async drawIcon() {
    const t = this.getAttribute("icon");
    if (!t)
      return;
    const o = await (await fetch(t)).text();
    this.iconWrapper.innerHTML = o, this.insertBefore(this.iconWrapper, this.firstChild), this.setIconSize();
  }
  setIconSize() {
    const t = this.iconWrapper;
    if (!t)
      return;
    const i = this.getAttribute("icon-width"), o = this.getAttribute("icon-height");
    i && t.style.setProperty(
      "--sh-floating-button-icon-width",
      i
    ), o && t.style.setProperty(
      "--sh-floating-button-icon-height",
      o
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
e.define("sh-floating-button", n);
export {
  n as ShadeFloatingButton
};
//# sourceMappingURL=floating-button.js.map

import { D as c } from "../../util-D2mgkBnY.js";
import { TITLE as r } from "../typo/index.js";
var o = "sh-hhjap90";
const t = class t extends HTMLElement {
  constructor() {
    super(), this.titleElement = document.createElement(r);
  }
  connectedCallback() {
    this.classList.add(o), this.insertAdjacentElement("afterbegin", this.titleElement);
  }
  attributeChangedCallback(l, m, n) {
    if (l === "title") {
      this.titleElement.textContent = n;
      return;
    }
    if (l === "back") {
      const e = n !== null, s = this.titleElement.textContent;
      this.titleElement.textContent = (e ? "←" : "") + s, this.titleElement.style.cursor = e ? "pointer" : "default", e ? this.titleElement.addEventListener(
        "click",
        t.onTitleClicked
      ) : this.titleElement.removeEventListener(
        "click",
        t.onTitleClicked
      );
      return;
    }
  }
  static onTitleClicked() {
    history.back();
  }
};
t.observedAttributes = ["title", "back"];
let i = t;
const a = "sh-title-bar";
c.define(a, i);
export {
  a as default
};
//# sourceMappingURL=index.js.map

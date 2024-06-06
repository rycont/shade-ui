import { p as s, D as l } from "../../util-D2mgkBnY.js";
import { l as a } from "../../Link-OoiLAnWb.js";
var h = "sh-1k4964y0", c = "sh-1k4964y1";
const i = class i extends HTMLElement {
  constructor() {
    super(), this.anchorElement = document.createElement("a"), this.iconElement = document.createElement("span"), this.anchorElement.classList.add(h), this.iconElement.classList.add(c), s(this.anchorElement, this, [
      "href",
      "target",
      "rel",
      "download",
      "hreflang",
      "type",
      "referrerpolicy",
      "as",
      "crossorigin",
      "integrity",
      "media",
      "nonce",
      "referrerpolicy",
      "sizes",
      "title"
    ]);
  }
  connectedCallback() {
    this.iconElement.innerHTML = a, this.appendChild(this.iconElement), this.appendChild(this.anchorElement);
  }
  attributeChangedCallback(e, r, t) {
    r !== t && (e === "text" && (this.anchorElement.textContent = t), e === "href" && (this.anchorElement.href = t || ""));
  }
  appendChild(e) {
    return [this, this.anchorElement, this.iconElement].includes(
      e
    ) ? super.appendChild(e) : this.anchorElement.appendChild(e);
  }
};
i.observedAttributes = ["text", "href"];
let n = i;
const o = "sh-inline-link";
l.define(o, n);
export {
  n as ShadeInlineLink,
  o as default
};
//# sourceMappingURL=index.js.map

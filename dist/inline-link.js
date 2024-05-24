import { p as r, D as l } from "./util-D2mgkBnY.js";
const h = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2426 10.357L11.2998 9.41424L12.2426 8.47144C13.5443 7.16971 13.5443 5.05915 12.2426 3.7574C10.9408 2.45565 8.83024 2.45565 7.52851 3.7574L6.5857 4.70021L5.64289 3.7574L6.5857 2.81459C8.40817 0.992142 11.3629 0.992142 13.1854 2.81459C15.0078 4.63704 15.0078 7.59178 13.1854 9.41424L12.2426 10.357ZM10.3569 12.2427L9.41411 13.1855C7.59171 15.0079 4.63691 15.0079 2.81447 13.1855C0.99202 11.363 0.99202 8.40824 2.81447 6.58583L3.75727 5.64302L4.70009 6.58583L3.75727 7.52864C2.45553 8.83038 2.45553 10.9409 3.75727 12.2427C5.05902 13.5444 7.16957 13.5444 8.47131 12.2427L9.41411 11.2998L10.3569 12.2427ZM9.88551 5.17162L10.8284 6.11442L6.1143 10.8284L5.17149 9.88564L9.88551 5.17162Z" fill="currentColor"/>
</svg>
`;
var a = "sh-1k4964y0", c = "sh-1k4964y1";
const i = class i extends HTMLElement {
  constructor() {
    super(), this.anchorElement = document.createElement("a"), this.iconElement = document.createElement("span"), this.anchorElement.classList.add(a), this.iconElement.classList.add(c), r(this.anchorElement, this, [
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
    this.iconElement.innerHTML = h, this.appendChild(this.iconElement), this.appendChild(this.anchorElement);
  }
  attributeChangedCallback(e, s, t) {
    s !== t && (e === "text" && (this.anchorElement.textContent = t), e === "href" && (this.anchorElement.href = t || ""));
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
//# sourceMappingURL=inline-link.js.map

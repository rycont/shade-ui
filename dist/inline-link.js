var h = Object.defineProperty;
var a = (n, t, e) => t in n ? h(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var i = (n, t, e) => (a(n, typeof t != "symbol" ? t + "" : t, e), e);
import { D as c, p as o } from "./util-D2mgkBnY.js";
const d = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2426 10.357L11.2998 9.41424L12.2426 8.47144C13.5443 7.16971 13.5443 5.05915 12.2426 3.7574C10.9408 2.45565 8.83024 2.45565 7.52851 3.7574L6.5857 4.70021L5.64289 3.7574L6.5857 2.81459C8.40817 0.992142 11.3629 0.992142 13.1854 2.81459C15.0078 4.63704 15.0078 7.59178 13.1854 9.41424L12.2426 10.357ZM10.3569 12.2427L9.41411 13.1855C7.59171 15.0079 4.63691 15.0079 2.81447 13.1855C0.99202 11.363 0.99202 8.40824 2.81447 6.58583L3.75727 5.64302L4.70009 6.58583L3.75727 7.52864C2.45553 8.83038 2.45553 10.9409 3.75727 12.2427C5.05902 13.5444 7.16957 13.5444 8.47131 12.2427L9.41411 11.2998L10.3569 12.2427ZM9.88551 5.17162L10.8284 6.11442L6.1143 10.8284L5.17149 9.88564L9.88551 5.17162Z" fill="currentColor"/>
</svg>
`;
var p = "sh-1k4964y0", L = "sh-1k4964y1";
class s extends HTMLElement {
  constructor() {
    super();
    i(this, "anchorElement", document.createElement("a"));
    i(this, "iconElement", document.createElement("span"));
    this.anchorElement.classList.add(p), this.iconElement.classList.add(L), o(this.anchorElement, this, [
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
    this.iconElement.innerHTML = d, this.appendChild(this.iconElement), this.appendChild(this.anchorElement);
  }
  attributeChangedCallback(e, l, r) {
    l !== r && (e === "text" && (this.anchorElement.textContent = r), e === "href" && (this.anchorElement.href = r || ""));
  }
  appendChild(e) {
    return [this, this.anchorElement, this.iconElement].includes(
      e
    ) ? super.appendChild(e) : this.anchorElement.appendChild(e);
  }
}
i(s, "observedAttributes", ["text", "href"]);
const m = "sh-inline-link";
c.define(m, s);
export {
  s as ShadeInlineLink,
  m as default
};
//# sourceMappingURL=inline-link.js.map
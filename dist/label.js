import { SUBTITLE as c, SMALL_TEXT as E } from "./typo.js";
import { D as h } from "./util-D2mgkBnY.js";
import "./theme.css.ts.vanilla-l0sNRNKZ.js";
var d = "sh-1t9t5490", p = "sh-1t9t5491", g = "sh-1t9t5492", u = "sh-1t9t5493";
const m = class m extends HTMLElement {
  constructor() {
    super(), this._labelElement = null, this._titleElement = null, this._descriptionElement = null, this._messageElement = null;
  }
  connectedCallback() {
    this.insertBefore(this.labelElement, this.firstChild), this.messageElement && this.append(this.messageElement);
  }
  attributeChangedCallback(e, t, s) {
    var r, i, a, o;
    if (e === "title")
      this.titleElement.textContent = s;
    else if (e === "description")
      if (!s)
        (r = this._descriptionElement) == null || r.remove(), this._descriptionElement = null;
      else {
        const n = this.descriptionElement;
        n.textContent = s, (a = (i = this._labelElement) == null ? void 0 : i.appendChild) == null || a.call(i, n);
      }
    else if (e === "message")
      if (!s)
        (o = this._messageElement) == null || o.remove(), this._messageElement = null;
      else {
        const n = this.messageElement;
        n.textContent = s, this.append(n);
      }
  }
  get labelElement() {
    if (this._labelElement)
      return this._labelElement;
    const e = document.createElement("label");
    e.classList.add(p), e.append(this.titleElement);
    const t = this.descriptionElement;
    return t && e.append(t), this._labelElement = e, e;
  }
  get titleElement() {
    if (this._titleElement)
      return this._titleElement;
    const e = document.createElement(c);
    return e.textContent = this.getAttribute("title") || "NO TITLE", e.classList.add(d), this._titleElement = e, e;
  }
  get descriptionElement() {
    if (this._descriptionElement)
      return this._descriptionElement;
    const e = document.createElement(E), t = this.getAttribute("description");
    return t ? (e.textContent = t, e.classList.add(g), this._descriptionElement = e, e) : null;
  }
  get messageElement() {
    if (this._messageElement)
      return this._messageElement;
    const e = this.getAttribute("message");
    if (!e)
      return null;
    const t = document.createElement(E);
    return t.textContent = e, t.classList.add(u), this._messageElement = t, t;
  }
};
m.observedAttributes = ["title", "message", "description"];
let l = m;
h.define("sh-label", l);
//# sourceMappingURL=label.js.map

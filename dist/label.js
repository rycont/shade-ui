import { SUBTITLE as c, SMALL_TEXT as E } from "./typo.js";
import { D as h } from "./util-BfafNPJz.js";
import "./theme.css.ts.vanilla-l0sNRNKZ.js";
var d = "sh-ui-1t9t5490", p = "sh-ui-1t9t5491", u = "sh-ui-1t9t5492", g = "sh-ui-1t9t5493";
const m = class m extends HTMLElement {
  constructor() {
    super(), this._labelElement = null, this._titleElement = null, this._descriptionElement = null, this._messageElement = null;
  }
  connectedCallback() {
    this.insertBefore(this.labelElement, this.firstChild), this.messageElement && this.append(this.messageElement);
  }
  attributeChangedCallback(e, t, s) {
    var r, n, a, o;
    if (e === "title")
      this.titleElement.textContent = s;
    else if (e === "description")
      if (!s)
        (r = this._descriptionElement) == null || r.remove(), this._descriptionElement = null;
      else {
        const i = this.descriptionElement;
        i.textContent = s, (a = (n = this._labelElement) == null ? void 0 : n.appendChild) == null || a.call(n, i);
      }
    else if (e === "message")
      if (!s)
        (o = this._messageElement) == null || o.remove(), this._messageElement = null;
      else {
        const i = this.messageElement;
        i.textContent = s, this.append(i);
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
    return t ? (e.textContent = t, e.classList.add(u), this._descriptionElement = e, e) : null;
  }
  get messageElement() {
    if (this._messageElement)
      return this._messageElement;
    const e = this.getAttribute("message");
    if (!e)
      return null;
    const t = document.createElement(E);
    return t.textContent = e, t.classList.add(g), this._messageElement = t, t;
  }
};
m.observedAttributes = ["title", "message", "description"];
let l = m;
h.define("sh-label", l);
//# sourceMappingURL=label.js.map

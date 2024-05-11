var h = Object.defineProperty;
var p = (n, s, e) => s in n ? h(n, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[s] = e;
var l = (n, s, e) => (p(n, typeof s != "symbol" ? s + "" : s, e), e);
import { SUBTITLE as g, SMALL_TEXT as c } from "./typo.js";
import { D as u } from "./util-D2mgkBnY.js";
import "./theme.css.ts.vanilla-l0sNRNKZ.js";
var _ = "sh-1t9t5490", b = "sh-1t9t5491", f = "sh-1t9t5492", C = "sh-1t9t5493";
class d extends HTMLElement {
  constructor() {
    super();
    l(this, "_labelElement", null);
    l(this, "_titleElement", null);
    l(this, "_descriptionElement", null);
    l(this, "_messageElement", null);
  }
  connectedCallback() {
    this.insertBefore(this.labelElement, this.firstChild), this.messageElement && this.append(this.messageElement);
  }
  attributeChangedCallback(e, t, i) {
    var a, r, o, E;
    if (e === "title")
      this.titleElement.textContent = i;
    else if (e === "description")
      if (!i)
        (a = this._descriptionElement) == null || a.remove(), this._descriptionElement = null;
      else {
        const m = this.descriptionElement;
        m.textContent = i, (o = (r = this._labelElement) == null ? void 0 : r.appendChild) == null || o.call(r, m);
      }
    else if (e === "message")
      if (!i)
        (E = this._messageElement) == null || E.remove(), this._messageElement = null;
      else {
        const m = this.messageElement;
        m.textContent = i, this.append(m);
      }
  }
  get labelElement() {
    if (this._labelElement)
      return this._labelElement;
    const e = document.createElement("label");
    e.classList.add(b), e.append(this.titleElement);
    const t = this.descriptionElement;
    return t && e.append(t), this._labelElement = e, e;
  }
  get titleElement() {
    if (this._titleElement)
      return this._titleElement;
    const e = document.createElement(g);
    return e.textContent = this.getAttribute("title") || "NO TITLE", e.classList.add(_), this._titleElement = e, e;
  }
  get descriptionElement() {
    if (this._descriptionElement)
      return this._descriptionElement;
    const e = document.createElement(c), t = this.getAttribute("description");
    return t ? (e.textContent = t, e.classList.add(f), this._descriptionElement = e, e) : null;
  }
  get messageElement() {
    if (this._messageElement)
      return this._messageElement;
    const e = this.getAttribute("message");
    if (!e)
      return null;
    const t = document.createElement(c);
    return t.textContent = e, t.classList.add(C), this._messageElement = t, t;
  }
}
l(d, "observedAttributes", ["title", "message", "description"]);
u.define("sh-label", d);
//# sourceMappingURL=label.js.map

var h = Object.defineProperty;
var p = (n, s, e) => s in n ? h(n, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[s] = e;
var i = (n, s, e) => (p(n, typeof s != "symbol" ? s + "" : s, e), e);
import { SUBTITLE as u, SMALL_TEXT as c } from "./typo.js";
import { D as g } from "./util-ve1EjmCE.js";
import "./theme.css.ts.vanilla-l0sNRNKZ.js";
var _ = "sh-ui-1t9t5490", b = "sh-ui-1t9t5491", f = "sh-ui-1t9t5492", C = "sh-ui-1t9t5493";
class d extends HTMLElement {
  constructor() {
    super();
    i(this, "_labelElement", null);
    i(this, "_titleElement", null);
    i(this, "_descriptionElement", null);
    i(this, "_messageElement", null);
  }
  connectedCallback() {
    this.insertBefore(this.labelElement, this.firstChild), this.messageElement && this.append(this.messageElement);
  }
  attributeChangedCallback(e, t, l) {
    var a, r, o, E;
    if (e === "title")
      this.titleElement.textContent = l;
    else if (e === "description")
      if (!l)
        (a = this._descriptionElement) == null || a.remove(), this._descriptionElement = null;
      else {
        const m = this.descriptionElement;
        m.textContent = l, (o = (r = this._labelElement) == null ? void 0 : r.appendChild) == null || o.call(r, m);
      }
    else if (e === "message")
      if (!l)
        (E = this._messageElement) == null || E.remove(), this._messageElement = null;
      else {
        const m = this.messageElement;
        m.textContent = l, this.append(m);
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
    const e = document.createElement(u);
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
i(d, "observedAttributes", ["title", "message", "description"]);
g.define("sh-label", d);
//# sourceMappingURL=label.js.map

var f = Object.defineProperty;
var u = (s, t, e) => t in s ? f(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var d = (s, t, e) => (u(s, typeof t != "symbol" ? t + "" : t, e), e);
function a(s, t, e) {
  for (const i of e) {
    const n = t.getAttribute(i);
    n !== null && s.setAttribute(i, n);
  }
}
class c {
  static define(t, e) {
    this.defined.has(t) || (customElements.define(t, e), this.defined.add(t));
  }
}
d(c, "defined", /* @__PURE__ */ new Set());
export {
  c as D,
  a as p
};
//# sourceMappingURL=util-ve1EjmCE.js.map

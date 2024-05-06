function u(n, t, s) {
  for (const e of s) {
    const d = t.getAttribute(e);
    d !== null && n.setAttribute(e, d);
  }
}
const i = class i {
  static define(t, s) {
    this.defined.has(t) || (customElements.define(t, s), this.defined.add(t));
  }
};
i.defined = /* @__PURE__ */ new Set();
let f = i;
export {
  f as D,
  u as p
};
//# sourceMappingURL=util-BfafNPJz.js.map

function o(s, t, e) {
  for (const n of e) {
    const i = t.getAttribute(n);
    i !== null && s.setAttribute(n, i);
  }
}
class f {
  static define(t, e) {
    customElements.get(t) || (customElements.define(t, e), console.info(`${t} defined`));
  }
}
export {
  f as D,
  o as p
};
//# sourceMappingURL=util-D2mgkBnY.js.map

import { D as n } from "./util-D2mgkBnY.js";
import { t as o, s as c, a, b as l, c as T } from "./style.css-Bma0hoQJ.js";
const m = t("sh-title", o), E = t("sh-small-text", c), d = t("sh-subtitle", a), h = t(
  "sh-text_content",
  l
), u = t("sh-token", T);
function t(s, e) {
  return n.define(
    s,
    class extends HTMLElement {
      constructor() {
        super();
      }
      connectedCallback() {
        this.classList.add(e);
      }
    }
  ), s;
}
export {
  E as SMALL_TEXT,
  d as SUBTITLE,
  h as TEXT_CONTENT,
  m as TITLE,
  u as TOKEN
};
//# sourceMappingURL=typo.js.map

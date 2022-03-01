import { c as create_ssr_component, v as validate_component } from "../../chunks/index-be6ceb3a.js";
import { c as classAdderBuilder, D as Div, H as H1, a as H2 } from "../../chunks/ActionIcons-b94138a2.js";
var AppContent = classAdderBuilder({
  class: "mdc-drawer-app-content",
  component: Div
});
classAdderBuilder({
  class: "mdc-drawer__content",
  component: Div
});
classAdderBuilder({
  class: "mdc-drawer__header",
  component: Div
});
classAdderBuilder({
  class: "mdc-drawer__title",
  component: H1
});
classAdderBuilder({
  class: "mdc-drawer__subtitle",
  component: H2
});
var Footer_svelte_svelte_type_style_lang = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".section-body{display:flex;justify-content:center;padding:50px 0}.bg-img{background-position:center center;background-repeat:no-repeat;background-size:cover;background-color:#fff}app,body,html{display:block !important;height:auto !important;width:auto !important;position:static !important;background-color:#191B1B}.svelte-1xtz7nj .app-content{flex:auto;overflow:auto;position:relative;flex-grow:1}.hidden{display:none}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(AppContent, "AppContent").$$render($$result, { class: "app-content" }, {}, {
    default: () => {
      return `<main class="${"main-content svelte-1xtz7nj"}">${slots.default ? slots.default({}) : ``}</main>`;
    }
  })} 

`;
});
export { _layout as default };

import { c as create_ssr_component, a as add_attribute, b as escape, v as validate_component } from "../../../chunks/index2.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
import { k as keywords, s as siteBaseUrl, d as description, t as title, i as image } from "../../../chunks/meta.js";
const Waves_svelte_svelte_type_style_lang = "";
const css = {
  code: ".waves-container.svelte-of6vnk.svelte-of6vnk{background:linear-gradient(60deg, var(--color--waves-start) 0%, var(--color--waves-end) 100%);position:absolute;width:100%;height:min(65vh, 500px)}@media(max-width: 767px){.waves-container.svelte-of6vnk.svelte-of6vnk{height:min(75vh, 400px)}}.waves.svelte-of6vnk.svelte-of6vnk{position:absolute;bottom:0;width:100%;height:15vh;min-height:100px;max-height:150px}@media screen and (prefers-reduced-motion: no-preference){.parallax.svelte-of6vnk>use.svelte-of6vnk{animation:svelte-of6vnk-move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite}}.parallax.svelte-of6vnk>use.svelte-of6vnk:nth-child(1){animation-delay:-2s;animation-duration:7s}.parallax.svelte-of6vnk>use.svelte-of6vnk:nth-child(2){animation-delay:-3s;animation-duration:10s}.parallax.svelte-of6vnk>use.svelte-of6vnk:nth-child(3){animation-delay:-4s;animation-duration:13s}.parallax.svelte-of6vnk>use.svelte-of6vnk:nth-child(4){animation-delay:-5s;animation-duration:20s}@keyframes svelte-of6vnk-move-forever{0%{transform:translate3d(-90px, 0, 0)}100%{transform:translate3d(85px, 0, 0)}}",
  map: null
};
const Waves = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="waves-container svelte-of6vnk"><svg class="waves svelte-of6vnk" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path></defs><g class="parallax svelte-of6vnk"><use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(var(--color--page-background-rgb),0.7)" class="svelte-of6vnk"></use><use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(var(--color--page-background-rgb),0.5)" class="svelte-of6vnk"></use><use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(var(--color--page-background-rgb),0.3)" class="svelte-of6vnk"></use><use xlink:href="#gentle-wave" x="48" y="7" fill="var(--color--page-background)" class="svelte-of6vnk"></use></g></svg></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-12ekxku_START --><link rel="“canonical”"${add_attribute("href", siteBaseUrl, 0)}><meta name="keywords"${add_attribute("content", keywords.join(", "), 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta name="twitter:description"${add_attribute("content", description, 0)}>${$$result.title = `<title>${escape(title)}</title>`, ""}<meta property="og:title"${add_attribute("content", title, 0)}><meta name="twitter:title"${add_attribute("content", title, 0)}><meta property="og:image"${add_attribute("content", image, 0)}><meta name="twitter:image"${add_attribute("content", image, 0)}><meta name="twitter:card" content="summary_large_image"><!-- HEAD_svelte-12ekxku_END -->`, ""}


${validate_component(Waves, "Waves").$$render($$result, {}, {}, {})}
${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<main>${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};

import { c as create_ssr_component, d as subscribe, a as add_attribute, v as validate_component } from "./index2.js";
import { S as Socials } from "./Socials.js";
import { w as writable } from "./index.js";
const Logo_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".logo.svelte-qu2viy.svelte-qu2viy{width:auto;height:100%;display:flex;gap:16px;align-items:center}@media(max-width: 767px){.logo.svelte-qu2viy.svelte-qu2viy{gap:8px}}.logo.svelte-qu2viy #logo-text.svelte-qu2viy{width:auto;height:100%;max-height:28px}.logo.svelte-qu2viy #logo-text #text.svelte-qu2viy{transition:all 0.2s ease-in-out;fill:var(--color--text)}.logo.svelte-qu2viy:hover #logo-text.svelte-qu2viy{filter:drop-shadow(0px 0px 3px var(--color--primary))}@media screen and (prefers-reduced-motion: no-preference){.animated.svelte-qu2viy #text.svelte-qu2viy{animation:svg-text-stroke 3s;stroke-width:2;--text-color:var(--color--text)}}",
  map: null
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { animated = true } = $$props;
  if ($$props.animated === void 0 && $$bindings.animated && animated !== void 0)
    $$bindings.animated(animated);
  $$result.css.add(css$4);
  return `<div class="${["logo svelte-qu2viy", animated ? "animated" : ""].join(" ").trim()}"><svg id="logo-text" width="723.84009" height="116.720268" viewBox="0 0 723.84009 116.720269" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qu2viy"><text xml:space="preserve" id="text" transform="translate(-278.77228,-206.83728)" class="svelte-qu2viy"><tspan x="275.57227" y="292.17088" id="tspan1319"><tspan style="font-size:106.667px;font-family:YoungSerif;" id="tspan1317">SocSci 1</tspan></tspan></text></svg>
</div>`;
});
function createTheme() {
  let currentTheme;
  const { subscribe: subscribe2, set } = writable(currentTheme);
  return {
    subscribe: subscribe2,
    set: (value) => {
      set(value);
    }
  };
}
const theme = createTheme();
const ThemeToggle_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".theme-toggle.svelte-niuf71.svelte-niuf71.svelte-niuf71{height:24px;padding:0;appearance:none;border:none;background:none;cursor:pointer;display:flex;align-items:center;gap:5px}.theme-toggle.svelte-niuf71:hover .label.svelte-niuf71.svelte-niuf71{color:var(--color--primary)}.theme-toggle.svelte-niuf71:hover #moon.svelte-niuf71.svelte-niuf71,.theme-toggle.svelte-niuf71:hover #sun.svelte-niuf71.svelte-niuf71{fill:var(--color--primary)}.theme-toggle.svelte-niuf71:hover #moon.svelte-niuf71>.svelte-niuf71{filter:drop-shadow(0px 0px 3px var(--color--primary))}.theme-toggle.svelte-niuf71:hover #sun-beams.svelte-niuf71.svelte-niuf71{stroke:var(--color--primary)}.theme-toggle.svelte-niuf71:hover #sun-beams line.svelte-niuf71.svelte-niuf71{filter:drop-shadow(0px 0px 3px var(--color--primary))}.label.svelte-niuf71.svelte-niuf71.svelte-niuf71{transition:all 0.5s var(--ease-4);text-transform:uppercase;font-size:0.6rem;opacity:0;transform-origin:left;transform:scaleX(0);max-width:0;color:var(--color--text)}#moon.svelte-niuf71.svelte-niuf71.svelte-niuf71,#sun.svelte-niuf71.svelte-niuf71.svelte-niuf71{fill:var(--color--text);stroke:none}#sun.svelte-niuf71.svelte-niuf71.svelte-niuf71{transition:all 0.5s var(--ease-4);transform-origin:center center}#sun-beams.svelte-niuf71.svelte-niuf71.svelte-niuf71{--_opacity-dur:0.15s;stroke:var(--color--text);stroke-width:2px;transform-origin:center center;transition:all 0.5s var(--ease-elastic-4), opacity var(--_opacity-dur) var(--ease-3)}#moon.svelte-niuf71>circle.svelte-niuf71.svelte-niuf71{transition:all 0.5s var(--ease-out-3)}.theme-toggle.svelte-niuf71:not([data-theme]) #sun.svelte-niuf71.svelte-niuf71{transform:scale(0.5)}.theme-toggle.svelte-niuf71:not([data-theme]) #sun-beams.svelte-niuf71.svelte-niuf71{transform:rotateZ(0.25turn);--_opacity-dur:0.5s}[data-theme=auto].svelte-niuf71 .label.svelte-niuf71.svelte-niuf71{opacity:1;transform:scaleX(1);max-width:30px}@media not all and (prefers-color-scheme: dark){[data-theme=auto].svelte-niuf71 #sun.svelte-niuf71.svelte-niuf71{transform:scale(0.5)}[data-theme=auto].svelte-niuf71 #sun-beams.svelte-niuf71.svelte-niuf71{transform:rotateZ(0.25turn);--_opacity-dur:0.5s}}@media(prefers-color-scheme: dark){[data-theme=auto].svelte-niuf71 #moon.svelte-niuf71>circle.svelte-niuf71{transform:translateX(-20px)}[data-theme=auto].svelte-niuf71 #sun-beams.svelte-niuf71.svelte-niuf71{opacity:0}}[data-theme=light].svelte-niuf71 #sun.svelte-niuf71.svelte-niuf71{transform:scale(0.5)}[data-theme=light].svelte-niuf71 #sun-beams.svelte-niuf71.svelte-niuf71{transform:rotateZ(0.25turn);--_opacity-dur:0.5s}[data-theme=dark].svelte-niuf71 #moon.svelte-niuf71>circle.svelte-niuf71{transform:translateX(-20px)}[data-theme=dark].svelte-niuf71 #sun-beams.svelte-niuf71.svelte-niuf71{opacity:0}",
  map: null
};
const ThemeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css$3);
  $$unsubscribe_theme();
  return `<noscript>
	<style>.theme-toggle {
			display: none !important;
		}
	</style></noscript>
<button class="theme-toggle svelte-niuf71" title="Toggle between light and dark theme"${add_attribute("data-theme", $theme, 0)}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><mask id="moon" class="svelte-niuf71"><rect x="0" y="0" width="100%" height="100%" fill="white" class="svelte-niuf71"></rect><circle cx="40" cy="8" r="11" fill="black" class="svelte-niuf71"></circle></mask><circle id="sun" cx="12" cy="12" r="11" mask="url(#moon)" class="svelte-niuf71"></circle><g id="sun-beams" class="svelte-niuf71"><line x1="12" y1="1" x2="12" y2="3" class="svelte-niuf71"></line><line x1="12" y1="21" x2="12" y2="23" class="svelte-niuf71"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" class="svelte-niuf71"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" class="svelte-niuf71"></line><line x1="1" y1="12" x2="3" y2="12" class="svelte-niuf71"></line><line x1="21" y1="12" x2="23" y2="12" class="svelte-niuf71"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" class="svelte-niuf71"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" class="svelte-niuf71"></line></g></svg>
	<span class="label svelte-niuf71">Auto</span>
</button>`;
});
const Rss = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 19C12 14.8 9.2 12 5 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 19C19 10.6 13.4 5 5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 19.01L5.01 18.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const RssLink_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "a.svelte-1llmev{transition:all 0.2s ease-in-out;width:24px;color:var(--color--text);fill:var(--color--text)}a.svelte-1llmev:hover{color:var(--color--primary);fill:var(--color--primary);filter:drop-shadow(0px 0px 3px var(--color--primary))}",
  map: null
};
const RssLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<a href="/rss.xml" target="_blank" rel="noopener noreferrer" title="Subscribe to my RSS Feed" class="svelte-1llmev">${validate_component(Rss, "RssIcon").$$render($$result, {}, {}, {})}</a>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-1gvg2a4.svelte-1gvg2a4{position:relative;padding:30px 0}@media(max-width: 767px){header.svelte-1gvg2a4.svelte-1gvg2a4{padding:20px 0}}header.has-background.svelte-1gvg2a4.svelte-1gvg2a4{background:linear-gradient(60deg, var(--color--waves-start) 0%, var(--color--waves-end) 100%)}header.svelte-1gvg2a4 .container.svelte-1gvg2a4{display:flex;align-items:center;gap:30px}@media(max-width: 767px){header.svelte-1gvg2a4 .container .links a.svelte-1gvg2a4{display:none}}header.svelte-1gvg2a4 .logo.svelte-1gvg2a4{height:44px;flex:1}header.svelte-1gvg2a4 a.svelte-1gvg2a4{color:var(--color--text)}header.svelte-1gvg2a4 .links.svelte-1gvg2a4{display:flex;align-items:center;justify-content:flex-end;gap:30px}header.svelte-1gvg2a4 .links a.svelte-1gvg2a4{text-decoration:none}header.svelte-1gvg2a4 .links a.svelte-1gvg2a4:hover{color:var(--color--primary);filter:drop-shadow(0px 0px 3px var(--color--primary))}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showBackground = false } = $$props;
  if ($$props.showBackground === void 0 && $$bindings.showBackground && showBackground !== void 0)
    $$bindings.showBackground(showBackground);
  $$result.css.add(css$1);
  return `<header class="${["svelte-1gvg2a4", showBackground ? "has-background" : ""].join(" ").trim()}"><nav class="container svelte-1gvg2a4"><a class="logo svelte-1gvg2a4" href="/" aria-label="Site Logo">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</a>
		<div class="links svelte-1gvg2a4"><a href="/blog" class="svelte-1gvg2a4">Blog</a>
			${validate_component(ThemeToggle, "ThemeToggle").$$render($$result, {}, {}, {})}</div></nav>
</header>`;
});
const Footer_wave = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="120" viewBox="0 0 1440 120" fill="none" style="transform: scale(-1,-1)" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" class="footer__wave"><path d="M0 0L48 8.875C96 17.9167 192 35.4167 288 53.3333C384 71.25 480 88.75 576 82.2083C672 75.4167 768 44.5833 864 26.6667C960 8.75 1056 4.58333 1152 11.125C1248 17.9167 1344 35.4167 1392 44.4583L1440 53.3333V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" fill="var(--body-background-color)"></path></svg>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-1m94jhe.svelte-1m94jhe{height:340px;width:100%;background:linear-gradient(60deg, var(--color--waves-start) 0%, var(--color--waves-end) 100%);display:grid;grid-template-rows:120px 1fr}footer.svelte-1m94jhe .content.svelte-1m94jhe{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:15px;font-weight:600;text-align:center}footer.svelte-1m94jhe .content .credits.svelte-1m94jhe{font-weight:400;font-size:90%;color:var(--color--text-shade)}footer.svelte-1m94jhe .content .socials.svelte-1m94jhe{display:flex;align-items:center;gap:20px}footer.svelte-1m94jhe a.svelte-1m94jhe:hover{filter:drop-shadow(0px 0px 3px var(--color--primary))}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-1m94jhe"><div class="wave">${validate_component(Footer_wave, "FooterWave").$$render($$result, {}, {}, {})}</div>
	<div class="content svelte-1m94jhe"><div class="copyright">This website was created and modified by James Adrian Perez <br> from an open source
			<a href="https://github.com/Exzeshiaaa/English-Blog" target="_blank" rel="noopener noreferrer" class="svelte-1m94jhe">template</a>.
		</div>
		<div class="credits svelte-1m94jhe">Powered by <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer" class="svelte-1m94jhe">SvelteKit</a>. Icons by
			<a href="https://iconoir.com/" target="_blank" rel="noopener noreferrer" class="svelte-1m94jhe">Iconoir</a>.
		</div>
		<div class="socials svelte-1m94jhe">${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}
			${validate_component(RssLink, "RssLink").$$render($$result, {}, {}, {})}
			${validate_component(ThemeToggle, "ThemeToggle").$$render($$result, {}, {}, {})}</div></div>
</footer>`;
});
export {
  Footer as F,
  Header as H
};

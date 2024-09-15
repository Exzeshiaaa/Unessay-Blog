import { c as create_ssr_component, h as compute_rest_props, i as spread, j as escape_object, k as escape_attribute_value, l as is_void, p as compute_slots } from "./index2.js";
import { H as HttpRegex } from "./regex.js";
const Button_svelte_svelte_type_style_lang = "";
const css = {
  code: ".button.svelte-6zxw49.svelte-6zxw49{--main-color:red;--light-color:blue;--contrast-color:green;-webkit-appearance:none;appearance:none;cursor:pointer;text-decoration:none;transition:all 0.2s ease-in-out;display:flex;align-items:center;justify-content:center;gap:5px;border:none;border-radius:20px;font-weight:700}.button.svelte-6zxw49 .icon.svelte-6zxw49{width:24px;height:24px}.button.color--primary.svelte-6zxw49.svelte-6zxw49{--main-color:var(--color--primary-rgb);--light-color:var(--color--primary-tint-rgb);--contrast-color:var(--color--primary-contrast)}.button.color--secondary.svelte-6zxw49.svelte-6zxw49{--main-color:var(--color--secondary-rgb);--light-color:var(--color--secondary-tint-rgb);--contrast-color:var(--color--secondary-contrast)}.button.style--solid.svelte-6zxw49.svelte-6zxw49{background-color:rgb(var(--main-color));color:var(--contrast-color)}.button.style--solid.svelte-6zxw49.svelte-6zxw49:hover{box-shadow:0px 0px 1px 7px rgba(var(--main-color), 0.3)}.button.style--understated.svelte-6zxw49.svelte-6zxw49{background-color:rgb(var(--light-color));color:rgb(var(--main-color))}.button.style--understated.svelte-6zxw49.svelte-6zxw49:hover{box-shadow:0px 0px 1px 7px rgba(var(--main-color), 0.3)}.button.style--clear.svelte-6zxw49.svelte-6zxw49{background-color:transparent;color:rgb(var(--main-color))}.button.style--clear.svelte-6zxw49.svelte-6zxw49:hover{background-color:rgb(var(--light-color))}.button.size--small.svelte-6zxw49.svelte-6zxw49{padding:5px 10px;font-size:0.75rem}.button.size--small.svelte-6zxw49 .icon.svelte-6zxw49{width:20px;height:20px}.button.size--medium.svelte-6zxw49.svelte-6zxw49{padding:10px 20px;font-size:1rem}.button.size--large.svelte-6zxw49.svelte-6zxw49{padding:15px 30px;font-size:1.15rem}.button.size--large.svelte-6zxw49 .icon.svelte-6zxw49{width:28px;height:28px}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tag;
  let linkProps;
  let $$restProps = compute_rest_props($$props, ["color", "style", "size", "href", "additionalClass", "target", "rel"]);
  let $$slots = compute_slots(slots);
  let { color = "primary" } = $$props;
  let { style = "solid" } = $$props;
  let { size = "medium" } = $$props;
  let { href = void 0 } = $$props;
  let { additionalClass = void 0 } = $$props;
  const isExternalLink = !!href && HttpRegex.test(href);
  let { target = isExternalLink ? "_blank" : "_self" } = $$props;
  let { rel = isExternalLink ? "noopener noreferrer" : void 0 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.additionalClass === void 0 && $$bindings.additionalClass && additionalClass !== void 0)
    $$bindings.additionalClass(additionalClass);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.rel === void 0 && $$bindings.rel && rel !== void 0)
    $$bindings.rel(rel);
  $$result.css.add(css);
  tag = href ? "a" : "button";
  linkProps = { href, target, rel };
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        escape_object(linkProps),
        {
          class: escape_attribute_value([
            "button",
            `style--${style}`,
            `size--${size}`,
            `color--${color}`,
            additionalClass
          ].join(" "))
        },
        { "data-sveltekit-preload-data": true },
        escape_object($$restProps)
      ],
      { classes: "svelte-6zxw49" }
    )}>${is_void(tag$1) ? "" : `${$$slots["icon"] ? `<div class="icon svelte-6zxw49">${slots.icon ? slots.icon({}) : ``}</div>` : ``}
	${slots.default ? slots.default({}) : ``}
`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
export {
  Button as B
};

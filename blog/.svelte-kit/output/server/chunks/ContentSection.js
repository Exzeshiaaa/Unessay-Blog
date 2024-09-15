import { c as create_ssr_component, a as add_attribute, b as escape, h as compute_rest_props, i as spread, j as escape_object, l as is_void, p as compute_slots, v as validate_component, e as each } from "./index2.js";
import { H as HttpRegex } from "./regex.js";
/* empty css                                     */const css$4 = {
  code: "img.svelte-1ykl0dj{width:100%;height:100%;object-fit:contain}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fileName;
  let { src } = $$props;
  let { alt } = $$props;
  let { fullBleed = void 0 } = $$props;
  let { formats = ["avif", "webp", "png"] } = $$props;
  let { widths = void 0 } = $$props;
  function buildSrcset() {
    let srcset = "";
    if (widths) {
      for (let i = 0; i < widths.length; i++) {
        srcset += `${fileName}-${widths[i]}.${formats[0]} ${widths[i]}w`;
        if (i < widths.length - 1) {
          srcset += ", ";
        }
      }
    } else {
      for (let i = 0; i < formats.length; i++) {
        srcset += `${fileName}.${formats[i]}`;
        if (i < formats.length - 1) {
          srcset += ", ";
        }
      }
    }
    return srcset;
  }
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.fullBleed === void 0 && $$bindings.fullBleed && fullBleed !== void 0)
    $$bindings.fullBleed(fullBleed);
  if ($$props.formats === void 0 && $$bindings.formats && formats !== void 0)
    $$bindings.formats(formats);
  if ($$props.widths === void 0 && $$bindings.widths && widths !== void 0)
    $$bindings.widths(widths);
  $$result.css.add(css$4);
  fileName = src.split(".")[0];
  return `<img${add_attribute("srcset", buildSrcset(), 0)}${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} loading="lazy" decoding="async" class="${["svelte-1ykl0dj", fullBleed ? "full-bleed" : ""].join(" ").trim()}">`;
});
const Tag_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".tag.svelte-1xh8qlg{display:flex;align-items:center;justify-content:center;gap:5px;padding:5px 15px;border-radius:10px;font-weight:500;font-size:0.85rem;width:fit-content;white-space:nowrap}.tag.primary.svelte-1xh8qlg{background-color:var(--color--primary-tint);color:var(--color--primary)}.tag.secondary.svelte-1xh8qlg{background-color:var(--color--secondary-tint);color:var(--color--secondary)}",
  map: null
};
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "primary" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$3);
  return `<div class="${"tag " + escape(color, true) + " svelte-1xh8qlg"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const Card_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.card.svelte-1kz16cj.svelte-1kz16cj{background:var(--color--card-background);box-shadow:var(--card-shadow);color:var(--color--text);border-radius:10px;transition:all 0.4s ease;position:relative;overflow:hidden;width:100%;display:flex;flex-direction:row;flex-wrap:wrap;text-decoration:none}.card[href].svelte-1kz16cj.svelte-1kz16cj,.card[onclick].svelte-1kz16cj.svelte-1kz16cj{cursor:pointer}.card[href].svelte-1kz16cj.svelte-1kz16cj:hover,.card[onclick].svelte-1kz16cj.svelte-1kz16cj:hover{box-shadow:var(--card-shadow-hover);transform:scale(1.01)}.body.svelte-1kz16cj.svelte-1kz16cj{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:20px 20px;flex:1 0 50%}.body.svelte-1kz16cj .content.svelte-1kz16cj{display:flex;flex-direction:column;flex:1}.image.svelte-1kz16cj.svelte-1kz16cj{position:relative;flex:1 0 max(50%, 330px);min-height:280px;max-height:350px}.card [slot="image"]{width:100%;height:100%;object-fit:cover;position:absolute}',
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tag;
  let linkProps;
  let $$restProps = compute_rest_props($$props, ["additionalClass", "href", "target", "rel"]);
  let $$slots = compute_slots(slots);
  let { additionalClass = void 0 } = $$props;
  let { href = void 0 } = $$props;
  const isExternalLink = !!href && HttpRegex.test(href);
  let { target = isExternalLink ? "_blank" : "_self" } = $$props;
  let { rel = isExternalLink ? "noopener noreferrer" : void 0 } = $$props;
  if ($$props.additionalClass === void 0 && $$bindings.additionalClass && additionalClass !== void 0)
    $$bindings.additionalClass(additionalClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.rel === void 0 && $$bindings.rel && rel !== void 0)
    $$bindings.rel(rel);
  $$result.css.add(css$2);
  tag = href ? "a" : "article";
  linkProps = { href, target, rel };
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        {
          class: "card " + escape(additionalClass, true)
        },
        escape_object(linkProps),
        { "data-sveltekit-preload-data": true },
        escape_object($$restProps)
      ],
      { classes: "svelte-1kz16cj" }
    )}>${is_void(tag$1) ? "" : `${$$slots.image ? `<div class="image svelte-1kz16cj">${slots.image ? slots.image({}) : ``}</div>` : ``}
	<div class="body svelte-1kz16cj"><div class="content svelte-1kz16cj">${slots.content ? slots.content({}) : ``}</div>
		${$$slots.footer ? `<div class="footer">${slots.footer ? slots.footer({}) : ``}</div>` : ``}</div>
`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
const BlogPostCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".content.svelte-1i7t6gt{display:flex;flex-direction:column;gap:0px;align-items:flex-start}.title.svelte-1i7t6gt{display:flex;align-items:center;justify-content:space-between;width:100%;font-size:1.2rem;font-family:var(--font--title);font-weight:700}.tags.svelte-1i7t6gt{display:flex;align-items:center;gap:5px;flex-wrap:wrap}.note.svelte-1i7t6gt{font-size:0.8rem;color:rgba(var(--color--text-rgb), 0.8)}.text.svelte-1i7t6gt{margin-top:5px;font-size:0.9rem;text-align:justify}.footer.svelte-1i7t6gt{margin-top:20px}.blog-post-card .image img{object-fit:cover}.blog-post-card.no-image > .image{display:none}",
  map: null
};
const BlogPostCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { coverImage = void 0 } = $$props;
  let { excerpt } = $$props;
  let { slug } = $$props;
  let { tags } = $$props;
  let { readingTime = void 0 } = $$props;
  let { showImage = true } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.coverImage === void 0 && $$bindings.coverImage && coverImage !== void 0)
    $$bindings.coverImage(coverImage);
  if ($$props.excerpt === void 0 && $$bindings.excerpt && excerpt !== void 0)
    $$bindings.excerpt(excerpt);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.readingTime === void 0 && $$bindings.readingTime && readingTime !== void 0)
    $$bindings.readingTime(readingTime);
  if ($$props.showImage === void 0 && $$bindings.showImage && showImage !== void 0)
    $$bindings.showImage(showImage);
  $$result.css.add(css$1);
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      href: "/" + slug,
      target: "_self",
      additionalClass: "blog-post-card " + (!showImage || !coverImage ? "no-image" : "")
    },
    {},
    {
      footer: () => {
        return `<div class="footer svelte-1i7t6gt" slot="footer">${tags?.length ? `<div class="tags svelte-1i7t6gt">${each(tags.slice(0, 2), (tag) => {
          return `${validate_component(Tag, "Tag").$$render($$result, {}, {}, {
            default: () => {
              return `${escape(tag)}`;
            }
          })}`;
        })}</div>` : ``}</div>`;
      },
      content: () => {
        return `<div class="content svelte-1i7t6gt" slot="content"><p class="title svelte-1i7t6gt">${escape(title)}</p>
		${readingTime ? `<div class="note svelte-1i7t6gt">${escape(readingTime)}</div>` : ``}
		${excerpt ? `<p class="text svelte-1i7t6gt">${escape(excerpt)}</p>` : ``}</div>`;
      },
      image: () => {
        return `<div class="image" slot="image">${coverImage ? `${validate_component(Image, "Image").$$render(
          $$result,
          {
            src: coverImage,
            alt: "Cover image of this blog post"
          },
          {},
          {}
        )}` : ``}</div>`;
      }
    }
  )}`;
});
const ContentSection_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content-section.svelte-emrvls.svelte-emrvls{display:flex;align-items:center;justify-content:space-between;gap:40px;padding:50px 0}.content-section.svelte-emrvls .title-area.svelte-emrvls{flex:2;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:15px}.content-section.svelte-emrvls .title-area .text.svelte-emrvls{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px}.content-section.svelte-emrvls .content-area.svelte-emrvls{flex:5;display:grid;place-items:center}@media(min-width: 901px){.content-section.left.svelte-emrvls .title-area.svelte-emrvls{order:1}.content-section.left.svelte-emrvls .content-area.svelte-emrvls{order:2}.content-section.right.svelte-emrvls .title-area.svelte-emrvls{order:2}.content-section.right.svelte-emrvls .content-area.svelte-emrvls{order:1}.content-section.top.svelte-emrvls.svelte-emrvls{flex-direction:column}.content-section.top.svelte-emrvls .title-area.svelte-emrvls{order:1;max-width:600px}.content-section.top.svelte-emrvls .content-area.svelte-emrvls{order:2;width:100%}}@media(max-width: 900px){.content-section.svelte-emrvls.svelte-emrvls{flex-direction:column}}",
  map: null
};
const ContentSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { id = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { description = void 0 } = $$props;
  let { align = "top" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  $$result.css.add(css);
  return `<section${add_attribute("id", id, 0)} class="${"content-section " + escape(align, true) + " svelte-emrvls"}"><div class="title-area svelte-emrvls">${title || description ? `<div class="text svelte-emrvls">${title ? `<h2>${escape(title)}</h2>` : ``}
				${description ? `<p>${escape(description)}</p>` : ``}</div>` : ``}
		${$$slots["button"] ? `<div class="button">${slots.button ? slots.button({}) : ``}</div>` : ``}</div>
	<div class="content-area svelte-emrvls">${slots.default ? slots.default({}) : ``}</div>
</section>`;
});
export {
  BlogPostCard as B,
  ContentSection as C,
  Image as I,
  Tag as T,
  Card as a
};

import { c as create_ssr_component, v as validate_component, e as each } from "../../../../chunks/index2.js";
import { C as ContentSection, B as BlogPostCard } from "../../../../chunks/ContentSection.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid.svelte-1mrrl9u{width:100%;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;grid-gap:20px}@media(max-width: 900px){.grid.svelte-1mrrl9u{grid-template-columns:1fr}}@media(min-width: 901px){.grid.svelte-1mrrl9u>:nth-child(6n + 1){grid-column:span 6}.grid.svelte-1mrrl9u>:nth-child(6n + 2){grid-column:span 3}.grid.svelte-1mrrl9u>:nth-child(6n + 3){grid-column:span 3}.grid.svelte-1mrrl9u>:nth-child(6n + 4),.grid.svelte-1mrrl9u :nth-child(6n + 5),.grid.svelte-1mrrl9u :nth-child(6n + 6){grid-column:span 2}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="container">${validate_component(ContentSection, "ContentSection").$$render($$result, { title: "All Blog Posts" }, {}, {
    default: () => {
      return `<div class="grid svelte-1mrrl9u">${each(posts, (post) => {
        return `${validate_component(BlogPostCard, "BlogPostCard").$$render(
          $$result,
          {
            title: post.title,
            coverImage: post.coverImage,
            excerpt: post.excerpt,
            readingTime: post.readingTime,
            slug: post.slug,
            tags: post.tags
          },
          {},
          {}
        )}`;
      })}</div>`;
    }
  })}
</div>`;
});
export {
  Page as default
};

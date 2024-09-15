import { _ as __vite_glob_0_0 } from "./_page.js";
import "prismjs";
import "prism-svelte";
import readingTime from "reading-time/lib/reading-time.js";
import striptags from "striptags";
const importPosts = (render = false) => {
  const blogImports = /* @__PURE__ */ Object.assign({ "/src/routes/(blog-article)/archive/+page.md": __vite_glob_0_0 });
  const innerImports = /* @__PURE__ */ Object.assign({});
  const imports = { ...blogImports, ...innerImports };
  const posts = [];
  for (const path in imports) {
    const post = imports[path];
    if (post) {
      posts.push({
        ...post.metadata,
        html: render && post.default.render ? post.default.render()?.html : void 0
      });
    }
  }
  return posts;
};
const filterPosts = (posts) => {
  return posts.filter((post) => !post.hidden).sort(
    (a, b) => new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : 0
  ).map((post) => {
    const readingTimeResult = post.html ? readingTime(striptags(post.html) || "") : void 0;
    const relatedPosts = getRelatedPosts(posts, post);
    return {
      ...post,
      readingTime: readingTimeResult ? readingTimeResult.text : "",
      relatedPosts
    };
  });
};
const getRelatedPosts = (posts, post) => {
  const relatedPosts = posts.filter((p) => !p.hidden && p.slug !== post.slug).sort((a, b) => {
    const aTags = a.tags?.filter((t) => post.tags?.includes(t));
    const bTags = b.tags?.filter((t) => post.tags?.includes(t));
    return aTags?.length > bTags?.length ? -1 : aTags?.length < bTags?.length ? 1 : 0;
  });
  return relatedPosts.slice(0, 3).map((p) => ({
    ...p,
    readingTime: p.html ? readingTime(striptags(p.html) || "").text : ""
  }));
};
export {
  filterPosts as f,
  importPosts as i
};

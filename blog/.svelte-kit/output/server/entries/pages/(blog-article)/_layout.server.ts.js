import { f as filteredPosts } from "../../../chunks/index3.js";
async function load({ url }) {
  const { pathname } = url;
  const slug = pathname.replace("/", "");
  const post = filteredPosts.find((post2) => post2.slug === slug);
  return {
    post
  };
}
export {
  load
};

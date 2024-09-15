import { f as filteredPosts } from "../../../../chunks/index3.js";
async function load() {
  return {
    posts: filteredPosts
  };
}
export {
  load
};

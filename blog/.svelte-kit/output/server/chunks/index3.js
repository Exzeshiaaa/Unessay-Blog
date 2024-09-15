import { i as importPosts, f as filterPosts } from "./utils.js";
const allPosts = importPosts(true);
const filteredPosts = filterPosts(allPosts);
export {
  filteredPosts as f
};

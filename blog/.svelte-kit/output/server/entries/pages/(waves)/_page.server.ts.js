import { f as filteredPosts } from "../../../chunks/index3.js";
const features = [
  // {
  //   name: 'Crizanne Chanelle Mejica',
  //   description:
  //     'Chanelle is a Senior BS Electronics Engineering student at UPD. Her interests include digital and traditional painting and analyzing TV shows.',
  //   image: 'images/features/crizanne.jpg',
  //   tags: [{ label: 'UPD', color: 'secondary' }, { label: 'Electronics Engg ' }]
  // },
  // {
  //   name: 'Markdown Support',
  //   description:
  //     'Blog posts are written in Markdown, a simple and nearly-universal format. This means you can bring over your posts from other platforms, and easily export to another if you want to.',
  //   image: 'images/features/markdown.jpg',
  //   tags: [{ label: 'Powered by MDsveX' }]
  // }, 
  // {
  //   name: 'Themeable',
  //   description:
  //     'You can easily theme the entire website by changing just a few colors in the _themes.scss file.',
  //   image: 'images/features/themeable.jpg',
  //   tags: [{ label: 'Primary Color' }, { label: 'Secondary Color', color: 'secondary' }]
  // }, 
  // {
  //   name: 'Extensible',
  //   description:
  //     'Components are built to be reused, and you can build new pages and layouts without much CSS knowledge. You can see all components in Histoire by running "npm run story:dev"',
  //   image: 'images/features/extensible.jpg',
  // }, 
  // {
  //   name: 'Well Optimized',
  //   description:
  //     'Images are automatically optimized and lazy loaded, to ensure the website loads as fast as possible regardless of connection speed.',
  //   image: 'images/features/optimized.jpg',
  //   tags: [{ label: 'Powered by Image Transmutation' }]
  // }, 
  // {
  //   name: 'Light and Dark Modes',
  //   description:
  //     'This template was built with dark mode in mind. It can swap between themes automatically (based on system settings) or manually. Both themes can be tweaked in the _themes.scss file.',
  //   image: 'images/features/light-dark.jpg',
  // },
  // {
  //   name: 'Open Source',
  //   description:
  //     'All code is open source, which means you can copy and modify it to your heart\'s content. All I ask is that you make your code open too so that knowledge can be passed on.',
  //   image: 'images/features/open-source.jpg'
  // },
  {
    name: "James Adrian Perez",
    description: "Adrian is a 4th year student in UP Diliman taking up the course of Computer Science. His interest align with bioinformatics and computer security. He aims to provide knowledge and insights with often ignored topics in the Philippines such as data security and data privacy",
    image: "images/features/adrian.jpg",
    tags: [{ label: "UPD", color: "secondary" }, { label: "ComSci", color: "primary" }]
  }
  // {
  //   name: 'Aaron Tolentino',
  //   description:
  //     'He is a 4th year student in UPD taking up the course, BS Electronics and Communications Engineering. He is an avid user of social media especially Youtube. He was taken aback by the sudden the rise of Toxic Masculinity being spread especially in his page.',
  //   image: 'images/features/aaron.jpg',
  //   tags: [{ label: 'UPD' }, { label: 'ECE', color: 'secondary' }]
  // },
  // {
  //   name: 'Janinalaine Platero',
  //   description:
  //     'Janinalaine is an undergraduate student at UPD taking up the course BS Computer Science. She spends excessive time on social media exposing her to various societal issues.',
  //   image: 'images/features/janinalaine.jpg',
  //   tags: [{ label: 'UPD' }, { label: 'ComSci', color: 'secondary' }]
  // },
];
async function load() {
  const posts = filteredPosts.slice(0, 4);
  return {
    features,
    posts
  };
}
export {
  load
};

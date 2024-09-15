export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicons/android-chrome-192x192.png","favicons/android-chrome-512x512.png","favicons/apple-touch-icon.png","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/favicon.png","favicons/safari-pinned-tab.svg","favicons/site.webmanifest","images/features/aaron.jpg","images/features/adrian.jpg","images/features/crizanne.jpg","images/features/extensible.jpg","images/features/janinalaine.jpg","images/features/light-dark.jpg","images/features/markdown.jpg","images/features/open-source.jpg","images/features/optimized.jpg","images/features/themeable.jpg","images/posts/avatar.jpg","images/posts/blog-posts.jpg","images/posts/customization.jpg","images/posts/data.jpg","images/posts/frontmatter-preview-dashboard.png","images/posts/frontmatter-preview-edit.png","images/posts/grooming.jpg","images/posts/project-structure.jpg","images/posts/toxic.jpg","images/sample-image.png","images/science.jpg","images/science1.jpg","images/site-preview.png","images/site-screenshot.png","images/societal-image.png","images/society.png"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".jpg":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.e7a4480c.js","imports":["_app/immutable/entry/start.e7a4480c.js","_app/immutable/chunks/index.b2354961.js","_app/immutable/chunks/index.1f4e8f4e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.16fb3b1a.js","imports":["_app/immutable/entry/app.16fb3b1a.js","_app/immutable/chunks/index.b2354961.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				id: "/(waves)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(waves)/404",
				pattern: /^\/404\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(blog-article)/archive",
				pattern: /^\/archive\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(waves)/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/rss.xml",
				pattern: /^\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/rss.xml/_server.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

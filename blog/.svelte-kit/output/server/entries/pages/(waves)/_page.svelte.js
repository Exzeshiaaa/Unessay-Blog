import { c as create_ssr_component, b as escape, a as add_attribute, o as onDestroy, e as each, v as validate_component, g as null_to_empty } from "../../../chunks/index2.js";
import { G as Github, S as Socials } from "../../../chunks/Socials.js";
import { B as Button } from "../../../chunks/Button.js";
import { I as Image, C as ContentSection, B as BlogPostCard, a as Card, T as Tag } from "../../../chunks/ContentSection.js";
const SingleSparkle_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".wrapper.svelte-sixv8c.svelte-sixv8c{position:absolute;pointer-events:none;display:flex;z-index:2;animation:svelte-sixv8c-grow-and-shrink 900ms ease-in-out forwards}.wrapper.svelte-sixv8c svg.svelte-sixv8c{animation:svelte-sixv8c-spin 900ms linear forwards}@keyframes svelte-sixv8c-grow-and-shrink{0%{transform:scale(0)}50%{transform:scale(1)}100%{transform:scale(0)}}@keyframes svelte-sixv8c-spin{from{transform:rotate(0deg)}to{transform:rotate(180deg)}}",
  map: null
};
const SingleSparkle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color } = $$props;
  let { size } = $$props;
  let { style } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$7);
  return `<div class="wrapper svelte-sixv8c" style="${"top: " + escape(style.top, true) + "; left: " + escape(style.left, true) + ";"}"><svg${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-sixv8c"><path d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"${add_attribute("fill", color, 0)}></path></svg>
</div>`;
});
const Sparkles_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".sparkle-wrapper.svelte-exdx8u.svelte-exdx8u{position:relative;display:inline-block}.sparkle-wrapper.svelte-exdx8u .slot-wrapper.svelte-exdx8u{position:relative;z-index:1}",
  map: null
};
const Sparkles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "default" } = $$props;
  let sparkles = [];
  let sparklesInterval;
  onDestroy(() => {
    clearInterval(sparklesInterval);
  });
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$6);
  return `<div class="sparkle-wrapper svelte-exdx8u">${each(sparkles, (sparkle) => {
    return `${validate_component(SingleSparkle, "Sparkle").$$render(
      $$result,
      {
        color: sparkle.color,
        size: sparkle.size,
        style: sparkle.style
      },
      {},
      {}
    )}`;
  })}
	<span class="slot-wrapper svelte-exdx8u">${slots.default ? slots.default({}) : ``}</span>
</div>`;
});
const Hero_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "#hero.svelte-romlur.svelte-romlur{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:15px;position:relative;padding:80px 0}@media(max-width: 767px){#hero.svelte-romlur.svelte-romlur{padding:40px 0 50px}}#hero.svelte-romlur .hello.svelte-romlur{text-align:center}#hero.svelte-romlur .intro.svelte-romlur{font-weight:500;font-size:1.4rem;width:min(100%, 440px);display:flex;flex-direction:column}#hero.svelte-romlur .intro .left.svelte-romlur{text-align:left}#hero.svelte-romlur .intro .right.svelte-romlur{text-align:right}@media(max-width: 767px){#hero.svelte-romlur .intro.svelte-romlur{display:none}}#hero.svelte-romlur .ctas.svelte-romlur{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px;width:100%}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<section id="hero" class="svelte-romlur"><h1 class="hello svelte-romlur">This website discusses and compiles all the lessons and insights taken from the course SocSci1
		in UP Diliman
	</h1>
	<p class="intro svelte-romlur"><span class="left svelte-romlur">Ranging from semantics and history,</span>
		<span class="right svelte-romlur">to real world problems and solutions!</span></p>
	<br><br>
	<p>You can check out the code here!</p>
	<div class="ctas svelte-romlur">${validate_component(Sparkles, "Sparkles").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          href: "https://github.com/Exzeshiaaa/Unessay-Blog"
        },
        {},
        {
          icon: () => {
            return `${validate_component(Github, "GitHubIcon").$$render($$result, { slot: "icon" }, {}, {})}`;
          },
          default: () => {
            return `Source Code
			`;
          }
        }
      )}`;
    }
  })}
		</div>
</section>`;
});
const SparklingHighlight_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "strong.primary.svelte-8f8x6d{color:var(--color--primary)}strong.secondary.svelte-8f8x6d{color:var(--color--secondary)}",
  map: null
};
const SparklingHighlight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "default" } = $$props;
  let { sparkleColor = "default" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.sparkleColor === void 0 && $$bindings.sparkleColor && sparkleColor !== void 0)
    $$bindings.sparkleColor(sparkleColor);
  $$result.css.add(css$4);
  return `${validate_component(Sparkles, "Sparkles").$$render($$result, { color: sparkleColor }, {}, {
    default: () => {
      return `<strong class="${escape(null_to_empty(color), true) + " svelte-8f8x6d"}">${slots.default ? slots.default({}) : ``}</strong>`;
    }
  })}`;
});
const About_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "#about.svelte-1qp99xm.svelte-1qp99xm.svelte-1qp99xm{position:relative;display:grid;grid-template-columns:500px 250px;align-items:center;justify-content:space-between;padding-bottom:50px}@media(max-width: 767px){#about.svelte-1qp99xm.svelte-1qp99xm.svelte-1qp99xm{grid-template-columns:1fr;justify-items:center;gap:20px}}#about.svelte-1qp99xm .info.svelte-1qp99xm.svelte-1qp99xm{display:flex;flex-direction:column;gap:10px}@media(max-width: 767px){#about.svelte-1qp99xm .info.svelte-1qp99xm h2.svelte-1qp99xm{text-align:center}}@media(max-width: 767px){#about.svelte-1qp99xm .info.svelte-1qp99xm p.svelte-1qp99xm{text-align:justify}}@media(max-width: 767px){#about.svelte-1qp99xm .info.svelte-1qp99xm.svelte-1qp99xm{gap:20px}}@media(max-width: 767px){#about.svelte-1qp99xm .socials.svelte-1qp99xm span.svelte-1qp99xm{display:none}}#about.svelte-1qp99xm .image.svelte-1qp99xm.svelte-1qp99xm{width:220px;height:220px}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section><div class="info svelte-1qp99xm"><h2 style="text-align: center;" class="svelte-1qp99xm">Let&#39;s introduce the concepts in module 1 for this
			<br>
			${validate_component(SparklingHighlight, "SparklingHighlight").$$render($$result, { color: "secondary" }, {}, {
    default: () => {
      return `UNESSAY 1!`;
    }
  })}</h2>
		<br>
		<p style="text-align: justify;" class="svelte-1qp99xm">Our society is rampant with complex issues stemming from our personal decisions, influence of
			a person with a higher status, and our interaction with our community amongst other things.
			While some of these social issues may not seem obvious, they manifest in several ways which
			include an effect in our interaction, systematic structure, culture, and even the media
			consumed by the people. In this website, I will present several lessons and insights as to how
			social science can combat these issues and how it seeks to solve these issues with the people
			hand-in-hand. Ultimately, this website will contain all the different unessay I produced
			during this course.
		</p></div>
	<br><br>
	</section>
<section id="about" style="text-align: justify;" class="svelte-1qp99xm"><div class="info svelte-1qp99xm"><h2 style="text-align: center;" class="svelte-1qp99xm">${validate_component(SparklingHighlight, "SparklingHighlight").$$render($$result, { color: "secondary" }, {}, {
    default: () => {
      return `Module 1!`;
    }
  })}</h2>
		<p class="svelte-1qp99xm">Starting off with the main differences of Humanities, Natural Sciences, and Social Sciences
			and some insights regarding them,
			<span style="font-weight: bold;" class="svelte-1qp99xm">Humanities</span>, is the study of what makes us humans or
			basically what components allows us to be different from other creatures. How do these
			components affect us and how do they become a part of our daily lives. Humanities is sort of
			like a study about humans and how they value these things that makes them humans.
		</p>
		<br>
		<p class="svelte-1qp99xm">On the other hand, <span style="font-weight: bold;" class="svelte-1qp99xm">Natural Sciences</span>, are a study of
			the natural world in an observable medium. This means that we seek to explain phenomenons in
			the world through quantitative and observable measures. Mainly, these are called hard sciences
			and often gives the impression that they are the only true sciences as they are studies in a
			systematic and structured manner.
		</p></div>
	<div class="image svelte-1qp99xm">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: "/images/society.png",
      alt: "Sample for the static template"
    },
    {},
    {}
  )}</div></section>
<div style="text-align: justify;"><p>Finally, <span style="font-weight: bold;">Social Science</span>, the one being discussed in this
		course seeks to explain the issues or knowledge hard sciences, like Chemistry, cannot explain.
		The knowledge that social science seeks to expound on are stemming from the interaction,
		structure, and decision-making of the person in a society or the society itself. Many people
		argue that Social Science is often harder than the hard sciences because of how dynamic in
		nature of its subject matter is. People like to overanalyze when they are being studied and
		would often give wrong answers just to mess with the data being interpreted. These problems are
		part of the responsibility of the people studying the social sciences making sure that whatever
		they suggest or give an idea on is still factual and unbiased. Some may argue that every science
		is biased and while that may be true, the unbiased factor that I am talking about is the
		objectivity of the information making sure that these are in no way misinformation or
		disinformation.
	</p>
	<br>
	<p>Now one may often think as to what social science basically solves as all sciences seeks to
		further develop humans be it their technology, their thinking, or their lives. Social sciences
		are often involved in a diverse array of sectors whether they be in the medical field or the
		political field. Now, why is this? This is because social science touches every single thing
		that a human is involved in since there are interactions and decisions being made for every
		thing a person is involved in. For example, direct lineage such as family are often involved
		with another persons life if they are related to them so whenever the person in the hospital bed
		cannot make a choice, another person makes a choice for them. Now what social science seeks to
		understand is why they try to make these decisions and possibly suggest studies or decisions
		depending on these observations. ${validate_component(SparklingHighlight, "SparklingHighlight").$$render($$result, { color: "secondary" }, {}, {
    default: () => {
      return `Overall, social science makes an impact on every part of the world!`;
    }
  })}</p>
	<br>
	<div style="text-align: justify;"><h2 style="text-align: center;">Now, let&#39;s answer some ${validate_component(SparklingHighlight, "SparklingHighlight").$$render($$result, { color: "secondary" }, {}, {
    default: () => {
      return `PROMPTS!`;
    }
  })} from
			the Unessay
		</h2>
		<br>
		<p>${validate_component(SparklingHighlight, "SparklingHighlight").$$render($$result, { color: "secondary" }, {}, {
    default: () => {
      return `Prompt 1:`;
    }
  })}
			What Philippine social problem are you directly affected by the most? How do you think social sciences
			can be useful in addressing this social problem?
		</p>
		<br>
		<p>Though quite a bit cliche because of how common it is in the Philippines, I would say one (and
			only one) of the problems I am affected in is the transportation traffic. This is because I
			usually spend 2 hrs commuting (in one way so 4 hours everyday) every day just to get to school
			and back. This is because I believe giving way for students who are in a much worse position
			than me (those who lives farther away) should be taking the space in the dorms so I don&#39;t try
			to get these from them. While I do see some benefits from commuting such as lower expenses
			since I don&#39;t have to spend a lot of money for my food, being better street smarts wise, and
			knowing the inherent problem of the country and being more aware of it, sometimes I think that
			I really just want to get a place near UP because of how tiring the every day scenario is. One
			challenge can be how no transportation can be used due to strikes or the weather being bad.
			There were times where I had to traverse a flood just to be able to get home. If there are
			transportation vehicles, then another problem would be how cramped it is because of how little
			amount there are compared to commuters. Of course if there are no problems, traffic will come
			in since a lot of people have their own private cars and there is little to no attention given
			to commuters and pedestrians. I believe that with social science, they will be able to get an
			observed, intellectual, and viable suggestion to improve if not the solution itself to these
			crises. Being able to have social scientists who experience these locally will be able to give
			a much more thorough and impactful solution to the person handling these affairs. ${validate_component(SparklingHighlight, "SparklingHighlight").$$render($$result, { color: "secondary" }, {}, {
    default: () => {
      return `I do think that putting importance to public service is the most important thing in a
				government.`;
    }
  })} So having experience these problems made me emphatize and value the public services we have in
			the country.
		</p>
		<br> <br>
		<p>${validate_component(SparklingHighlight, "SparklingHighlight").$$render($$result, { color: "secondary" }, {}, {
    default: () => {
      return `Prompt 3:`;
    }
  })}
			What career or field do you want to pursue in the future? How do you think your knowledge or appreciation
			of the social sciences will help you in this career or field?
		</p>
		<br>
		<p>I am pursuing either cybersecurity or data science with some freelancing on the side for
			Software Development. This is because I want to tackle often ignored issues such as data
			privacy and data security in the Philippines. I experienced first hand how misinformation and
			disinformation creates a social dilemma to be experienced for years by the victims by them.
			With social science, and data science or cyber security hand-in-hand, I believe a lot of the
			issues can be mitigated if not solved because they are very much aligned with each other. The
			social sciences can blur out the lines between the different fields I plan to pursue.
			Furthermore, appreciation and knowledge of social science will help with my career as my
			personal goal for my career is the betterment of the situation of my community and nation.
			Being able to look back and understand how my career can affect these people will be a great
			source of motivation, and knowledge for me as to how I can better achieve my dreams and in
			turn develop my career.
		</p></div>
	<br>
	<section id="about" style="text-align: justify;" class="svelte-1qp99xm"><div class="info svelte-1qp99xm"><h2 style="text-align: center;" class="svelte-1qp99xm">${validate_component(SparklingHighlight, "SparklingHighlight").$$render($$result, { color: "secondary" }, {}, {
    default: () => {
      return `Some Explanation about the Unessay`;
    }
  })}</h2>
	
			<p class="svelte-1qp99xm">The unessay 1 itself is the website the texts above are in. This is a website that was deployed using vercel so anyone can view them by using the correct link. I chose a website for my first unessay since I wanted to collect my outputs to see my progress and insights along the course. I will put past unessays in the archive section of the website so that I can view it along with my journey. I also believe that creating an unessay unique to my character will help me appreciate the lessons I was able to partake. Just like how prompt 3 asked me how social science can help with my career, I attempted to combine the two with software development being one and the content being social science. The concepts being used in these topics is to share knowledge or how social science can go hand-in-hand with different disciplines to further develop the country. I do think that by making use of my personal skills along with social science, it will help me grow to appreciate the course and will help me remind me of the lessons I was able to learn. The main concepts being discussed inside the websites are some lessons on the differences of the three disciplines and basically some experience and insight as to how social science can help with common problems we experience.
			</p>
			<p class="svelte-1qp99xm">This website is unfinished and will be further developed with more content as we progress with our course :). Note: Succeeding unessay will be different and will be just compiled in this website so the next unessay may be a poem or an infographic. I really just wanted to have a medium for compilation for my unessays and insights.
			</p></div>
	
		<div class="image svelte-1qp99xm">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: "/images/societal-image.png",
      alt: "Sample for the static template"
    },
    {},
    {}
  )}</div></section>
	<div class="socials svelte-1qp99xm"><span class="svelte-1qp99xm">Socials:</span>
		${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div>
</div>`;
});
const RecentPosts_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".grid.svelte-1hdv5ie{width:100%;display:grid;grid-template-columns:1fr 1fr;grid-gap:20px}@media(max-width: 767px){.grid.svelte-1hdv5ie{grid-template-columns:1fr}}",
  map: null
};
const RecentPosts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css$2);
  return `${validate_component(ContentSection, "ContentSection").$$render(
    $$result,
    {
      id: "recent-posts",
      title: "Blog posts",
      description: "This section shows the blog posts of different users talking about these societal complications. Check them out to learn more about it!",
      align: "left"
    },
    {},
    {
      button: () => {
        return `<div slot="button">${validate_component(Button, "Button").$$render($$result, { href: "/blog" }, {}, {
          default: () => {
            return `${validate_component(SparklingHighlight, "SparklingHighlight").$$render($$result, {}, {}, {
              default: () => {
                return `Expand Collection`;
              }
            })}`;
          }
        })}</div>`;
      },
      default: () => {
        return `<div class="grid svelte-1hdv5ie">${each(posts, (post) => {
          return `${validate_component(BlogPostCard, "BlogPostCard").$$render(
            $$result,
            {
              slug: post.slug,
              title: post.title,
              excerpt: post.excerpt,
              tags: post.tags,
              readingTime: post.readingTime,
              showImage: false
            },
            {},
            {}
          )}`;
        })}</div>`;
      }
    }
  )}`;
});
const FeatureCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".content.svelte-x9191d{display:flex;flex-direction:column;gap:10px;align-items:flex-start}.title.svelte-x9191d{display:flex;align-items:center;justify-content:space-between;width:100%;font-size:1.2rem;font-family:var(--font--title);font-weight:700}.tags.svelte-x9191d{display:flex;align-items:center;gap:5px;flex-wrap:wrap}.footer.svelte-x9191d{margin-top:20px}.feature-card .image img{object-fit:cover}",
  map: null
};
const FeatureCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { description } = $$props;
  let { image } = $$props;
  let { tags } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  $$result.css.add(css$1);
  return `${validate_component(Card, "Card").$$render($$result, { additionalClass: "feature-card" }, {}, {
    footer: () => {
      return `<div class="footer svelte-x9191d" slot="footer">${tags && tags.length > 0 ? `<div class="tags svelte-x9191d">${each(tags, (tag) => {
        return `${validate_component(Tag, "Tag").$$render($$result, { color: tag.color }, {}, {
          default: () => {
            return `${escape(tag.label)}`;
          }
        })}`;
      })}</div>` : ``}</div>`;
    },
    content: () => {
      return `<div class="content svelte-x9191d" slot="content"><div class="title svelte-x9191d"><span>${escape(name)}</span></div>
		<p>${escape(description)}</p></div>`;
    },
    image: () => {
      return `<div class="image" slot="image">${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: image,
          alt: "Picture describing the " + name + " feature"
        },
        {},
        {}
      )}</div>`;
    }
  })}`;
});
const Features_svelte_svelte_type_style_lang = "";
const css = {
  code: ".features-container.svelte-9ei89p{width:100%;display:grid;grid-template-columns:1fr;grid-gap:20px}.three-group-grid.svelte-9ei89p{width:100%;display:grid;grid-template-columns:2fr 1fr;grid-gap:20px}@media(max-width: 1085px){.three-group-grid.svelte-9ei89p{grid-template-columns:1fr 1fr}}@media(max-width: 767px){.three-group-grid.svelte-9ei89p{grid-template-columns:1fr}}@media(min-width: 1086px){.three-group-grid.svelte-9ei89p>:nth-child(3n + 2){grid-row:span 2}}@media(max-width: 1085px){.three-group-grid.svelte-9ei89p>:nth-child(3n + 1){grid-column:span 2}}@media(max-width: 900px){.three-group-grid.svelte-9ei89p>:nth-child(3n + 1){grid-template-columns:1fr;grid-column:unset}}",
  map: null
};
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { features } = $$props;
  if ($$props.features === void 0 && $$bindings.features && features !== void 0)
    $$bindings.features(features);
  $$result.css.add(css);
  return `${validate_component(ContentSection, "ContentSection").$$render(
    $$result,
    {
      id: "features",
      title: "Contributors",
      description: "Here are the members of the group!"
    },
    {},
    {
      default: () => {
        return `<div class="features-container svelte-9ei89p"><div class="three-group-grid svelte-9ei89p">${each(features, (feature) => {
          return `${validate_component(FeatureCard, "FeatureCard").$$render(
            $$result,
            {
              name: feature.name,
              description: feature.description,
              image: feature.image,
              tags: feature.tags
            },
            {},
            {}
          )}`;
        })}</div></div>`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { features, posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="container">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
	${validate_component(About, "About").$$render($$result, {}, {}, {})}
	${posts && posts.length > 0 ? `${validate_component(RecentPosts, "RecentPosts").$$render($$result, { posts }, {}, {})}` : ``}
	${validate_component(Features, "Features").$$render($$result, { features }, {}, {})}</div>`;
});
export {
  Page as default
};

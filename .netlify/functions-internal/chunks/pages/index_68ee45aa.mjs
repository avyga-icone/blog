import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent } from '../astro_b84b25de.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Index$3, a as $$page, b as $$slug } from '../prerender_303aa98a.mjs';
/* empty css                                  */import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"v2023-08-24","projectId":"7bqqhdtu","dataset":"production","useCdn":false,"studioBasePath":"/admin"}
          );

globalThis.sanityClient = sanityClient;

const $$Astro$2 = createAstro("https://blog.avyga.com");
const prerender$2 = false;
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const { props } = Astro2;
  return renderTemplate`${renderComponent($$result, "Page", $$Index$3, { ...props })}`;
}, "C:/code/avyga/blog/frontend/src/pages/en/index.astro", void 0);

const $$file$2 = "C:/code/avyga/blog/frontend/src/pages/en/index.astro";
const $$url$2 = "/en";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Index$2,
        file: $$file$2,
        prerender: prerender$2,
        url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://blog.avyga.com");
const prerender$1 = false;
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { props } = Astro2;
  return renderTemplate`${renderComponent($$result, "Page", $$page, { ...props })}`;
}, "C:/code/avyga/blog/frontend/src/pages/en/pages/[page]/index.astro", void 0);

const $$file$1 = "C:/code/avyga/blog/frontend/src/pages/en/pages/[page]/index.astro";
const $$url$1 = "/en/pages/[page]";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Index$1,
        file: $$file$1,
        prerender: prerender$1,
        url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://blog.avyga.com");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { props } = Astro2;
  return renderTemplate`${renderComponent($$result, "Page", $$slug, { ...props })}`;
}, "C:/code/avyga/blog/frontend/src/pages/en/blog/[slug]/index.astro", void 0);

const $$file = "C:/code/avyga/blog/frontend/src/pages/en/blog/[slug]/index.astro";
const $$url = "/en/blog/[slug]";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Index,
        file: $$file,
        prerender,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i, sanityClient as s };

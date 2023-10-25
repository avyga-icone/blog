import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_38be6d78.mjs';
import 'react';
import 'react-dom/server';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_b84b25de.mjs';
import './chunks/index_52ac59f2.mjs';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/studio-route_9808ffe6.mjs');
const _page1  = () => import('./chunks/generic_cfd043ed.mjs');
const _page2  = () => import('./chunks/index_17ca9c6a.mjs');
const _page3  = () => import('./chunks/_page__05752cf9.mjs');
const _page4  = () => import('./chunks/_slug__9f8703cf.mjs');
const _page5  = () => import('./chunks/404_4b616990.mjs');
const _page6  = () => import('./chunks/index_7999fd02.mjs');
const _page7  = () => import('./chunks/index_b6824b17.mjs');
const _page8  = () => import('./chunks/index_3e1541f4.mjs');const pageMap = new Map([["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page0],["node_modules/astro/dist/assets/endpoint/generic.js", _page1],["src/pages/index.astro", _page2],["src/pages/pages/[page].astro", _page3],["src/pages/blog/[slug].astro", _page4],["src/pages/404.astro", _page5],["src/pages/en/index.astro", _page6],["src/pages/en/pages/[page]/index.astro", _page7],["src/pages/en/blog/[slug]/index.astro", _page8]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };

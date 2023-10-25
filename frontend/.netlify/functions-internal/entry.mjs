import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_e7fb2330.mjs';
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

const _page0  = () => import('./chunks/generic_c032b77e.mjs');
const _page1  = () => import('./chunks/index_b9e5de5c.mjs');
const _page2  = () => import('./chunks/_page__74749dd9.mjs');
const _page3  = () => import('./chunks/_slug__8c0a81da.mjs');
const _page4  = () => import('./chunks/404_83ea6f11.mjs');
const _page5  = () => import('./chunks/index_830ff0b9.mjs');
const _page6  = () => import('./chunks/index_e3e21746.mjs');
const _page7  = () => import('./chunks/index_e8cf2d7e.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/pages/[page].astro", _page2],["src/pages/blog/[slug].astro", _page3],["src/pages/404.astro", _page4],["src/pages/en/index.astro", _page5],["src/pages/en/pages/[page]/index.astro", _page6],["src/pages/en/blog/[slug]/index.astro", _page7]]);
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

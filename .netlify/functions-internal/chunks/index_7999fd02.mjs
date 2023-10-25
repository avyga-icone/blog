export { renderers } from '../renderers.mjs';
export { onRequest } from '../middleware2.mjs';
import 'react';
import 'react-dom/server';
import './index_52ac59f2.mjs';
import 'mime';
import 'html-escaper';
import 'clsx';
import './astro_b84b25de.mjs';
import 'cookie';
import 'kleur/colors';
import './prerender_303aa98a.mjs';
import './pages/index_68ee45aa.mjs';
/* empty css                                 */import '@sanity/client';
/* empty css                           */import '@sanity/image-url';
import 'dayjs';
import '@portabletext/toolkit';

const page = () => import('./pages/index_68ee45aa.mjs').then(n => n.i);

export { page };

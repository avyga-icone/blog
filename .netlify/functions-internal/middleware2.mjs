import './chunks/index_52ac59f2.mjs';
import { y as ys } from './chunks/prerender_303aa98a.mjs';
import 'mime';
import 'html-escaper';
import 'clsx';
import './chunks/astro_b84b25de.mjs';
import 'cookie';
import 'kleur/colors';
import './chunks/pages/index_68ee45aa.mjs';
/* empty css                                        */import '@sanity/client';
/* empty css                                  */import '@sanity/image-url';
import 'dayjs';
import '@portabletext/toolkit';

function sequence(...handlers) {
  const length = handlers.length;
  if (!length) {
    const handler = defineMiddleware((context, next) => {
      return next();
    });
    return handler;
  }
  return defineMiddleware((context, next) => {
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = handlers[i];
      const result = handle(handleContext, async () => {
        if (i < length - 1) {
          return applyHandle(i + 1, handleContext);
        } else {
          return next();
        }
      });
      return result;
    }
  });
}

function defineMiddleware(fn) {
  return fn;
}

const astroI18n = ys();
const onRequest = sequence(astroI18n);

export { onRequest };

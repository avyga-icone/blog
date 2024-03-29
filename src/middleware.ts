import { sequence } from "astro/middleware"
import { useAstroI18n } from "astro-i18n"

const astroI18n = useAstroI18n()

export const onRequest = sequence(astroI18n)
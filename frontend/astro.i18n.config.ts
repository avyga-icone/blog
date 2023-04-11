import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	defaultLangCode: "fr",
	supportedLangCodes: ['en'],
	translations: {
		fr: './src/locales/fr.json'
	}
})
import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	defaultLangCode: "en",
	supportedLangCodes: ['fr'],
	translations: {
		fr: './src/locales/fr.json'
	}
})
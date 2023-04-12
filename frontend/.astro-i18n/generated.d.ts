type DefaultLangCode = "fr"
type SupportedLangCode = "en"
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = | "/blog/[slug]" | "/contact" | "/pages/[page]" | "/404" | "/about" | "/" 
type RouteParams = {"/blog/[slug]": { "slug": string; }; "/contact": undefined; "/pages/[page]": { "page": string; }; "/404": undefined; "/about": undefined; "/": undefined; }
type TranslationPath = "home" | "show-all" | "articles" | "talk-to-us" | "footer.about" | "footer.contact" | "footer.privacy" | "footer.rights" | "index.404.index" | "index.404.message" | "index.404.back" | "index.contact.help" | "index.contact.call" | "index.contact.schedule" | "index.new-post" | "index.next" | "index.prev"
type TranslationOptions = { "home": {} | undefined; "show-all": {} | undefined; "articles": {} | undefined; "talk-to-us": {} | undefined; "footer.about": {} | undefined; "footer.contact": {} | undefined; "footer.privacy": {} | undefined; "footer.rights": {} | undefined; "index.404.index": {} | undefined; "index.404.message": {} | undefined; "index.404.back": {} | undefined; "index.contact.help": {} | undefined; "index.contact.call": {} | undefined; "index.contact.schedule": {} | undefined; "index.new-post": {} | undefined; "index.next": {} | undefined; "index.prev": {} | undefined; }

declare module "astro-i18n" {
	export * from "astro-i18n/"
	
	export function l<Uri extends RouteUri>(
		route: Uri | string & {},
		...args: keyof RouteParams extends Uri
			? [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
			: [params: RouteParams[Uri], targetLangCode?: LangCode, routeLangCode?: LangCode]
	): string
	
	export function t<Path extends TranslationPath>(
		path: Path | string & {},
		...args: undefined extends TranslationOptions[Path]
			? [options?: keyof TranslationOptions extends Path ? Record<string, unknown> : TranslationOptions[Path], langCode?: LangCode]
			: [options: TranslationOptions[Path], langCode?: LangCode]
	): string
	
	export function extractRouteLangCode(route: string): LangCode | undefined
	
	type Translation = string | { [translationKey: string]: string | Translation }
	type Translations = { [langCode: string]: Record<string, Translation> }
	type RouteTranslations = { [langCode: string]: Record<string, string> }
	type InterpolationFormatter = (value: unknown, ...args: unknown[]) => string
	class AstroI18n {
		defaultLangCode: DefaultLangCode
		supportedLangCodes: SupportedLangCode[]
		showDefaultLangCode: boolean
		translations: Translations
		routeTranslations: RouteTranslations
		get langCodes(): LangCode[]
		get langCode(): LangCode
		set langCode(langCode: LangCode)
		get formatters(): Record<string, InterpolationFormatter>
		init(Astro: { url: URL }, formatters?: Record<string, InterpolationFormatter>): void
		addTranslations(translations: Translations): void
		addRouteTranslations(routeTranslations: RouteTranslations): void
		getFormatter(name: string): InterpolationFormatter | undefined
		setFormatter(name: string, formatter: InterpolationFormatter): void
		deleteFormatter(name: string): void
	}
	export const astroI18n: AstroI18n
}

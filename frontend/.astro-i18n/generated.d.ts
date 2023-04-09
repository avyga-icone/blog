type DefaultLangCode = "en"
type SupportedLangCode = "fr"
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = | "/blog" | "/blog/[...slug]" | "/blog" | "/blog/[...slug]" | "/fr/blog" | "/fr/blog/[...slug]" | "/fr/fr/blog" | "/fr/fr/blog/[...slug]" | "/fr/fr/fr/blog" | "/fr/fr/fr/blog/[...slug]" | "/fr/fr/fr/fr/blog" | "/fr/fr/fr/fr/blog/[...slug]" | "/fr/fr/fr/fr/fr/blog" | "/fr/fr/fr/fr/fr/blog/[...slug]" | "/fr/fr/fr/fr/fr/fr/blog" | "/fr/fr/fr/fr/fr/fr/blog/[...slug]" | "/fr/fr/fr/fr/fr/fr/fr/blog" | "/fr/fr/fr/fr/fr/fr/fr/blog/[...slug]" | "/fr/fr/fr/fr/fr/fr/fr/about" | "/fr/fr/fr/fr/fr/fr/fr" | "/fr/fr/fr/fr/fr/fr/fr/new" | "/fr/fr/fr/fr/fr/fr/about" | "/fr/fr/fr/fr/fr/fr" | "/fr/fr/fr/fr/fr/fr/new" | "/fr/fr/fr/fr/fr/about" | "/fr/fr/fr/fr/fr" | "/fr/fr/fr/fr/fr/new" | "/fr/fr/fr/fr/about" | "/fr/fr/fr/fr" | "/fr/fr/fr/fr/new" | "/fr/fr/fr/about" | "/fr/fr/fr" | "/fr/fr/fr/new" | "/fr/fr/about" | "/fr/fr" | "/fr/fr/new" | "/fr/about" | "/fr" | "/fr/new" | "/about" | "/" | "/new" | "/about" | "/" | "/new" 
type RouteParams = {"/blog": undefined; "/blog/[...slug]": { "...slug": string; }; "/blog": undefined; "/blog/[...slug]": { "...slug": string; }; "/fr/blog": undefined; "/fr/blog/[...slug]": { "...slug": string; }; "/fr/fr/blog": undefined; "/fr/fr/blog/[...slug]": { "...slug": string; }; "/fr/fr/fr/blog": undefined; "/fr/fr/fr/blog/[...slug]": { "...slug": string; }; "/fr/fr/fr/fr/blog": undefined; "/fr/fr/fr/fr/blog/[...slug]": { "...slug": string; }; "/fr/fr/fr/fr/fr/blog": undefined; "/fr/fr/fr/fr/fr/blog/[...slug]": { "...slug": string; }; "/fr/fr/fr/fr/fr/fr/blog": undefined; "/fr/fr/fr/fr/fr/fr/blog/[...slug]": { "...slug": string; }; "/fr/fr/fr/fr/fr/fr/fr/blog": undefined; "/fr/fr/fr/fr/fr/fr/fr/blog/[...slug]": { "...slug": string; }; "/fr/fr/fr/fr/fr/fr/fr/about": undefined; "/fr/fr/fr/fr/fr/fr/fr": undefined; "/fr/fr/fr/fr/fr/fr/fr/new": undefined; "/fr/fr/fr/fr/fr/fr/about": undefined; "/fr/fr/fr/fr/fr/fr": undefined; "/fr/fr/fr/fr/fr/fr/new": undefined; "/fr/fr/fr/fr/fr/about": undefined; "/fr/fr/fr/fr/fr": undefined; "/fr/fr/fr/fr/fr/new": undefined; "/fr/fr/fr/fr/about": undefined; "/fr/fr/fr/fr": undefined; "/fr/fr/fr/fr/new": undefined; "/fr/fr/fr/about": undefined; "/fr/fr/fr": undefined; "/fr/fr/fr/new": undefined; "/fr/fr/about": undefined; "/fr/fr": undefined; "/fr/fr/new": undefined; "/fr/about": undefined; "/fr": undefined; "/fr/new": undefined; "/about": undefined; "/": undefined; "/new": undefined; "/about": undefined; "/": undefined; "/new": undefined; }
type TranslationPath = "home" | "index.test"
type TranslationOptions = { "home": {} | undefined; "index.test": {} | undefined; }

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

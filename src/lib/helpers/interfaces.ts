enum Locale {
	it = "it-IT",
	en = "en-US"
}

enum Theme {
	light = "light",
	dark = "dark"
}

enum Tag {
	web = "WEB",
	ios = "iOS",
	android = "ANDROID"
}

interface Link {
	url: string,
	image: string,
	title: string,
	tags: Array<Tag>,
	description: string,
}

interface Section {
	title: string,
	links: Array<Link>
}

export { Locale, Theme, Tag };
export type { Link, Section };

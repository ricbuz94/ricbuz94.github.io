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

interface Post {
	url: string,
	title: string,
	tags: Array<Tag>,
	image: string,
	description: string,
}

interface Section {
	title: string,
	posts: Array<Post>
}

export { Locale, Theme, Tag };
export type { Post, Section };

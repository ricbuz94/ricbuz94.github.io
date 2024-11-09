enum Locale {
	_it = "it",
	it = "it-IT",
	en = "en-US"
}

enum Theme {
	light = "light",
	dark = "dark"
}

enum Tag {
	web = "web",
	ios = "ios",
	android = "android"
}

interface Post {
	id: string,
	url: string,
	noBlank?: boolean,
	title: string,
	tags: Array<Tag>,
	image: string,
	description: string,
}

interface Section {
	id: string,
	title: string,
	posts: Array<Post>
}

export { Locale, Theme, Tag };
export type { Post, Section };

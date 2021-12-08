enum Tag {
	web = "WEB",
	android = "ANDROID"
}

interface Link {
	url: string,
	title: string,
	tag: Tag,
	description: string,
}

interface Section {
	title: string,
	links: Array<Link>
}

export { Tag };
export type { Link, Section };

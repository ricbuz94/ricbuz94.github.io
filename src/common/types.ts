
export interface Item {
	url: string
	title: string
	description: string
}

export interface List {
	title: string
	items: Array<Item>
}
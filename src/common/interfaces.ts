export enum Tag {
	web = "WEB",
	android = "ANDROID"
}

export enum Sex {
	male = "Maschio",
	female = "Femmina"
}

export enum Licence {
	dummy = "Neopatentato: limite a 0 g/dL",
	average = "Ordinario: limite a 0,5 g/dL"
}

export enum Stomach {
	empty = "Vuoto",
	full = "Pieno"
}

export interface Bevanda {
	volume: number
	grade: number
}

export interface Calcolo1 {
	sex: Sex
	age: number
	height: number
	weight: number
	grade: number
	result: number
}

export interface Calcolo2 {
	licence: Licence
	stomach: Stomach
	drink1: Bevanda
	drink2?: Bevanda
	drink3?: Bevanda
	result: number
}

export interface Link {
	tag?: Tag
	url: string
	title: string
	description: string
}

export interface Links {
	title: string
	links: Array<Link>
}
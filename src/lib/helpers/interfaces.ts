// Enums
enum Locale {
    it = "it",
    en = "en",
}

enum Theme {
    light = "light",
    dark = "dark",
}

enum Tag {
    web = "WEB",
    ios = "iOS",
    android = "ANDROID",
    jquery = "JQUERY",
    react = "REACT",
    reactNative = "REACT_NATIVE",
    php = "PHP",
    flutter = "FLUTTER",
}

// Types
interface T_Post {
    id: string;
    url: string;
    noBlank?: boolean;
    title: string;
    tags: Array<Tag>;
    image: string;
    description: string;
}

interface T_Section {
    id: string;
    title: string;
    posts: Array<T_Post>;
}

export { Locale, Theme, Tag };
export type { T_Post, T_Section };

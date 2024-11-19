import { browser } from "$app/environment";
import { readable, type Readable, type Subscriber } from "svelte/store";

//export a function that return a readable given a string media query as input
export const useMediaQuery = (mediaQueryString: string): Readable<boolean> => {
    //we inizialize the readable as null and get the callback with the set function
    const matches = readable(false, (set: Subscriber<boolean>) => {
        if (browser) {
            // match the media query
            const m = window?.matchMedia(mediaQueryString);

            // set the value of the reader to the matches property
            set(m.matches);

            // create the event listener that will set the new value on change
            const el: (e: MediaQueryListEvent) => void = (
                e: MediaQueryListEvent,
            ) => set(e.matches);

            // add the new event listener
            m.addEventListener("change", el);

            // return the stop function that will clean the event listener
            return () => {
                m.removeEventListener("change", el);
            };
        }
    });
    return matches;
};

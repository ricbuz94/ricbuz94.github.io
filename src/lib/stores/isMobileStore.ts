import { browser } from '$app/environment';
import { readable } from 'svelte/store';

const mobile = {
    getUserAgent: (): string => {
        return browser ? navigator?.userAgent : "";
    },
    Android: function (): boolean {
        return /Android/i.test(mobile.getUserAgent()) && !mobile.Windows();
    },
    BlackBerry: function (): boolean {
        return /BlackBerry|BB10|PlayBook/i.test(mobile.getUserAgent());
    },
    iPhone: function (): boolean {
        return (
            /iPhone/i.test(mobile.getUserAgent()) &&
            !mobile.iPad() &&
            !mobile.Windows()
        );
    },
    iPod: function (): boolean {
        return /iPod/i.test(mobile.getUserAgent());
    },
    iPad: function (): boolean {
        return /iPad/i.test(mobile.getUserAgent());
    },
    iOS: function (): boolean {
        return mobile.iPad() || mobile.iPod() || mobile.iPhone();
    },
    Opera: function (): boolean {
        return /Opera Mini/i.test(mobile.getUserAgent());
    },
    Windows: function (): boolean {
        return /Windows Phone|IEMobile|WPDesktop/i.test(
            mobile.getUserAgent(),
        );
    },
    KindleFire: function (): boolean {
        return /Kindle Fire|Silk|KFAPWA|KFSOWI|KFJWA|KFJWI|KFAPWI|KFAPWI|KFOT|KFTT|KFTHWI|KFTHWA|KFASWI|KFTBWI|KFMEWI|KFFOWI|KFSAWA|KFSAWI|KFARWI/i.test(
            mobile.getUserAgent(),
        );
    },
    check: function (): boolean {
        if (!mobile.getUserAgent()) {
            return false;
        }
        return (
            mobile.Android() ||
            mobile.BlackBerry() ||
            mobile.iOS() ||
            mobile.Opera() ||
            mobile.Windows()
        );
    },
};

export default readable(false, set => {
    set(mobile.check());
});


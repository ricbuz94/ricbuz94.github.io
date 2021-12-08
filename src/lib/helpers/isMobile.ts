const isMobile = {
	getUserAgent: (): string => {
		return navigator.userAgent;
	},
	Android: function (): boolean {
		return /Android/i.test(isMobile.getUserAgent()) && !isMobile.Windows();
	},
	BlackBerry: function (): boolean {
		return /BlackBerry|BB10|PlayBook/i.test(isMobile.getUserAgent());
	},
	iPhone: function (): boolean {
		return /iPhone/i.test(isMobile.getUserAgent()) && !isMobile.iPad() && !isMobile.Windows();
	},
	iPod: function (): boolean {
		return /iPod/i.test(isMobile.getUserAgent());
	},
	iPad: function (): boolean {
		return /iPad/i.test(isMobile.getUserAgent());
	},
	iOS: function (): boolean {
		return (isMobile.iPad() || isMobile.iPod() || isMobile.iPhone());
	},
	Opera: function (): boolean {
		return /Opera Mini/i.test(isMobile.getUserAgent());
	},
	Windows: function (): boolean {
		return /Windows Phone|IEMobile|WPDesktop/i.test(isMobile.getUserAgent());
	},
	KindleFire: function (): boolean {
		return /Kindle Fire|Silk|KFAPWA|KFSOWI|KFJWA|KFJWI|KFAPWI|KFAPWI|KFOT|KFTT|KFTHWI|KFTHWA|KFASWI|KFTBWI|KFMEWI|KFFOWI|KFSAWA|KFSAWI|KFARWI/i.test(isMobile.getUserAgent());
	},
	any: function (): boolean {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

export default isMobile.any;
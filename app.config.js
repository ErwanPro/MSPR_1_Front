import "dotenv/config";

export default {
	expo: {
		name: "GoStyle",
		slug: "GoStyle",
		version: "1.0.0",
		extra: {
			urlServer: process.env.SERVER_ADDR,
		},
		orientation: "portrait",
		icon: "./assets/icon.png",
		splash: {
			image: "./assets/splash.png",
			resizeMode: "contain",
			backgroundColor: "#ffffff",
		},
		updates: {
			fallbackToCacheTimeout: 0,
		},
		assetBundlePatterns: ["**/*"],
		ios: {
			supportsTablet: true,
		},
		android: {
			adaptiveIcon: {
				foregroundImage: "./assets/adaptive-icon.png",
				backgroundColor: "#FFFFFF",
			},
		},
		web: {
			favicon: "./assets/favicon.png",
		},
	},
};

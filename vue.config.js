const {defineConfig} = require("@vue/cli-service");

module.exports = defineConfig({
	publicPath: "./",
	transpileDependencies: true,
	pwa: {
		name: "weather-widget",
		short_name: "weather-widget",
		display: "standalone",
		start_url: ".",
		themeColor: "#ffffff",
		msTileColor: "#ffffff",
		appleMobileWebAppCapable: "yes",
		appleMobileWebAppStatusBarStyle: "white",

		workboxOptions: {
			skipWaiting: true,
		},
	},
});

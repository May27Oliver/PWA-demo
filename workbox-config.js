module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,html,png,txt,js,css,svg}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
		/^none/
	],
	swDest: 'build/sw.js',
	swSrc: "src/sw.js",
	injectionPointRegexp:/(const precacheManifest = )\[\](;)/
};
const path = require('path');
const BUILD_PATH = 'build'

module.exports = {
	/*absolute path to the client side js folder*/
	context: path.join(__dirname, 'src'),
	/*entry point of the application*/
	entry: [
		"./main.js",
	],
	output: {
		path: path.join(__dirname, BUILD_PATH),
		filename: 'bundle.js',
	},
	module: {
		/* specifies how each file should be processed before it is combined into the bundle*/
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					'babel-loader'
				],
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					'style-loader', 
					'css-loader'
				]
			}
		]
	},
	/*this is where webpack should look for files referenced by import or require statements*/
	/*so that you can import npm packages into the project*/
	resolve: {
		modules: [
			path.join(__dirname, 'node_modules'),
		],
	},
}
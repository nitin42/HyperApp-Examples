const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './index.js'),
	output: {
		path: path.resolve(__dirname),
		filename: 'bundle.js'
	},
	devtool: 'eval',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
    new webpack.optimize.UglifyJsPlugin()
	]
}
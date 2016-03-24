var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080', // Setting the URL for the hot reload
		'webpack/hot/only-dev-server', // Reload only the dev server
		'./src/index.js'
	],
	output: {
		path: __dirname + '/dist/',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'react-hot!babel' // Include the react-hot loader
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin() // Wire in the hot loading plugin
	]
};
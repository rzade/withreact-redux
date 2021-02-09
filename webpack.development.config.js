const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'index': './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: ''
	},
	mode: 'development',
	devServer: {
		contentBase: path.resolve(__dirname, 'build'),
		index: 'index.html',
		port: 3005,
		proxy: {
	      '/api': 'http://localhost:5000'
	    }
	},
	module: {
		rules: [
			{
				test: /\.(woff(2)?|ttf|eot|svg|jpg|png|gif)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader', 'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader', 'css-loader', 'sass-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/env' ],
						plugins: [ 'transform-class-properties' ]
					}
				}
			},
			{
		        test: /\.jsx?$/,
		        exclude: /node_modules/,
		        loader: 'babel-loader'
	        }
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
	       template: 'src/templates/index.html'
	    })
	]
}

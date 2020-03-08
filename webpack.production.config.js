const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'index': './src/index.js',
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'build'),
		publicPath: ''
	},
	mode: 'production',
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 10000,
			automaticNameDelimiter: '_'
		}
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, 
					'css-loader', 
					'sass-loader'
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
		new UglifyJsPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		}),
		new HtmlWebpackPlugin({
	       	template: 'src/templates/index.html',
	       	minify: {
			    collapseWhitespace: true,
			    removeComments: true,
			    removeRedundantAttributes: true,
			    removeScriptTypeAttributes: true,
			    removeStyleLinkTypeAttributes: true,
			    useShortDoctype: true
			},
	    })
	]
}
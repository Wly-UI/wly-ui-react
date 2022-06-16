// webpack.config.js
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
	target: 'web', // 默认打包成web平台的
	mode: 'production', // 环境 development 和 production 环境 链接： https://www.webpackjs.com/concepts/mode/#mode-development
	entry: path.resolve(__dirname, '../src/components/index.ts'), // 文件的入口
	output: {
		filename: 'index.js', // 文件名
		path: path.resolve(__dirname, '../dist'), // 文件输出地址
		library: {
			type: 'module'
		},
		clean: true
	},
	externals: {
		react: 'react',
		'react-dom': 'react-dom'
	},
	experiments: { outputModule: true },
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true
						}
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/, // 图片
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/images/[name].[ext]' // 存放的位置： dist/assets/images/文件
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/, // 字体
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/fonts/[name].[ext]' // 存放的位置： dist/assets/fonts/文件
						}
					}
				]
			},
			{
				test: /\.css$/, // css 样式
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.less$/i, // less 样式
				use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'README.md',
					to: path.resolve(__dirname, '../dist')
				}
			]
		})
	],
	resolve: {
		alias: {
			// "@": ["../src"],
			'@': path.resolve(__dirname, '../src/'),
			src: path.resolve(__dirname, '../src/'),
			components: path.resolve(__dirname, '../src/components'),
			config: path.resolve(__dirname, '../src/config'),
			hook: path.resolve(__dirname, '../src/hook'),
			apis: path.resolve(__dirname, '../src/apis'),
			router: path.resolve(__dirname, '../src/router'),
			store: path.resolve(__dirname, '../src/store'),
			theme: path.resolve(__dirname, '../src/theme'),
			util: path.resolve(__dirname, '../src/util'),
			i18n: path.resolve(__dirname, '../src/i18n'),
			assets: path.resolve(__dirname, '../src/assets'),
			views: path.resolve(__dirname, '../src/views')
		},
		extensions: ['.tsx', '.ts', '.wasm', '.mjs', '.js', '.json']
	}
};

const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, "examples/src/index.html"),
	filename: "./index.html"
})

module.exports = {
	entry: path.join(__dirname, "examples/src/index.js"),
	output: {
		path: path.join(__dirname, "examples/dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "eslint-loader",
				options: {
					configFile: ".eslintrc.js",
					/*outputReport: {
						filePath: "checkstyle.xml"
					}*/
				}
			},
			{
				test: /\.(js|jsx)$/,
				use: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: "style-loader",
					},
					/*{
						loader: MiniCssExtractPlugin.loader
					},*/
					{
						loader: "css-loader",
						options: { url: false }
					},
					{
						loader: "less-loader",
						/*options: {
							// define paths for @imports
							// because using webpack's resolver tries to
							// look up @import web urls as relative file paths

							// "node_modules" doesn't seem to be included??
							paths: ["web", "node_modules"],
							// without this @imported less-file urls will 
							// for some reason be changed to 
							// '../../../' etc. '/src/'
							relativeUrls: false,

							plugins: [
								new LessPluginAutoPrefix()
							]
						}*/
					}
				]
			}
		]
	},
	plugins: [htmlWebpackPlugin],
	resolve: {
		extensions: [".js", ".jsx"]
	},
	devServer: {
		port: 3001
	}
}
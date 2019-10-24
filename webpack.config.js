const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, "examples/src/index.html"),
	filename: "./index.html"
})

module.exports = {
	entry: path.join(__dirname, "examples/src/index.js"),
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
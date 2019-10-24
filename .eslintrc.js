// sublime: via package control (ctrl+shift+p) install
// --> SublimeLinter
// --> SublimeLinter-eslint
// npm i -D eslint babel-eslint eslint-plugin-babel eslint-plugin-react

module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"jest": true,
		"amd": true,		// for require() and define()
		"node": true		// for module and __dirname
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"babel",
		"react"
	],
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"rules": {
		"indent": [
			"error",
			"tab",
			{
				"ObjectExpression": "first",
				"flatTernaryExpressions": true,
				"ignoredNodes": ["JSXElement", 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild']
			}
		],
		"linebreak-style": [
			"off",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		],
		"no-debugger": "warn",
		"no-unused-vars": "warn",
		"no-invalid-this": 0,
		"babel/no-invalid-this": 1,
		"class-methods-use-this": "warn",
		"no-console": [
			"off",
			{ "allow": ["error"] }
		],
		//"semi": "off",
		//"babel/semi": [
		//    "off",
		//    "never"
		//],
		"operator-linebreak": [
			"error",
			"before",
			{ "overrides": {
				"=": "ignore"
			}}
		],
		"no-multi-spaces": [
			"error",
			{ "exceptions": {} }
		],
		// v-- doesn't work with tabs...
		//"key-spacing": [
		//    "error", 
		//    { "align": "value" }
		//],
		"react/jsx-no-bind": [
			0
		],
		"react/no-unescaped-entities": [
			"error", 
			{"forbid": ["<", ">", "{", "}"]}
		],
		"react/jsx-indent": [
		   0
		]
	},
	"parser": "babel-eslint",
	"parserOptions": { "sourceType": "module" }
};
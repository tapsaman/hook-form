import React, { useState } from "react"
import PropTypes from "prop-types"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism-light"
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx"
import json from "react-syntax-highlighter/dist/esm/languages/prism/json"
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism"
 
SyntaxHighlighter.registerLanguage("jsx", jsx)
SyntaxHighlighter.registerLanguage("json", json)

function ExampleFormWrap({ Form, code }) {
	const [output, setOutput] = useState("{}")

	return (
		<div>
			<div className="source-container">
				<h3>Source</h3>
				<SyntaxHighlighter
					language="jsx"
					style={prism}
					className="syntax-highlighter"
					>
					{code}
				</SyntaxHighlighter>
			</div>
			<div className="form-container">
				<h3>Form</h3>
				<Form
					onChange={o => setOutput(JSON.stringify(o, null, 4))}
					/>
			</div>
			<div className="output-container">
				<h3>Output</h3>
				<SyntaxHighlighter
					language="json"
					style={prism}
					className="syntax-highlighter"
					>
					{output}
				</SyntaxHighlighter>
			</div>

			{/*<pre className="output-container">
				{JSON.stringify(output, null, 4)}
			</pre>*/}
		</div>
	)
}

ExampleFormWrap.propTypes = {
	Form:	PropTypes.func,
	code:	PropTypes.string
}

export default ExampleFormWrap
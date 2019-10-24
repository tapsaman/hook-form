import React, { useState } from "react"
import { render} from "react-dom"

import HookForm from "../../src"

function ExampleApp() {
	const [output, setOutput] = useState({})
	return (
		<div>
			<HookForm
				onChange={setOutput}
				/>
			<pre>
				{JSON.stringify(output, null, 4)}
			</pre>
		</div>
	)
}

render(<ExampleApp />, document.getElementById("root"))
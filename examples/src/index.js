import React from "react"
import { render} from "react-dom"

import "./style.less"
import "../../src/style.less"
import "../../src/skin.less"
import ExampleFormWrap from "./components/ExampleFormWrap"
import BasicForm, { basicFormCode } from "./components/BasicForm"

function ExampleApp() {
	return (
		<div>
			<h1>hook-form examples</h1>
			<h2>Basic</h2>
			<ExampleFormWrap
				Form={BasicForm}
				code={basicFormCode}
				/>
		</div>
	)
}

render(<ExampleApp />, document.getElementById("root"))
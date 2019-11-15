import React from "react"
import { render} from "react-dom"

import "./style.less"
import "../../src/style.less"
import "../../src/skin.less"
import ExampleFormWrap from "./components/ExampleFormWrap"
import BasicForm, { basicFormCode } from "./components/BasicForm"
import ValidatedForm, { validatedFormCode } from "./components/ValidatedForm"
import SubgroupForm, { subgroupFormCode } from "./components/SubgroupForm"

function ExampleApp() {
	return (
		<div>
			<h1>hook-form examples</h1>
			<h2>Basic form</h2>
			<ExampleFormWrap
				Form={BasicForm}
				code={basicFormCode}
				/>
			<h2>Validated form</h2>
			<ExampleFormWrap
				Form={ValidatedForm}
				code={validatedFormCode}
				/>
			<h2>Subgrouped form</h2>
			<ExampleFormWrap
				Form={SubgroupForm}
				code={subgroupFormCode}
				/>
		</div>
	)
}

render(<ExampleApp />, document.getElementById("root"))
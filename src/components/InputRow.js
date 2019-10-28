import React from "react"
import PropTypes from "prop-types"

function InputRow({ label, message, required, hint, className, children })
{
	const errored = message && message.type === "error"

	return (
		<div className={"input-row " + (errored ? "input-row-error " : "") + (className || "")}>
			{label !== undefined
				?	<div className="label-cell">
						{label}
						{label && required && <span className="required-mark">*</span>}
					</div>
				:	null
			}
			<div className="input-cell">
				{hint && <div className="input-hint">{hint}</div>}
				<div className="input-cont">
					{children}
				</div>
				<p key={message ? message.text : undefined} className="input-error">
					{message ? message.text : <br />}
				</p>
			</div>
		</div>
	)
}

InputRow.propTypes = {
	label:				PropTypes.string,
	message:			PropTypes.object,
	className:			PropTypes.string,
	required:			PropTypes.bool,
	hint:				PropTypes.node,
	children:			PropTypes.node
}

export default InputRow
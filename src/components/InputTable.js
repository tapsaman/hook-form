import React from "react"
import PropTypes from "prop-types"

function InputTable({ breakpoint, children })
{
	return (
		<div className={"input-table " + breakpoint}>
			{children}
		</div>
	)
}

InputTable.propTypes = {
	breakpoint: 	PropTypes.oneOf(["xs","sm","md","lg","xl"]),
	children:		PropTypes.node
}

InputTable.defaultProps = {
	breakpoint: 	"sm"
}

export default InputTable
import React from "react"
import PropTypes from "prop-types"

function InputTable({ children })
{
	return (
		<div className="input-table">
			{children}
		</div>
	)
}

InputTable.propTypes = {
	children:		PropTypes.node
}

export default InputTable
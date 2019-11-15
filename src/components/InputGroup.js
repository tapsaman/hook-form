import React, { useReducer, useMemo } from "react"
import PropTypes from "prop-types"

import { FormContextProvider, useFormContext } from "../context"
import { inputGroupStateReducer } from "../services/reducers"
import {
	INPUT_INIT,
	INPUT_CHANGE,
	INPUT_DEINIT
} from "../services/actions"

function useInputGroupReducer() {
	const [groupInputs, dispatch] = useReducer(inputGroupStateReducer, {})

	return {
		groupInputs,
		groupInputInit:		(fkey, props) => dispatch({ type: INPUT_INIT, fkey, props }),
		groupInputChange:	(fkey, props) => dispatch({ type: INPUT_CHANGE, fkey, props }),
		groupInputDeinit:	(fkey) => dispatch({ type: INPUT_DEINIT, fkey })
	}
}

function InputGroup({ fkey, children }) {
	const {
		groupInputs,
		groupInputInit,
		groupInputDeinit,
		groupInputChange
	} = useInputGroupReducer()

	const { inputChange, globalkey, ...contextProps } = useFormContext()	
	
	useMemo(() => inputChange(fkey, groupInputs), [groupInputs]) 

	return (
		<FormContextProvider value={{
			...contextProps,
			inputs:			groupInputs,
			inputInit:		groupInputInit,
			inputDeinit:	groupInputDeinit,
			inputChange:	groupInputChange,
			globalkey:		(globalkey ? globalkey + "." : "") + fkey
		}}
			>
			{children}
		</FormContextProvider>
	)
}

InputGroup.propTypes = {
	fkey:		PropTypes.string.isRequired,
	children:	PropTypes.node
}

export default InputGroup
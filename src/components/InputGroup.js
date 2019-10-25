import { useReducer } from "react"

const INPUT_INIT = "INPUT_INIT"
const INPUT_DEINIT = "INPUT_DEINIT"
const INPUT_CHANGE = "INPUT_CHANGE"

function inputGroupStateReducer(action, current = {}) {
	switch (action.type) {

	case INPUT_INIT:
		return {
			...current,
			[action.fkey]:	action.props
		}

	case INPUT_CHANGE:
		return {
			...current,
			[action.fkey]:	{
				...current[action.fkey],
				...action.props
			}
		}
	
	case INPUT_DEINIT:
		return {
			...current,
			[action.fkey]:	undefined
		}

	default:
		return current

	}
}

function useInputGroupReducer() {
	const [inputs, dispatch] = useReducer(inputGroupStateReducer)

	return {
		inputs,
		inputInit:		(fkey, props) => dispatch({ type: INPUT_INIT, fkey, props }),
		inputChange:	(fkey, props) => dispatch({ type: INPUT_CHANGE, fkey, props }),
		inputDeinit:	(fkey) => dispatch({ type: INPUT_DEINIT, fkey })
	}
}

function InputGroup({ fkey }) {
	const {
		inputs,
		inputInit,
		inputDeinit,
		inputChange
	} = useInputGroupReducer()

	return null
}

export default InputGroup
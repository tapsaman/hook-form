import {
	INPUT_INIT,
	INPUT_CHANGE,
	INPUT_DEINIT
} from "./actions"
import { DEV } from "./constants"

function inputGroupStateReducer(current, action) {
	if (DEV) {
		console.log("CURRENT", current)
		console.log("ACTION", action)
	}

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

export {
	inputGroupStateReducer
}
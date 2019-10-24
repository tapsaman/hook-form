
function inputToStoreValue(input) {
	if (!input._isInputProps) {
		return inputGroupToStoreValue(input)
	}
	else if (!input.doNotStore && input.isValid) {
		return input.value
	}
	return undefined
}

function inputGroupToStoreValue(inputs)
{
	if (Array.isArray(inputs)) {

		const ret = []

		for (let i = 0; i < inputs.length; i++) {

			const storeValue = inputToStoreValue(inputs[i])
			
			if (storeValue !== undefined)
				ret[i] = storeValue

		}

		return ret
	}
	else {

		const ret = {}

		for (fkey in inputs) {

			const storeValue = inputToStoreValue(inputs[fkey])
			
			if (storeValue !== undefined)
				ret[fkey] = storeValue
		}

		return ret
	}
}


function StoredForm({ storage, storeKey, storeOnSuccessOnly ...formProps }) {
	function store(inputs) {
		const storeValue = inputGroupToStoreValue(inputs)
		storage.setItem(storeKey, storeValue)
	}

	return (
		<Form
			onChange={storeOnSuccessOnly ? undefined : store}
			onSuccess={storeOnSuccessOnly ? store : undefined}
			{...formProps}
			/>
	)
}

StoredForm.propTypes = {
	storage:			PropTypes.object,
	storeKey:			PropTypes.string,isRequired,
	storeOnSubmitOnly:	PropTypes.bool
}

StoredForm.defaultProps = {
	storage:			localStorage,
	storeOnSubmitOnly:	true
}

import { createContext, useContext } from "react"

const FormContext = createContext(null)
const FormContextProvider = FormContext.Provider

function useFormContext() {
	return useContext(FormContext)
}

export default FormContext
export {
	FormContextProvider,
	useFormContext
}
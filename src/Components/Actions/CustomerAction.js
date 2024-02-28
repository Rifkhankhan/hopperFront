import * as customerApis from './../Apis/CustomerApi'

export const createForm = formData => async dispatch => {
	console.log(formData)
	try {
		// dispatch(uiActions.changeAsLoading())
		await customerApis.createForm(formData)
	} catch (error) {
		console.log(error)
	}
}

import * as customerApis from './../Apis/CustomerApi'
import { CustomerAction } from './../../store/customerSlice'
export const createForm = formData => async dispatch => {
	console.log(formData)
	try {
		// dispatch(uiActions.changeAsLoading())
		const { data } = await customerApis.createForm(formData)
		dispatch(CustomerAction.getNotification(data))
	} catch (error) {
		console.log(error)
	}
}

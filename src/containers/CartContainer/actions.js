import * as constants from './constants'

export const addItem = (item) => ({ type: constants.ADD_ITEM, item })
export const removeItem = (id) => ({ type: constants.REMOVE_ITEM, id })
export const clearAllItems = (id) => ({ type: constants.CLEAR_ALL_ITEMS })

export function removeItemAsync(id) {
	return (dispatch) => {
		fetch('https://yesno.wtf/api')
			.then((data) => {
				if (data.ok) {
					dispatch({
						type: constants.REMOVE_ITEM,
						id,
					})
				}
			})
			.catch((err) => console.log(err))
	}
}


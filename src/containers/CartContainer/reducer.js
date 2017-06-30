import * as constants from './constants'
import removeFromArrayById from './../../utils/removeFromArrayById'

const initialState = {
	items: [],
	title: 'Cart component title'
}

export default function cart(state = initialState, action) {
	switch (action.type) {
	case constants.ADD_ITEM: {
		return Object.assign({}, state, {
			items: state.items.concat(action.item)
		})
	}

	case constants.REMOVE_ITEM: {
		const items = removeFromArrayById(state.items, action.id)

		return Object.assign({}, state, {	items })
	}

	case constants.CLEAR_ALL_ITEMS: {
		return Object.assign({}, state, {
			items: []
		})
	}

	default:
		return state
	}
}

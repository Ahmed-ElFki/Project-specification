import {
	ADD_ONE_ITEM,
	MINUS_ONE_ITEM,
	DELETE_ITEM_FROM_CHART,
	ADD_ITEM_TO_CHART,
} from "../constants/constants";

const reducers = (state = [], action) => {
	switch (action.type) {
		case ADD_ITEM_TO_CHART:
			return [...state, action.payload];
		case ADD_ONE_ITEM:
			return state.map((item) =>
				item.id === action.payload ? { ...item, number: item.number + 1 } : item
			);
		case MINUS_ONE_ITEM:
			return state.map((item) =>
				item.id === action.payload ? { ...item, number: item.number - 1 } : item
			);
		case DELETE_ITEM_FROM_CHART:
			return state.filter((item) => item.id !== action.payload);
		default:
			return state;
	}
};

export default reducers;

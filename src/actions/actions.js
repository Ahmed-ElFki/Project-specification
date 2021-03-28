import {
	ADD_ONE_ITEM,
	MINUS_ONE_ITEM,
	DELETE_ITEM_FROM_CHART,
	ADD_ITEM_TO_CHART,
} from "../constants/constants";

export const addItemToChart = (payload) => {
	return {
		type: ADD_ITEM_TO_CHART,
		payload,
	};
};

export const addOneItem = (itemID) => {
	return {
		type: ADD_ONE_ITEM,
		payload: itemID,
	};
};

export const minusOneItem = (itemID) => {
	return {
		type: MINUS_ONE_ITEM,
		payload: itemID,
	};
};

export const deleteItemFromChart = (itemID) => {
	return {
		type: DELETE_ITEM_FROM_CHART,
		payload: itemID,
	};
};

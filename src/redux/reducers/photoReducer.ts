import { TYPES } from "../actions/actionsTypes";
import { InitialState } from "../types";

const initialState: InitialState = {
  photos: [],
};
const photoReducer = (
  state: InitialState = initialState,
  action: any
): InitialState => {
  switch (action.type) {
    case TYPES.SET_PHOTOS_DATA: {
      return {
        ...state,
        photos: action.payload,
      };
    }
    default:
      return state;
  }
};
export default photoReducer;

import { TYPES } from "../actions/actionsTypes";
import { InitialState } from "../types";

const initialState: InitialState = {
  images: [],
  displayImages: [],
  totalNumberPages: 10,
  currentPage: 1,
};
const imagesReducer = (
  state: InitialState = initialState,
  action: any
): InitialState => {
  switch (action.type) {
    case TYPES.SET_IMAGES_DATA: {
      const totalNumberPages = Math.ceil(action.payload.length / 10);
      return {
        ...state,
        images: action.payload,
        totalNumberPages,
      };
    }
    case TYPES.SET_DISPLAY_IMAGES: {
      return {
        ...state,
        displayImages: action.payload,
      };
    }
    case TYPES.SET_CURRENT_PAGE: {
      const indexTo = action.payload * 10;
      const indexFrom = indexTo - 10;
      return {
        ...state,
        currentPage: action.payload,
        displayImages: state.images.slice(indexFrom, indexTo),
      };
    }
    default:
      return state;
  }
};
export default imagesReducer;

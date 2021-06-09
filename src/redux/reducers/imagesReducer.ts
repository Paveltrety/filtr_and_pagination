import { TYPES } from "../actions/actionsTypes";
import { InitialState } from "../types";

const initialState: InitialState = {
  images: [],
  displayImages: [],
  totalNumberPages: 10,
  currentPage: 1,
  currentFilter: null,
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
        displayImages: action.payload.slice(0, 10),
        totalNumberPages,
        currentPage: 1,
        currentFilter: null,
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
    case TYPES.SET_CURRENT_FILTER: {
      return {
        ...state,
        currentFilter: action.payload,
      };
    }
    default:
      return state;
  }
};
export default imagesReducer;

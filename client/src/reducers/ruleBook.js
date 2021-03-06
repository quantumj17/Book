import { LOAD_CHAPTERS, REMOVE_CHAPTER } from "../actions/types";

const initialState = {
  chapters: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_CHAPTERS:
      return {
        ...state,
        chapters: payload,
      };
    case REMOVE_CHAPTER:
      return {
        ...state,
        chapters: state.chapters.filter((chapter) => chapter._id !== payload),
      };
    default:
      return state;
  }
};

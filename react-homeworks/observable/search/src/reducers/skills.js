import {
  CHANGE_SEARCH_FIELD,
  SEARCH_SKILLS_REQUEST,
  SEARCH_SKILLS_FAILURE,
  SEARCH_SKILLS_SUCCESS,
} from '../actions/actionTypes';

const initialState = { items: [], loading: false, error: null, search: '' };
export default function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SKILLS_REQUEST:
      return { ...state, items: [], loading: true, error: null, };
    case SEARCH_SKILLS_FAILURE:
      const {error} = action.payload;
      return { ...state, items: [], loading: false, error, };
    case SEARCH_SKILLS_SUCCESS:
      const {items} = state.search.trim() === '' ? state : action.payload;
      return { ...state, items, loading: false, error: null, };
    case CHANGE_SEARCH_FIELD:
      const {search} = action.payload;
      let changeSearchItems = search.trim() === '' ? [] : state.items;
      return { ...state, items: changeSearchItems, search };
    default:
      return state;
  }
}

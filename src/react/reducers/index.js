// src/react/constants/reducers.js
import { ADD_USERS } from "../constants/";
const initialState = {
  users: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS:
    return { ...state, users: [...state.users, action.payload] };
  default:
    return state;
}
};
export default rootReducer;

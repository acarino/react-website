// src/react/actions/index.js
import { ADD_USERS } from "../constants";

export const addUsers = users => ({ type: ADD_USERS, payload: users });

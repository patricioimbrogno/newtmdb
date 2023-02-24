import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSwitch = createAction("SET_SWITCH");
export const setStatus = createAction ('SET_STATUS')

const initialState = {switch: 'movies', status: 'popular'}

export default createReducer(initialState, {
  [setSwitch]: (state, action) => {return {...state, switch: action.payload.switch}},
  [setStatus]: (state, action) => {return {...state, status: action.payload.status}}
});
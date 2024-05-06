// actions.js
export const SET_DECKID = 'SET_DECKID';
export const SET_DECKNAME = 'SET_DECKNAME';

export const setDeckID = (value) => ({
  type: SET_DECKID,
  payload: value
});

export const setDeckName= (value) => ({
  type: SET_DECKNAME,
  payload: value
})

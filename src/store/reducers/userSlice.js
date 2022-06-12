import {createSlice} from '@reduxjs/toolkit';
import {Api} from '../../core';

export const getUserRequest = status => async (dispatch, getState) => {
  const {filter} = getState().user;
  // const filter = 'alanlucascruz';
  // const filter = 'thiagocostabarbosa';

  try {
    dispatch(setStatus(status));

    const routeUser = `/users/${filter}`;
    const responseUser = await Api.get(routeUser);

    const routeRepos = `/users/${filter}/repos`;
    const responseRepos = await Api.get(routeRepos);

    dispatch(getUserSuccess(responseUser.data));
    dispatch(getReposSuccess(responseRepos.data));

    dispatch(setStatus('succeeded'));
  } catch (error) {
    dispatch(getUserSuccess(null));
    dispatch(getReposSuccess([]));
    dispatch(setStatus('failed'));
  }
};

export const user = createSlice({
  name: 'user',
  initialState: {
    dataUser: null,
    dataRepos: [],
    status: 'idle', // idle, loading, succeeded, failed
    filter: '',
  },
  reducers: {
    getUserSuccess: (state, action) => {
      state.dataUser = action.payload;
    },
    getReposSuccess: (state, action) => {
      state.dataRepos = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {getUserSuccess, getReposSuccess, setStatus, setFilter} =
  user.actions;

export default user.reducer;

export const GET_USERS = 'USER/GET_ALL';

const getUsers = payload => ({
  type: GET_USERS,
  payload: payload.response
});

export const fetchAllUsers = () => {
  return (dispatch, state, api) => {
    return api('users')
      .then(response => dispatch(getUsers({ response })))
      .catch((err) => {
        console.log('req user error!!!', err);
      });
  };
};

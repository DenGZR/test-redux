import { GET_USERS } from './UsersActions';

const initialState = {
  data: [],
};

const UsersReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case GET_USERS: {
      console.log({
          ...state,
          data: action.payload,
        });
      return {
          ...state,
          data: action.payload,
        }
      }

    default: {
      return state;
    }
  }
};

// export const getRelatedCallsHistory = (state) => {
//   const selectedId = getSelectedContactId(state);
//   const isNotEmpty = state.calls.data[selectedId];
//   const calls = isNotEmpty && Object.keys(state.calls.data[selectedId])
//       .map(key => state.calls.data[selectedId][key]);
//
//   return (calls && calls.map((call) => {
//     const caller = getContactById(state, call.caller.id) || call.caller;
//     const recipient = getContactById(state, call.recipient.id) || call.recipient;
//
//     return {
//       id: call.id,
//       started: call.started,
//       finished: call.finished,
//       recipient: {
//         name: recipient.name,
//         phone: recipient.phone,
//       },
//       caller: {
//         name: caller.name,
//         phone: caller.phone,
//       },
//     };
//   })) || [];
// };

export default UsersReducer;

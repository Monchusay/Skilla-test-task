let initialState = {
  allCalls: [],
  calls: [],
};

const CallsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CALLS": {
      return { ...state, calls: [...action.calls], allCalls: [...action.calls] };
    }
    case "FILTER_BY_TYPE": {
      if (action.value === "AllCallTypes") {
        return {...state, calls: state.allCalls}
      }
      let mapping = {
        Incoming: {
          in_out: 1,
          status: "Дозвонился",
        },
        Outgoing: {
          in_out: 0,
          status: "Дозвонился",
        },
        MissedOutgoing: {
          in_out: 0,
          status: "Не дозвонился",
        },
        MissedIncoming: {
          in_out: 1,
          status: "Не дозвонился",
        },
      };
      let filteredCalls = state.allCalls.filter(
          ((call) => call.in_out === mapping[action.value].in_out && call.status === mapping[action.value].status)
      )
      return {...state, calls:filteredCalls}
    }
  }
  return state;
};

export const setCallsActionCreator = (calls) => {
  return {
    type: "SET_CALLS",
    calls: calls,
  }
}
export const filterByTypeActionCreator = (value) => {
  return {
    type: "FILTER_BY_TYPE",
    value: value,
  }
}

export default CallsPageReducer;

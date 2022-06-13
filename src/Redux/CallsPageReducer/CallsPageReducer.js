let initialState = {
  allCalls: [],
  calls: [],
  filteredByType: null,
  filteredBySource: null,
  filteredByGrade: null,
};

const CallsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CALLS": {
      return {
        ...state,
        calls: [...action.calls],
        allCalls: [...action.calls],
      };
    }
    case "FILTER_BY_TYPE": {
      if (action.value === "AllCallTypes") {
        return { ...state, calls: state.allCalls, filteredByType: null };
      }
      let mappingType = {
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
      let filteredTypeCalls = state.allCalls.filter(
        (call) =>
          call.in_out === mappingType[action.value].in_out &&
          call.status === mappingType[action.value].status
      );
      return {
        ...state,
        calls: filteredTypeCalls,
        filteredByType: action.value,
      };
    }
    case "FILTER_BY_SOURCE": {
      if (action.value === "AllSources") {
        return { ...state, calls: state.allCalls, filteredBySource: null };
      }
      let mappingSource = {
        Rabota: {
          source: "Rabota",
        },
        SPB: {
          source: "SPB",
        },
        Google: {
          source: "Google",
        },
        Yandex: {
          source: "Yandex",
        },
        OtherSource: {
          source: "OtherSource",
        },
      };
      let filteredSourceCalls = state.allCalls.filter(
        (call) => call.source === mappingSource[action.value].source
      );
      return {
        ...state,
        calls: filteredSourceCalls,
        filteredBySource: action.value,
      };
    }
    case "FILTER_BY_GRADE": {
      if (action.value === "AllGrades") {
        return { ...state, calls: state.allCalls, filteredByGrade: null };
      }
      let mappingGrade = {
        GradeGood: {
          length: 1,
        },
        GradePerfect: {
          length: 0,
        },
      };
      let filteredGradeCalls = state.allCalls.filter(
        (call) => call.errors.length === mappingGrade[action.value].length
      );
      return {
        ...state,
        calls: filteredGradeCalls,
        filteredByGrade: action.value,
      };
    }
  }
  return state;
};

export const setCallsActionCreator = (calls) => {
  return {
    type: "SET_CALLS",
    calls: calls,
  };
};
export const filterByTypeActionCreator = (value) => {
  return {
    type: "FILTER_BY_TYPE",
    value: value,
  };
};
export const filterBySourceActionCreator = (value) => {
  return {
    type: "FILTER_BY_SOURCE",
    value: value,
  };
};
export const filterByGradeActionCreator = (value) => {
  return {
    type: "FILTER_BY_GRADE",
    value: value,
  };
};

export default CallsPageReducer;

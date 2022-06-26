import { createSlice } from "@reduxjs/toolkit";

const CallsPageSlicer = createSlice({
  name: "CallsPage",
  initialState: {
    allCalls: [],
    calls: [],
    filteredByType: null,
    filteredBySource: null,
    filteredByGrade: null,
  },
  reducers: {
    setCallsToolkitActionCreator(state, action) {
      return {
        ...state,
        calls: [...action.payload],
        allCalls: [...action.payload],
      };
    },
    filterByTypeToolkitActionCreator(state, action) {
      if (action.payload === "AllCallTypes") {
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
          call.in_out === mappingType[action.payload].in_out &&
          call.status === mappingType[action.payload].status
      );
      return {
        ...state,
        calls: filteredTypeCalls,
        filteredByType: action.payload,
      };
    },
    filterBySourceToolkitActionCreator(state, action) {
      if (action.payload === "AllSources") {
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
        (call) => call.source === mappingSource[action.payload].source
      );
      return {
        ...state,
        calls: filteredSourceCalls,
        filteredBySource: action.payload,
      };
    },
    filterByGradeToolkitActionCreator(state, action) {
      if (action.payload === "AllGrades") {
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
        (call) => call.errors.length === mappingGrade[action.payload].length
      );
      return {
        ...state,
        calls: filteredGradeCalls,
        filteredByGrade: action.payload,
      };
    },
  },
});

export default CallsPageSlicer.reducer;
export const {
  setCallsToolkitActionCreator,
  filterByTypeToolkitActionCreator,
  filterBySourceToolkitActionCreator,
  filterByGradeToolkitActionCreator,
} = CallsPageSlicer.actions;

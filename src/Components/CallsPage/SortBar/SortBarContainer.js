import { connect } from "react-redux";
import SortBar from "./SortBar";
import {
  filterByGradeToolkitActionCreator,
  filterBySourceToolkitActionCreator,
  filterByTypeToolkitActionCreator,
  setCallsToolkitActionCreator
} from "../../../Redux/CallsPageReducer/CallsPageSlicer";

let mapStateToProps = (state) => {
  return {
    calls: state.CallsPage.calls,
    filteredByType: state.CallsPage.filteredByType,
    filteredBySource: state.CallsPage.filteredBySource,
    filteredByGrade: state.CallsPage.filteredByGrade,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setCalls: (calls) => {
      dispatch(setCallsToolkitActionCreator(calls));
    },
    filterCallsByType: (value) => {
      dispatch(filterByTypeToolkitActionCreator(value));
    },
    filterCallsBySource: (value) => {
      dispatch(filterBySourceToolkitActionCreator(value));
    },
    filterCallsByGrade: (value) => {
      dispatch(filterByGradeToolkitActionCreator(value));
    },
  };
};

const SortBarContainer = connect(mapStateToProps, mapDispatchToProps)(SortBar);

export default SortBarContainer;

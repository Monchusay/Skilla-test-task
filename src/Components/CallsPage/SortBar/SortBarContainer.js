import {connect} from "react-redux";
import {
    filterByGradeActionCreator,
    filterBySourceActionCreator,
    filterByTypeActionCreator,
    setCallsActionCreator
} from "../../../Redux/CallsPageReducer/CallsPageReducer";
import SortBar from "./SortBar";

let mapStateToProps = (state) => {
    return {
        calls: state.CallsPage.calls,
        filteredByType: state.CallsPage.filteredByType,
        filteredBySource: state.CallsPage.filteredBySource,
        filteredByGrade: state.CallsPage.filteredByGrade
    };
};

let mapDispatchToProps = (dispatch)=> {
    return {
        setCalls: (calls) => {
            dispatch(setCallsActionCreator(calls))
        },
        filterCallsByType: (value) => {
            dispatch(filterByTypeActionCreator(value))
        },
        filterCallsBySource: (value) => {
            dispatch(filterBySourceActionCreator(value))
        },
        filterCallsByGrade: (value) => {
            dispatch(filterByGradeActionCreator(value))
        }
    };
}

const SortBarContainer = connect(mapStateToProps, mapDispatchToProps)(SortBar)

export default SortBarContainer
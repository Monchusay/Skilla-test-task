import {connect} from "react-redux";
import {filterByTypeActionCreator, setCallsActionCreator} from "../../../Redux/CallsPageReducer/CallsPageReducer";
import SortBar from "./SortBar";

let mapStateToProps = (state) => {
    return {
        calls: state.CallsPage.calls
    };
};

let mapDispatchToProps = (dispatch)=> {
    return {
        setCalls: (calls) => {
            dispatch(setCallsActionCreator(calls))
        },
        filterCallsByType: (value) => {
            dispatch(filterByTypeActionCreator(value))
        }
    };
}

const SortBarContainer = connect(mapStateToProps, mapDispatchToProps)(SortBar)

export default SortBarContainer
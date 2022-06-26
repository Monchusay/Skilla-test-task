import {connect} from "react-redux";
import {setCallsToolkitActionCreator} from "../../../Redux/CallsPageReducer/CallsPageSlicer";
import CallsListAPIContainer from "./CallsListAPIContainer";

let mapStateToProps = (state) => {
    return {
        calls: state.CallsPage.calls
    };
};

let mapDispatchToProps = (dispatch)=> {
    return {
        setCalls: (calls) => {
            dispatch(setCallsToolkitActionCreator(calls))
        }
    };
}

const CallsListContainer = connect(mapStateToProps, mapDispatchToProps)(CallsListAPIContainer)

export default CallsListContainer
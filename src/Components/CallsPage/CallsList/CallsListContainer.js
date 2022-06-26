import {connect} from "react-redux";
import CallsList from "./CallsList";
import {setCallsToolkitActionCreator} from "../../../Redux/CallsPageReducer/CallsPageSlicer";

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

const CallsListContainer = connect(mapStateToProps, mapDispatchToProps)(CallsList)

export default CallsListContainer
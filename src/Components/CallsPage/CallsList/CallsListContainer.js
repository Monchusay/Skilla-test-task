import {connect} from "react-redux";
import CallsList from "./CallsList";
import {setCallsActionCreator} from "../../../Redux/CallsPageReducer/CallsPageReducer";

let mapStateToProps = (state) => {
    return {
        calls: state.CallsPage.calls
    };
};

let mapDispatchToProps = (dispatch)=> {
    return {
        setCalls: (calls) => {
            dispatch(setCallsActionCreator(calls))
        }
    };
}

const CallsListContainer = connect(mapStateToProps, mapDispatchToProps)(CallsList)

export default CallsListContainer
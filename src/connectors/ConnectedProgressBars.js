import {connect} from "react-redux";
import ProgressBars from "../presenters/ProgressBars";
import {fetchProgressBars, modifyProgressBars} from "../modules/progressBars";

function mapStateToProps(state){
    return {
        progressBars: state.progressBars
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProgressBars: () => dispatch(fetchProgressBars()),
        modifyBar: (bar, value) => dispatch(modifyProgressBars(bar, value))
    };
}

const ConnectedProgressBars = connect(mapStateToProps, mapDispatchToProps)(ProgressBars);

export default ConnectedProgressBars;

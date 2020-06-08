import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

import { increment, decrement } from "../actions";

class App extends Component {
  render() {
    const props = this.props;
    // console.log(this.state.count);
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ value: state.count.value });
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});
// const mapDispatchToProps = { increment, decrement };
export default connect(mapStateToProps, mapDispatchToProps)(App);

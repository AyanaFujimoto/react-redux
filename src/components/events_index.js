import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import _ from "lodash";

import { readEvents } from "../actions";

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, (event) => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{(event, body)}</td>
      </tr>
    ));
  }

  render() {
    // console.log(this.state.count);
    return (
      <React.Fragment>
        <table>
          <thread>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thread>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ events: state.events });
const mapDispatchToProps = { readEvents };
// const mapDispatchToProps = { increment, decrement };
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);

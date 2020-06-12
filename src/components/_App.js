import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { countdata } from "./dummy";
import { increment, decrement } from "../actions";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

class App extends Component {
  render() {
    // const props = this.props;
    // console.log(this.state.count);
    return (
      <React.Fragment>
        <BarChart
          width={500}
          height={300}
          data={countdata}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="capture_time" />
          {/* <XAxis dataKey="identifier" /> */}
          <YAxis />
          <Tooltip />

          <Legend />
          <Bar dataKey="in_count" fill="#8884d8" barSize={5} />
          <Bar dataKey="out_count" fill="#82ca9d" barSize={5} />
        </BarChart>
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

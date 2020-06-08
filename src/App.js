import React from "react";

// function App() {
//   // const greeting = "Hi, Dom!";
//   // const dom = <h1 className="foo">{greeting}</h1>;
//   // return <h1>Hello World!</h1>;
//   // return dom;
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input
//         type="text"
//         // onClick={() => {
//         onChange={() => {
//           console.log("I am clicked!");
//         }}
//       />
//     </React.Fragment>
//   );
// }

// function App() {
//   return React.createElement("div", null, "Hello World!!");
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>Meow!</div>;
};

export default App;

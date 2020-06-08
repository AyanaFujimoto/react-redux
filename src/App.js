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
  const profiles = [
    { name: "Aya", age: 25 },
    { name: "Cookie", age: 5 },
    { name: "NoName" },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      Hi. Iam {props.name}, and {props.age} years old.
    </div>
  );
};

User.defaultProps = {
  age: 1,
};

export default App;

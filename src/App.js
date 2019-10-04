import React from "react";

// Component2
function Movie({ name }) {
  return <h4>EMOJI :: {name} </h4>;
}

// Component1
function App() {
  return (
    <div>
      <h2>Hello</h2>
      <Movie name="😍" />
    </div>
  );
}

export default App;

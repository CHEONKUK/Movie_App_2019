import React from "react";

// Component2
function Movie({ name, img }) {
  return (
    <div>
      <h2>
        EMOJI : {name} --> {img}
      </h2>
    </div>
  );
}

const emojiLove = [
  {
    name: "love",
    image: "😍"
  },
  {
    name: "sad",
    image: "🥶"
  },
  {
    name: "angry",
    image: "😈"
  },
  {
    name: "wow",
    image: "😻"
  }
];

// Component1
function App() {
  return (
    <div>
      <h2>App function</h2>
      {/* item은 Object (item의 이름은 dish, lol..등 다른 이름으로도 변경 가능) */}
      {emojiLove.map(item => (
        <Movie name={item.name} img={item.image} />
      ))}
    </div>
  );
}

export default App;

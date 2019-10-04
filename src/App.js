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
    id: 1,
    name: "love",
    image: "😍"
  },
  {
    id: 2,
    name: "sad",
    image: "🥶"
  },
  {
    id: 3,
    name: "angry",
    image: "😈"
  },
  {
    id: 4,
    name: "wow",
    image: "😻"
  }
];

function renderEmoji(item) {
  return <Movie key={item.id} name={item.name} img={item.image} />;
}

// Component1
function App() {
  return (
    <div>
      <h2>App function</h2>
      {/* item은 Object (item의 이름은 dish, lol..등 다른 이름으로도 변경 가능) */}
      {emojiLove.map(renderEmoji)}
    </div>
  );
}

export default App;

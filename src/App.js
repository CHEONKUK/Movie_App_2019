import React from "react";
import PropTypes from "prop-types";

const emojiLove = [
  {
    id: 1,
    name: "love",
    img: "😍"
  },
  {
    id: 2,
    name: "sad",
    img: "🥶"
  },
  {
    id: 3,
    name: "angry",
    img: "😈"
  },
  {
    id: 4,
    name: "wow",
    img: "😻"
  }
];

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

function renderEmoji(item) {
  return <Movie key={item.id} name={item.name} img={item.img} />;
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

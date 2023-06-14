import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "❤️": "love",
  "✨": "Sparkles",
  "🔥": "Fire",
  "🥰": "Smiling Face with Hearts",
  "😂": "face with tears of joy",
  "😀": "grinning face",
  "🐵": "monkey face",
  "😋": "face savoring food",
  "🙃": "upside down",
  "😐": "neutral face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Detector</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="enter
      the emoji to detect your emoji meaning !!"
      ></input>
      <div>
        <h2>{meaning} </h2>
      </div>

      <div>
        <h3> emoji we know </h3>
      </div>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "3rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}

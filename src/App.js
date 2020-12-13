import React, { useState } from "react";
import "./styles.css";
var Emoji = {
  "😊": "Happily blushing",
  "😳": "OMGG!!",
  "❤️": "I love you",
  "😂": "That's too funny",
  "😍": "Woahh i love it"
};
var emojiList = Object.keys(Emoji);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiMeaning(input) {
    var input = input.target.value;
    var newmeaning = Emoji[input];
    if (newmeaning === undefined) {
      newmeaning = "I have not defined this one!";
    }
    setMeaning(newmeaning);
  }

  function EmojiClick(emoji) {
    var newmeaning = Emoji[emoji];
    setMeaning(newmeaning);
  }
  return (
    <div className="App">
      <h1 style={{ fontSize: "xx-large" }}>Emoji Interpreter </h1>
      <input onChange={emojiMeaning}></input>
      <p>{meaning}</p>
      <h3>Emojis we know </h3>
      {emojiList.map((emoji) => {
        return (
          <span
            onClick={() => EmojiClick(emoji)}
            style={{
              fontSize: "1.4rem",
              padding: "0.5rem",
              fontSize: "xx-large",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

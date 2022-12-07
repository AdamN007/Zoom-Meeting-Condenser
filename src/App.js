import './App.css';
import generateResponse from './ChatGPT';
import React, { useState } from "react";

function TextForm() {
  // Create a state variable to store the text entered by the user
  const [text, setText] = useState("");

  const [response, setResponse] = useState("");

  function handleChange(event) {
    // Update the state variable with the value of the text input field
    setText(event.target.value);
  }

  function handleSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();


    generateResponse(text)
      .then((res) => {
        console.log(res.data);
          setResponse(res.data.choices[0].text);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter some text:</label><br />
      <input type="text" value={text} onChange={handleChange} /><br />
      <button type="submit">Submit</button>
      {response && <p>{response}</p>}
    </form>
  );
}

export default TextForm;

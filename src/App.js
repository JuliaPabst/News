import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import Overview from "./Overview";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("&category=general");
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const changeSelectedTopic = (topic) => {
    setSelectedTopic(topic);
    setSelectedQuestion("");
  };

  const changeSelectedQuestion = (question) => {
    setSelectedQuestion(question);
  };

  return (
    <div className="App">
      <header>
        <Header
          onSelectedTopicChange={changeSelectedTopic}
          onSelectedQuestionChange={changeSelectedQuestion}
        />
      </header>
      <Overview
        selectedTopic={selectedTopic}
        selectedQuestion={selectedQuestion}
      />
    </div>
  );
}

export default App;

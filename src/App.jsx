import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js"
import Header from "./components/header/Header.jsx"
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  useState()
  
  function handleClick(selectedButton) {
    console.log("hello world")
}
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick("component")}>Components</TabButton>
            <TabButton onClick={() => handleClick("JSX")}>JSX</TabButton>
            <TabButton onClick={() => handleClick("props")}>Props</TabButton>
            <TabButton onClick={() => handleClick("states")}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;

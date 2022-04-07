import React from "react";
import "./App.css";
import Birthday from "./Birthday";
import FadeIn from 'react-fade-in';
import { useEffect } from "react";
import useSound from "use-sound";
function App() {
  const [play] = useSound("./mus2.mp3");
  useEffect(() => {
    play();
  });
  return (
    <div className="App">
      <FadeIn delay="500"><Birthday /></FadeIn>
    </div>
  );
}

export default App;

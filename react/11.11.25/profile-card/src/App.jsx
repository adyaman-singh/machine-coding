import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileIcon from "./components/ProfileIcon";
import dp from "./assets/react.svg";
import Counters from "./components/Counters";
import ColorPickerBox from "./components/ColorPickerBox";
import TodoList from "./components/TodoList";

function App() {
  return (
    // <Counters />
    // <ColorPickerBox />
    // <div className="flex items-center justify-center h-screen bg-gray-100">
    //   <ProfileIcon name="John Doe" bio="Web Developer" profilePic={dp} />
    // </div>
    <TodoList />
  );
}

export default App;

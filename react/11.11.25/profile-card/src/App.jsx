import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileIcon from "./components/ProfileIcon";
import dp from "./assets/react.svg";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <ProfileIcon name="John Doe" bio="Web Developer" profilePic={dp} />
    </div>
  );
}

export default App;

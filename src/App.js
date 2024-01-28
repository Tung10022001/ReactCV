import "./App.css";
import Main from "./Main";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="flex flex-col app-wrapper bg-white dark:bg-black w-full h-full">
      <Navbar></Navbar>
      <Main></Main>
    </div>
  );
}

export default App;

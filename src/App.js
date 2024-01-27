import "./App.css";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="flex flex-col app-wrapper bg-white dark:bg-black w-full h-full">
      <Navbar></Navbar>
      <div
        className="grow bg-cover mt-16 bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg)",
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center backdrop-blur-sm">
          <div>
            <h1 className="text-4xl lg:text-6xl">
              Hello there. Welcome to my CV. I am an engineer developer
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

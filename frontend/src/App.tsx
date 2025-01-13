import "./App.css";
import { Canvas } from "./components/Canvas";
import { Chat } from "./components/Chat";
import { User } from "./components/User";

function App() {
  return (
    <div>
      <div className="h-screen min-h-fit bg-blue-500    min-w-fit">
        <div className="text-4xl  p-5  font-cream flex select-none">
          <div className="text-white">Sketch</div>

          <div className="text-cyan-300">Zone</div>
        </div>
        <div>
          <div className="grid grid-cols-12 m-5 gap-10  ">
            <div className="col-span-2">
              <User />
            </div>
            <div className="col-span-7">
              <Canvas />
            </div>
            <div className="col-span-3">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

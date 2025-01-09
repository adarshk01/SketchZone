import "./App.css";
import { Canvas } from "./components/Canvas";
import { Chat } from "./components/Chat";
import { User } from "./components/User";

function App() {
  return (
    <div>
      <div className="h-screen min-h-fit bg-neutral-900   ">
        <div className="text-3xl text-white p-5  font-january">Sketch-Zone</div>
        <div>
          <div className="grid grid-cols-12 m-8 gap-10">
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

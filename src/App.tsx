import "./App.css";
import { img } from "./constants/img";

function App() {
  return (
    <div className="h-screen w-full bg-red-200 flex items-center justify-center overflow-hidden">
      <div className="grid grid-cols-3 gap-2 p-2 md:p-4">
        {img.map((item, index) => (
          <div key={index} className="w-full h-full">
            <img
              className="w-full h-full object-cover max-w-[100px] max-h-[100px] sm:max-w-[150px] sm:max-h-[150px] md:max-w-full md:max-h-full"
              src={item.imageUrl}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

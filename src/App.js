import "./App.css";
import GlobalStateContext from "./Contents/CartContext";
import Rutas from "./routes/Rutas";

function App() {
  return (
    <div>
      <GlobalStateContext>
        <Rutas />
      </GlobalStateContext>
    </div>
  );
}

export default App;

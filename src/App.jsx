import { BrowserRouter } from "react-router-dom";
import "./common.scss";
import AllRoutes from "./config/AllRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;

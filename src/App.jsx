import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "./common.scss";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <AllRoutes />
          </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;

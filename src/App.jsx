import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import renderRoutes from "./config/routes";
import "./common.scss";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            {renderRoutes.map(([key, route]) => (
              <Route
                key={key}
                path={route.path}
                Component={route.component}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;

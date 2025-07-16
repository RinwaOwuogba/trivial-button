import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./lib/button";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Button text="Demo Button" onClick={() => alert("Clicked!")} />
  </React.StrictMode>
);

import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./js/router";

export default function App() {
  return <div>{useRoutes(routes)}</div>;
}

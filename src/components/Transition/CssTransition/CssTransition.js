import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.css";
export default function CssTransition() {
  const [state, setState] = useState(false);
  return (
    <div>
      <button onClick={() => setState((state) => !state)}>
        {state ? "Goodbye, world!" : "Hello, world!"}
      </button>
      <CSSTransition in={state} timeout={1000} appear classNames="fade">
        <h1>点我啊</h1>
      </CSSTransition>
    </div>
  );
}

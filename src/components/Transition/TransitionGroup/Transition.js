import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./index.css";
export default function Transition() {
  const list = [
    {
      key: 1,
      label: "这是1",
    },
    {
      key: 2,
      label: "这是2",
    },
  ];
  const [show, setShow] = useState(true);
  const handleClick = (val) => {
    console.log("val", val);
  };
  return (
    <div>
      <TransitionGroup>
        {list.map(({ key, label }) => {
          return (
            <CSSTransition
              in={show}
              timeout={1000}
              classNames="fade"
              unmountOnExit
              onEntered={(el) => {
                el.style.color = "blue";
              }}
              appear={true}
              key={key}
            >
              <div>
                <h3>{label}</h3>
                <button onClick={() => handleClick(key)}>哈哈哈哈</button>
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
}

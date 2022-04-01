import React, { useContext, useState } from "react";
import { CheckboxGroupContext } from "./CheckboxGroup";

import style from "./index.module.scss";
export default function Checkbox(props) {
  // 参数
  const { children, label } = props;

  const { defaultChecked, checkedChange, isGroup } =
    useContext(CheckboxGroupContext) || {};

  const defalueCheckVal =
    props.checked ||
    (defaultChecked && defaultChecked.includes(label)) ||
    false;
  const [checked, setChecked] = useState(defalueCheckVal);

  // 方法
  const handleChange = (e) => {
    setChecked(e.target.checked);
    if (!isGroup) {
      props.onChange && props.onChange(e.target.checked);
    } else {
      checkedChange(e.target);
    }
  };

  return (
    <label className={style["checkbox-content"]}>
      <span className={style["checkbox-box"]}></span>
      <input
        value={label}
        type="checkbox"
        checked={checked}
        onChange={(e) => handleChange(e)}
        className={style.input}
      ></input>
      {children ? children : label}
    </label>
  );
}

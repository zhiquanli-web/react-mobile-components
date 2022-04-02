import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import style from "./index.module.scss";
import { RadioGroupContext } from "./RadioGroup";

export default function Radio(props) {
  // 参数
  const { children, label, name } = props;
  const [value, setValue] = useState(props.value);
  const { isGroup } = useContext(RadioGroupContext) || {};

  // 方法
  const handleChange = (e) => {
    setValue(e.target.value);
    if (!isGroup) {
      if (props.onChange) {
        props.onChange && props.onChange(e.target.value);
      }
    } else {
      
    }
  };
  return (
    <label className={classNames(style["radio-content"])}>
      <span className={style.prev}></span>
      <input
        type="radio"
        name={name || "radio"}
        className={style.input}
        value={label}
        checked={value === label}
        onChange={(e) => handleChange(e)}
      />
      <span className={style.title}>{children ? children : label}</span>
    </label>
  );
}

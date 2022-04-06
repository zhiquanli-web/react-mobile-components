import classNames from "classnames";
import React, { useContext, useState } from "react";
import style from "./index.module.scss";
import { RadioGroupContext } from "./RadioGroup";

export default function Radio(props) {
  // 参数
  const { children, label } = props;
  const { isGroup, name, changeValue, defaultValue } =
    useContext(RadioGroupContext) || {};
  const [value, setValue] = useState(isGroup ? defaultValue : props.value);
  // 方法
  const handleChange = (e) => {
    setValue(e.target.value);
    if (!isGroup) {
      props.onChange && props.onChange(e.target.value);
    } else {
      changeValue(e.target.value);
    }
  };
  return (
    <label
      className={classNames(
        style["radio-content"],
        (isGroup ? label === defaultValue : label === value) &&
          style["radio-content-active"]
      )}
    >
      <span className={style.prev}></span>
      <input
        type="radio"
        name={(isGroup ? name : props.name) || "RCRadio"}
        className={style.input}
        value={label}
        defaultChecked={value === label}
        onChange={(e) => handleChange(e)}
      />
      <span className={style.title}>{children ? children : label}</span>
    </label>
  );
}

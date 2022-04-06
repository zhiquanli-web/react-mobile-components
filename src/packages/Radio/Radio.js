import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import style from "./index.module.scss";
import { RadioGroupContext } from "./RadioGroup";

export default function Radio(props) {
  // 参数
  const { children, label } = props;
  const { isGroup, name, changeValue, defaultValue } =
    useContext(RadioGroupContext) || {};
  const activeValue = isGroup ? defaultValue : props.value;
  const [value, setValue] = useState(activeValue);
  // 方法
  const handleChange = (e) => {
    setValue(e.target.value);
    if (!isGroup) {
      if (props.onChange) {
        props.onChange && props.onChange(e.target.value);
      }
    } else {
      changeValue(e.target.value);
    }
  };

  useEffect(() => {
    console.log(value, "------", activeValue);
  }, [value, activeValue]);
  return (
    <label
      className={classNames(
        style["radio-content"],
        activeValue && label === activeValue && style["radio-content-active"]
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

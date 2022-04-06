import React, { useState } from "react";
import { isArray, isFunction } from "../../js/utils";
import Radio from "./Radio";
import style from './index.module.scss'
const RadioGroupContext = React.createContext();
export default function RadioGroup(props) {
  const { defaultValue, name, onChange, options = [], children } = props;
  const [activeValue, setActiveValue] = useState(defaultValue)
  // 参数类型校验
  if (!isFunction(onChange)) {
    throw new Error("onChange 必须是 funciton 类型");
  }
  if (!isArray(options)) {
    throw new Error("options 必须是 array 类型");
  }

  const changeValue = (val) => {
    setActiveValue(val)
    onChange(val);
  };
  return (
    <RadioGroupContext.Provider
      value={{
        isGroup: true,
        changeValue,
        defaultValue: activeValue,
        name: name || "groupRadio",
      }}
    >
      <div className={style['checkbox-group']}>
        {options && options.length > 0
          ? options.map(({ label, value }) => {
              return (
                <Radio label={value} key={value.toString()}>
                  {label}
                </Radio>
              );
            })
          : children}
      </div>
    </RadioGroupContext.Provider>
  );
}

export { RadioGroupContext };

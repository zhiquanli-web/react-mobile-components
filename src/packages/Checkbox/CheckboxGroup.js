import React from "react";
import { isArray, isFunction } from "../../js/utils";
import Checkbox from "./Checkbox";
const CheckboxGroupContext = React.createContext();

export default function CheckboxGroup(props) {
  const { children, options = [], defaultChecked = [], onChange } = props;
  // 参数类型校验
  if (!isFunction(onChange)) {
    throw new Error("onChange 必须是 funciton 类型");
  }
  if (!isArray(defaultChecked)) {
    throw new Error("defaultChecked 必须是 array 类型");
  }
  if (!isArray(options)) {
    throw new Error("options 必须是 array 类型");
  }

  // 参数定义
  let defaultCheck = [...defaultChecked];

  // 方法
  const checkedChange = ({ value, checked }) => {
    let arr = [];
    if (checked) {
      if (!defaultCheck.includes(value)) {
        defaultCheck.push(value);
        arr = defaultCheck;
      }
    } else {
      for (let index = 0; index < defaultCheck.length; index++) {
        if (defaultCheck[index] !== value) {
          arr.push(defaultCheck[index]);
        }
      }
    }
    defaultCheck = arr;
    onChange(arr);
  };

  return (
    <CheckboxGroupContext.Provider
      value={{
        defaultChecked,
        checkedChange,
        isGroup: true,
      }}
    >
      {options && options.length > 0
        ? options.map(({ label, value }) => {
            return (
              <Checkbox label={value} key={value.toString()}>
                {label}
              </Checkbox>
            );
          })
        : children}
    </CheckboxGroupContext.Provider>
  );
}

export { CheckboxGroupContext };

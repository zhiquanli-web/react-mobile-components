import React, { useState } from "react";
import Checkbox from "../../packages/Checkbox/Checkbox";
import CheckboxGroup from "../../packages/Checkbox/CheckboxGroup";
import Radio from "../../packages/Radio/Radio";
import RadioGroup from "../../packages/Radio/RadioGroup";

export default function Home() {
  const checkValue1 = false;
  const checkList = [
    {
      label: "复选框1",
      value: "1",
    },
    {
      label: "复选框2",
      value: "2",
    },
    {
      label: "复选框3",
      value: "3",
    },
  ];

  const [radioValue, setRadioValue] = useState('0');
  const RadioOptions = [
    {
      label: "0",
      value: "0",
    },
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
  ];

  // 方法
  const onChange = (val) => {
    console.log("组件", val);
  };

  const onChangeRadio = (val) => {
    setRadioValue(val)
  }
  return (
    <div>
      <Checkbox checked={checkValue1} onChange={onChange}>
        复选框-单
      </Checkbox>
      <br />
      <CheckboxGroup onChange={onChange}>
        {checkList.map(({ label, value }) => (
          <Checkbox label={value} key={value}>
            {label}
          </Checkbox>
        ))}
      </CheckboxGroup>
      <br />
      <Radio label="0" value={radioValue} onChange={onChangeRadio}>按钮</Radio>
      <Radio label="1" value={radioValue} onChange={onChangeRadio}>按钮</Radio>
      <RadioGroup onChange={onChange} name="test1" defaultValue="0">
         {
           RadioOptions.map(({label, value}) => (
             <Radio label={value} key={value}>
               { label }
             </Radio>
           ))
         }
      </RadioGroup>
    </div>
  );
}

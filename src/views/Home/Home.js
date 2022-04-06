import React from "react";
import Checkbox from "../../packages/Checkbox/Checkbox";
import CheckboxGroup from "../../packages/Checkbox/CheckboxGroup";
import Radio from "../../packages/Radio/Radio";
import RadioGroup from "../../packages/Radio/RadioGroup";

export default function Home() {
  // 复选框
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

  // 单选框
  const radioValue = "1";
  const RadioOptions = [
    {
      label: "单选按钮0",
      value: "0",
    },
    {
      label: "单选按钮1",
      value: "1",
    },
    {
      label: "单选按钮2",
      value: "2",
    },
    {
      label: "单选按钮3",
      value: "3",
    },
  ];

  // 方法
  const onChange = (val) => {
    console.log("复选框", val);
  };

  const onChangeRadio = (val) => {
    console.log("单选按钮", val);
  };
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
      <Radio label="0" onChange={onChangeRadio} value={radioValue}>
        按钮
      </Radio>
      <Radio label="1" onChange={onChangeRadio}>
        按钮
      </Radio>
      <RadioGroup onChange={onChangeRadio} value={radioValue}>
        {RadioOptions.map(({ label, value }) => (
          <Radio label={value} key={value}>
            {label}
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
}

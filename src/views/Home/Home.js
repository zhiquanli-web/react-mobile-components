import React from "react";
import Checkbox from "../../packages/Checkbox/Checkbox";
import CheckboxGroup from "../../packages/Checkbox/CheckboxGroup";

export default function Home() {
  const checkValue1 = false;
  const checkList = [
    {
      label: "复选框1",
      value: "1",
    },
    {
      label: "复选框1",
      value: "2",
    },
    {
      label: "复选框1",
      value: "3",
    },
  ];
  // 方法
  const onChange = (val) => {
    console.log("复选框", val);
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
    </div>
  );
}

import React from "react";

const RadioGroupContext = React.createContext();
export default function RadioGroup(props) {
  const { defaultValus } = props;
  const changeValue = (val) => {
    console.log("单选框组", val);
  };
  return (
    <RadioGroupContext.Provider
      value={{
        isGroup: true,
        changeValue,
        defaultValus,
      }}
    ></RadioGroupContext.Provider>
  );
}

export { RadioGroupContext };

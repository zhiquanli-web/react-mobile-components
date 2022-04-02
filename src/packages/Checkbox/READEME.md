## 复选框 Checkbox 使用说明

### 单个复选框

```base
1. 属性
  checked:  是否选中 Boolean
  label:    内容描述(标签不含内容时生效) String|Number

2. 事件
  onChange: 选中状态改变时触发(返回值类型Boolean)
```

```js
// js
import Checkbox from "../../packages/Checkbox/Checkbox";
const checkValue1 = true;
const onChange = (val) => {
  console.log("复选框", val);
};

// html(方式一)
<Checkbox checked={checkValue1} onChange={onChange}>
  复选框-单
</Checkbox>;

// html(方式二)
<Checkbox checked={checkValue1} onChange={onChange} label="内容描述">
  {/* 这里存在内容时 label 将会失效 */}
</Checkbox>;
```

### 复选框组(结合 CheckboxGroup)

```base
1. 属性
  defaultChecked: 默认选中 Array
  options: 复选框组(options存在且数组长度大于0时CheckboxGroup标签内内容失效) Array

2. 事件
  onChange: 选中状态改变时触发(返回值类型Array)
```

```js
// js
import Checkbox from "../../packages/Checkbox/Checkbox";
import CheckboxGroup from "../../packages/Checkbox/CheckboxGroup";

const optionList = [
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
const defaultChecked = ["1", "2"]

// html(方式一)
<CheckboxGroup onChange={onChange} defaultChecked={defaultChecked}>
  {optionList.map(({ label, value }) => (
    <Checkbox label={value} key={value}>
      {label}
    </Checkbox>
  ))}
</CheckboxGroup>;

// html(方式二)
<CheckboxGroup onChange={onChange} options={checkList} defaultChecked={defaultChecked}>
  {/* 使用options时 这里的内容将会失效 */}
</CheckboxGroup>
```

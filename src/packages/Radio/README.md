## 单选按钮 Radio 使用说明

### 单选按钮

```base
1. 属性
  value:  当前选中的单选按钮 String|Number
  label:  内容描述(标签不含内容时生效) String|Number

2. 事件
  onChange: 选中状态改变时触发(返回当前选中的值)
```

```js
// js
import Radio from "../../packages/Radio/Radio";
const radioValue = "0";
const onChange = (val) => {
  console.log("单选按钮", val);
};

// html(方式一)
<Radio label="0" onChange={onChange} value="0">
  复选框-单
</Radio>;

// html(方式二)
<Radio onChange={onChange} label="1" value="1">
  {/* 这里存在内容时 label 将会失效 */}
</Radio>;
```

### 单选框组(结合 RadioGroup)

```base
1. 属性
  value: 默认选中 String | Number
  options: 复选框组(options存在且数组长度大于0时RadioGroup标签内内容失效) Array

2. 事件
  onChange: 选中状态改变时触发(返回当前选中的值)
```

```js
// js
import Radio from "../../packages/Radio/Radio";
import RadioGroup from "../../packages/Radio/RadioGroup";

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
const defaultValue = '1'

const onChange = (val) => {
  console.log("单选按钮", val);
};

// html(方式一)
<RadioGroup onChange={onChange} value="1">
  {RadioOptions.map(({ label, value }) => (
    <Radio label={value} key={value}>
      {label}
    </Radio>
  ))}
</RadioGroup>

// html(方式二)
<RadioGroup onChange={onChange} options={RadioOptions} value={defaultValue}>
  {/* 使用options时 这里的内容将会失效 */}
</RadioGroup>
```

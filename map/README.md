# Map
> **JavaScript 标准内置对象**.
> Map保存键值对,并且能够记住键的原始插入顺序.

## 使用方式
### 实例Map
```js
const Map = require('**/index.js')

let map = new Map();
```
### Map 实例的属性
#### Map.size
> 返回实例的长度
#### Map.set(key, value)
> 添加一个属性
#### Map.get(get)
> 获取对应`key`的值
#### Map.has(key)
> 查看实例是否包含对应`key`的值, 返回 `true` 或者 `false`, 可根据这点进行去重查询,降低时间复杂度
#### Map.clear()
> 清除对应实例的内容
#### Map.remove(key)
> 删除实例某属性
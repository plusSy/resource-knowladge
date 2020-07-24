const { 
  has,
  hide,
  isObject,
  fastKey,
  getEntry
 } = require('./utils/index.js');


const Map = function () {
  this.data = {};
  this.size = 0;
}

// get 方法
Map.prototype.get = function (key) {
  let entry = getEntry(this, key);

  if (entry) {
    return entry.v;
  }

  return false;
}

// 清除方式
Map.prototype.clear = function () {
  this.data = {};
  this.size = 0;
}

// 是否存在
Map.prototype.has = function (key) {
  let entry = getEntry(this, key);
  return entry ? true : false
}

// 删除
Map.prototype.remove = function (key) {
  let entry = getEntry(this, key);

  if (entry) {
    delete this.data[entry.i]
    this.size--;
    return true
  }

  return false
}

// 添加
Map.prototype.set = function (key, value) {
  let entry = getEntry(this, key);
  if (entry) {
    entry.v = value;
  } else {
    var index = fastKey(key, true);

    this.data[index] = {
      i: index,
      v: value
    };

    this.size++
  }
}

// 获取大小
Map.prototype.size = function () {
  return this.size
}



module.exports = Map
// 获取一个唯一标识
const getUid = function () {
  return Math.random().toString(36)
}

// 在对象中是否存在
const has = function (obj,value) {
  return obj.hasOwnProperty(value)
}

// 为一个对象添加key属性
const hide = function (obj, value) {
  Object.defineProperties(obj, {
    mapKey: {
      value: value,
      writable: true
    }
  })
}

// 是否为一个对象
const isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function'
}

// 获取map某数据key值
const fastKey = function (it, create) {
  if (!isObject(it)) {
    return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it
  }

  if(has(it,'mapKey')) {
    return it['mapKey']
  } else {
    if (create) {
      var uid = getUid();
      hide(it, uid);
      return uid
    } else {
      return false
    }
  }
}

// 获取map某个数据的实体
const getEntry = function (that, key) {
  let index = fastKey(key);

  if (index) {
    return that.data[index]
  }

  for (var d in that.data) {
    if (d.i === index) return d
  }

  return false
}


module.exports = {
  getUid,
  has,
  hide,
  isObject,
  fastKey,
  getEntry
}
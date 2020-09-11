# basic
https://javascript.info/
## 变量
  - hello world , alert, console.log
  - 变量声明, 变量赋值
```
let n = 1
n = 2
const m = 2
// m = 3

let n = 'hello'

```




  - 数据类型 - typeof
```javascript
let string = 'I am string'
let number = 150
let isOk = false


[string, number, isOk, undefined].forEach(i => {
  console.log(typeof i)
})

undefined null

bigint // 大数
symbol // 唯一的

object, function


```

  ```
  Six Data Types that are primitives, checked by typeof operator:
  undefined : typeof instance === "undefined"
  Boolean : typeof instance === "boolean"
  Number : typeof instance === "number"
  String : typeof instance === "string"

  BigInt : typeof instance === "bigint"
  Symbol : typeof instance === "symbol"
  Structural Types:
  Object : typeof instance === "object". Special non-data but Structural type for any constructed object instance also used as data structures: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date and almost everything made with new keyword;
  Function : a non-data structure, though it also answers for typeof operator: typeof instance === "function". This is merely a special shorthand for Functions, though every Function constructor is derived from Object constructor.
  Structural Root Primitive:
  null : typeof instance === "object". Special primitive type having additional usage for its value: if object is not inherited, then null is shown;
  ```
  - +,- 操作符

  - 类型转换，隐士转换，显示转换


  - 比较 > < >= === '1' == 1


  - 逻辑运算符 || &&
  - 三项选择

  - 条件分支：if...else
  <!-- - switch case -->
  - loop while for循环 循环控制
  ```javascript
    for (let i = 0; i < 10; i += 1) {
      console.log(i)
    }
  ```


### 函数
  - 函数声明 function 作为一个变量的值 - 函数调用
  ```javascript
    function hi () {
      console.log('hi)
    }


    const hi = function () {
      console.log('hi)
    }

    hi()

  ```



  - 函数参数 ， default values showMessage(from, text = "no text given") { 返回
  ```javascript
    function say (str, prefix = '') {
      console.log(str)
      return prefix + str
    }

    const result1 = say('hi')

    const result2 = say()

    console.log(result1)
    console.log(result2)
    console.log(say('how are you?'))
  ```

  - 内部变量，外部变量
  ```javascript

    function say (str = 'bye') {
      const prefix = '$%&'
      return prefix + str
    }

    console.log(prefix)

    say('hi')

    say()
  ```
  - 函数回调，函数作为一个参数传递给另外一个函数

  ```javascript
    function say (str, callback) {
      console.log(str)
      callback()
    }


    say('hi', function () {
      console.log(' i am done' )
    })

    say()
  ```


  - 箭头函数

  ```javascript
    const say = (str, callback) => {
      console.log(str)
      callback()
    }


    say('hi', function () {
      console.log(' i am done' )
    })

    say()
  ```
  - write a demo






### 数组
  - 数组声明， 赋值
  ```javascript
    const array = [1, 2, 3, 4]

    const array2 = new Array(5)

    console.log(array[0], array[2])
    array[2] = 5
    console.log(array)

    console.log(array.length)
    console.log(array2.length)

    array.push(6)
    console.log(array.length)

    array.pop()
    console.log(array.length)

    // shift, unshift


    for(let i = 0; i < array.length; i += 1) {
      console.log(array[i])
    }

    array.forEach(item => {
      console.log(item)
    })

    array.map(n => {
      return n + 1
    })

    const n = 5

    array.indexOf(n)
  ```

  - 数组内部对象, length
  - push , pop, shift, unshift, shift
  - loops, for..., forEach
  ``` loop and typeof ```
  - indexOf
  - map
  - splice & slice
  - concat
  - split & join
  - reduce

### object
  - 声明， key value

  ```javascript
    const myInfo = {
      name: 'wendy',
      age: 20,
      gender: 'female'
    }

    console.log(myInfo['name'])
    console.log(myInfo.name)

    myInfo.name = 'jane'

    myInfo.height = 160

    delete myInfo.age

    home in myInfo
    myInfo.home === undefined

    for(key in myInfo) {
      console.log(key, myInfo[key])
    }

    Object.keys(myInfo).forEach(item => {

    })

    const yourInfo = myInfo

    console.log(yourInfo)
    myInfo.name = 'jane'

    console.log(yourInfo)

    const yourInfo = { ...myInfo }



  ```

  - 取值，新增，删除
  - 判断 in o.a === undefined
  - 遍历 for ... in, Object.keys


  - 引用赋值 https://javascript.info/object-copy

  <!-- - 比较
  - clone -->
  - 'this' in object function
  - arrow function 和普通function this的区别


  - 闭包 - 词法作用域 https://javascript.info/closure
  ```javascript
    function makeCounter() {
      let count = 0;

      return function() {
        console.log(count)
        count++;
      };
    }

    let counter = makeCounter();
    counter()
    counter()
    counter()
    counter()
  ```

   - 原型链 https://javascript.info/prototypes
   ```javascript
      new Array()
   ```

  - 构造函数 https://javascript.info/constructor-new
  ```javascript
    function People(name) {
      this.name = name
      this.sayMyname = () => {
        console.log(this.name)
      }
    }

    const me = new People('billy')
    me.sayMyname()

    function People(name) {
      this.name = name
      this.sayMyname = () => {
        console.log(this.name)
      }
    }

    People.prototype.sayMyname = () => {
        console.log(this.name)
    }

    const me = new People('billy')
    me.sayMyname()
  ```


  - 类 https://javascript.info/class

  ```javascript
    class MyClass {
      // class methods
      constructor(name) {
        this.name = name
      }
    }
  ```
  - 类继承 https://javascript.info/class-inheritance
  ```javascript
    class Rabbit extends Animal {
      hide() {
        alert(`${this.name} hides!`);
      }
    }
  ```

--------------
# level2

  - 结构赋值 https://javascript.info/destructuring-assignment

  - JSON https://javascript.info/json
  - Data and time https://javascript.info/date
  - setTimeout setInterval https://javascript.info/settimeout-setinterval

  ### 异步
    - Promise https://javascript.info/async

  ### js modules https://javascript.info/modules

### practice

## 全局对象 window

## web apis
  - DOM examples
  - 画图?
  - 存储
  - 历史?

## 同步和异步 异步请求

### typescript ?

























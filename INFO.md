# 网络资源请求
## 当你在浏览器里输入一个网址时（在我们的例子里就是走向商店的路上时）：

- 浏览器在域名系统（DNS）服务器上找出存放网页的服务器的实际地址（找出商店的位置）。
- 浏览器发送 HTTP 请求信息到服务器来请拷贝一份网页到客户端（你走到商店并下订单）。这条消息，包括其他所有在客户端和服务器之间传递的数据都是通过互联网使用 TCP/IP 协议传输的。
- 服务器同意客户端的请求后，会返回一个“200 OK”信息，意味着“你可以查看这个网页，给你～”，然后开始将网页的文件以数据包的形式传输到浏览器（商店给你商品，你将商品带回家）。
- 浏览器将数据包聚集成完整的网页然后将网页呈现给你（商品到了你的门口 —— 新东西，好棒！）。

- DOM Tree CSSOM tree -> render tree
- DOM - Document Object Model
- CSSOM - CSS Object Model

electron
ECMAScript standard
6th Edition – ECMAScript 2015
The 6th edition, initially known as ECMAScript 6 (ES6) then and later renamed to ECMAScript 2015, was finalized in June 2015.[13][33] This update adds significant new syntax for writing complex applications, including class declarations (class Foo { ... }), ES6 modules like import * as moduleName from "..."; export const Foo, but defines them semantically in the same terms as ECMAScript 5 strict mode. Other new features include iterators and for...of loops, Python-style generators, arrow function expression (() => {...}), let keyword for local declarations, const keyword for constant local declarations, binary data, typed arrays, new collections (maps, sets and WeakMap), promises, number and math enhancements, reflection, proxies (metaprogramming for virtual objects and wrappers) and template literals for strings.[34][35] The complete list is extensive.[36][37] As the first "ECMAScript Harmony" specification, it is also known as "ES6 Harmony."


7th Edition – ECMAScript 2016
The 7th edition, officially known as ECMAScript 2016, was finalized in June 2016.[14] Its features include block-scoping of variables and functions, destructuring patterns (of variables), proper tail calls, exponentiation operator ** for numbers, await, async keywords for asynchronous programming, and the Array.prototype.includes function.[14][38] Decorators are also part of ES7[39].

The exponentiation operator is equivalent to Math.pow, but provides a simpler syntax similar to languages like Python, F#, Perl, and Ruby.async /await was hailed as an easier way to use promises and develop asynchronous code.


8th Edition – ECMAScript 2017
The 8th edition, officially known as ECMAScript 2017, was finalized in June 2017.[15] Its features include the Object.values, Object.entries and Object.getOwnPropertyDescriptors functions for easy manipulation of Objects, async/awaitconstructions which use generators and promises, and additional features for concurrency and atomics.[40][15]


9th Edition – ECMAScript 2018
The 9th edition, officially known as ECMAScript 2018, was finalized in June 2018.[16] New features include rest/spread operators for object literals (three dots: ...identifier), asynchronous iteration, Promise.prototype.finally and additions to RegExp.[16]

The spread operator allows for the easy copying of object properties, as shown below.

let object = {a: 1, b: 2}

let objectClone = Object.assign({}, object) // before ES9
let objectClone = {...object} // ES9 syntax

let otherObject = {c: 3, ...object}
console.log(otherObject) // -> {c: 3, a: 1, b: 2}

10th Edition – ECMAScript 2019
The 10th edition, officially known as ECMAScript 2019, was published in June 2019.[11] Added features include, but are not limited to, Array.prototype.flat, Array.prototype.flatMap, changes to Array.sort and Object.fromEntries.[11]

Array.sort is now guaranteed to be stable, meaning that elements with the same sorting precedence will appear in the same order in the sorted array. Array.prototype.flat(depth=1) flattens an array to a specified depth, meaning that all subarray elements (up to the specified depth) are concatenated recursively.


11th Edition – ECMAScript 2020
The 11th edition, officially known as ECMAScript 2020, was published in June 2020.[17] In addition to new functions, this version includes a BigInt primitive for arbitrary-sized integers, new null coalescing syntax and a name which always refers to the global object.[17]

BigInts are created either with the BigInt constructor or with the syntax 10n, where "n" is placed after the number literal. Numbers in ECMAScript are usually 64-bit floats, so BigInts allow the representation and manipulation of integers beyond Number.MAX_SAFE_INTEGER. The built-in functions in Math are not compatible with BigInts; for example, exponentiation of BigInts must be done with the ** operator instead of Math.pow.

The null coalescing syntax ?? allows a terse way to deal with nullish values. In the following example, the right hand side is selected only when the left hand side is undefined or null. This contrasts with the || operator, which would return "string" for all the examples.

false ?? "string" // -> false
NaN ?? "string" // -> NaN
undefined ?? "string" // -> "string"

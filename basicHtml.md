基本的HTML文档结构

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

## comments

```
<!-- and end with -->. CSS comments start with /* and end with */
```


## html lang="en"

# head
## Meta
Metadata is data that describes data
```
<meta charset="utf-8"> <!-- 指定文档编码 -->
<meta name="author" content="Chris Mills"> <!-- 设定作者 -->
<meta name="description" content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing web sites and applications."><!-- 设定页面描述 -->
```

## meta viewport
```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## title

## link
link style.css
```
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
```
## style
文档内样式

## script
引入js文件

## 资源地址
  - relavite path ./  ../../  
  - absolute path http://www.google.com/ /

# body

## 常见文本标签
  - ```<h1>``` - ```<h3>``` - 标题
  - ```<p>``` - 段落
  - ```<ul>``` > ```<li>```, ```<ol> ``` > ```<li>``` - 列表
  - ```<a>``` - 超链接
  - ```<i>```, ```<sub>```, ```<sup>```, ```<strong>``` - 字体控制

## 浏览器默认样式和css reset

## 特定组件的标签组合
  - ```<table>```, ```<tr>```, ```<td>```, ```<th>``` - 表格
  - ```<form>```, ```<input>```, ```<button>```, ```<label>``` - 表单

## 常用于布局
  - ```<div>```（HTML Content Division element）
  - ```<span>```

## 语义化和SEO(Search Engine Optimization)
  - ```<header>```
  - ```<nav>```
  - ```<main>```
  - ```<article>```
  - ```<section>```
  - ```<aside>```
  - ```<footer>```
![](https://learn.shayhowe.com/assets/images/courses/html-css/getting-to-know-html/building-structure.png)

## attributes
 ### global attributes
  - class
  - id
  - style
  - title
  - event handler: onload onclick oncontextmenu onerror ...

## 三种引入style的方式

## tag a
  - href relative path, absolute path, email, anchor
  - target
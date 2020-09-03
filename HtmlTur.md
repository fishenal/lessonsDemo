very simple example:

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
## html lang="en"

# head
## Meta
Metadata is data that describes data
```
<meta charset="utf-8"> 指定文档编码
<meta name="author" content="Chris Mills">
<meta name="description" content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing web sites and applications.">
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


# body

## 原则
- 语义化
- 标签闭合
- 标签组合
- 必备属性

## 常见语义化标签
## h1 - h3 - 标题
## p
## ul > li， ol> li - 列表
## a
## i, sub, sup, strong

## defaul css and reset css
```css
  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
```
## div/HTML Content Division element  vs span

## attributes
 ### global attributes
  - class
  - id
  - style
  - title
  - event handler: onload onclick oncontextmenu onerror ...

## 三种引入style的方式

## 良好的html结构
header: <header>.
navigation bar: <nav>.
main content: <main>, with various content subsections represented by <article>, <section>, and <div> elements.
sidebar: <aside>; often placed inside <main>.
footer: <footer>.

## SEO (Search Engine Optimization)
meta信息

--

## img, video
 - https://homepages.cae.wisc.edu/~ece533/images/airplane.png

## canvas  canvas scripting API or the WebGL API
 - https://threejs.org/examples/#webgl_animation_cloth

## iframe

## table - 表格

 - basic
 - tr, th, td
 - border css
 - colgroup
 - td 内部html

## 用户交互
## form
 - basic
 - label input
 - submit
  - input type submit
  - button type submit
 - action, method
 - input type
  - text
  - password
  - submit
  - button
  - checkbox
  - radio
  - image
  - hidden
  - file
  html5
  - color
  - date
  - range
  - number
 - input attributes
  - name
  - type
  - value
  - disabled
  - required
  - autocomplete
  - placeholder
  - checked

 - textarea
  resize
  ```
  textarea {
    resize: none;
  }
  ```
  - attributes
    - rows
    - cols
    - name
    - minlength
    - maxLength
    - placeholder
    - spellcheck
 - select && options
  - select name attribute
  - multiple
  - option value, label


## input textarea button select

## Document Object Model (DOM)

## DOM examples

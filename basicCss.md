# basic
## 构成
选择器 - selector
规则声明 - rule - 属性和值

大括号，：，；
```
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

## 选择器 selectors
  - tag p
  - id #id-name
  - class .class-name
  - attribute img[src] a[href="http://www.example.com"]
  - pseudo-class 伪类 a:hover

## 常用属性和值
  - 文本
    - font-family
    - font-size
    - text-align
    - line-Height
    - color
    - text-shadow
  - 盒模式
    - padding
    - margin
    - border
    - width
    - height
    - background
    - vertical-align
  - 布局
    - display
    - float
    - position
    - left
    - right
    - top
    - bottom
    - overflow


# 选择
## cascade style sheet- 层叠，瀑布
```
p {
  background: orange;
  font-size: 24px;
}
p {
  background: green;
}
```

## 继承 inherit

## 混合选择
  - multiple element p, #id-name, .class-name
  - 组合选择 p.class-name
  - 限定选择 .outer p.class-name span , >

## selector优先级
  - 同级别下 id > class > tag
  - 同类型下 限制的越精确优先级越高
  - inline-css > style.css
  - !important

## 一个element可以有多个class或者id
## 通过devtool查看元素的css选择器


# 盒模式
```
div {
  border: 6px solid #949599;
  height: 100px;
  margin: 20px;
  padding: 20px;
  width: 400px;
}

```
  - padding和margin的区别, border
## box-sizing
## 通过devtool查看元素的盒模式

# 属性
## 颜色表示
  - 名称
  - hex color
  - rgb && rgba

## 单位
  - 绝对值 px ，pt
  - 百分比
  - em， rem

## 上右下左 padding margin

----------------------------------------------------------------

# 布局
## display属性
  - block, inline， inline-block
  - display none

## 居中
  - 文字水平居中
  - 定宽元素居中
  - 定高文字垂直居中
  - 不定高垂直居中 , table-cell

## position
  - 默认值 static
  - relative  配合left right top bottom
  - fixed  配合left right top bottom
  - absolute  配合left right top bottom
  - absolute 被限制

## 浮动布局和清除浮动
  clearfix
## 浮动布局 百分比尺寸-自适应

## inline-block 布局
  - 空格

## flex-box布局
  - demos
  - 居中
  ```
  .vertical-container {
    height: 300px;
    display: -webkit-flex;
    display:         flex;
    -webkit-align-items: center;
            align-items: center;
    -webkit-justify-content: center;
            justify-content: center;
  }
  ```

# transform, tansition和 animation

# 一些实践中常见的css处理
## 伪类
  :hover :select :first-element

## overflow处理

## border border-radius

## background

## font-family 退步

## font-face

# 关于css
## debug 调试css
## global css， reset css
## less
  - 变量
  - 嵌套
  - 方法
  - 代码分割 @import

# UI库
  - bootstrap
  - antd





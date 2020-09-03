const afterLoad = () => {
  // dom节点
  const element = document.getElementById('one')
  console.log("element", element)

  // 更改element的innerHtml
  element.innerHTML = 'Hello world!'

  // 打印element的attributes
  console.log(element.attributes)

  // 获取element的尺寸
  let bound = element.getBoundingClientRect()
  console.log("bound", bound)

  element.setAttribute('style', 'color: blue; font-size: 21px;')

  bound = element.getBoundingClientRect()
  console.log("bound", bound)

  // 插入一张图片并监听加载
  const newImg = document.createElement("img");
  newImg.onload = () => {
    alert('Congratulations! image loaded.')
  }
  newImg.setAttribute('src', 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png')
  element.appendChild(newImg)
}

window.onload = afterLoad;




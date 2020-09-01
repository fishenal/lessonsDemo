function People (name) {
  this.name = name
}

People.prototype.speakName = function () {
  console.log(this.name)
}

var people1 = new People('Billy')


// class People {
//   constructor(name) {
//     this.name = name
//   }

//   speakName() {
//     console.log(this.name)
//   }
// }

// const people1 = new People('Billy')
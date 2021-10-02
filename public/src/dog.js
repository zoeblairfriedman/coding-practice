class Dog {
  //temporary storage for all dogs
  static allDogs = []

  constructor(name){
    this.name = name;
    Dog.allDogs.push(this)
    this.appendDog()
  }

  //add new dogs to the dom
  appendDog(){
    let div = document.getElementById("dog-div")
    let ele = document.createElement("h2")
    ele.innerText = this.name;
    div.appendChild(ele)
  }

  bark(){
    console.log(`${this.name} says Woof!`)
  }
}
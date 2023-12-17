// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//   }
  
//   const laptop = new Product('Laptop', 1200);
//   const smartphone = new Product('Smartphone', 500);
//   console.log(laptop.price)
//   console.log(smartphone.name)


  /*    function Car(make, model) {
    this.make = make;
    this.model = model;
  
    this.start = function() {
      console.log(`log:${this.make} ${this.model} is starting.`);
    };
  }
  
  const myCar = new Car('Toyota', 'Camry');
  console.log(myCar.start(),myCar.make,myCar.model)  */

// const user=[{10:10,12:12,23:23}]
// const result=(user[0]['12'].toString())
// console.log(result)

const obj1={
  a:1,
  b:2
}

const obj2={
  x:5,
  y:10
}

// const newObj1=new Object({obj1,obj2})
// console.log(obj2)
// console.log(obj2===newObj1)



const newObj1 =new Object({...obj1, ...obj2 })
console.log(newObj1.a,newObj1.x,newObj1.y,newObj1.b)

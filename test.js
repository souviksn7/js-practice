// Promises


function myname(){
	var sudip = new Promise((resolve, error)=>{
		resolve("Souvik");
	})
	return sudip;
}

myname().then((name)=>{
	console.log(name);
})

function myname2(){
	var sudip = new Promise((resolve, error)=>{
		resolve("Souvik");
	})
	return sudip;
}

function myDisplayer(some) {
	console.log(some);
  }

  function myDisplayerFoError(some) {
	console.log(some + "extra");
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
	let x = 90;
  
  // The producing code (this may take some time)
  
	if (x == 0) {
	  myResolve("OK");
	} else {
	  myReject("Error");
	}
  });
  
  myPromise.then(
	function(value) {myDisplayer(value);}
  ).catch((error)=>{
		console.log("in catch");
		myDisplayerFoError(error)
	}
  );

// async and await

async function myFunction() {
	return "Hello";
}
function myFunction() {
	return Promise.resolve("Hello");
  }
myFunction().then((data)=>{
	console.log(data);
});


async function myDisplay() {
	let myPromise = new Promise(function(resolve, reject) {
		setTimeout(()=>{
			resolve("love you")
		},3000)
	});
	var promise = await myPromise;
	console.log(promise);
	console.log("got it");
}
  
myDisplay();

// Promise.all

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
	setTimeout(reject("foo"), 1000);
});

let promises = [];
promises.push(promise1);
promises.push(promise2);
promises.push(promise3);

Promise.all(promises).then((values)=>{
	console.log(value3);
}).catch((error)=>{
	console.log(error+"extra");
})

Promise.all([promise1, promise2, promise3]).then(([value1, value2, value3])=>{
	console.log(value3);
}).catch((error)=>{
	console.log(error+"extra");
})

let promiseses = [];
Promise.all(promiseses).then((values=>{
	console.log(values);
}),((error)=>{
	console.log(error);
}))


// Closures


function makeFunc() {
	let name = "Mozilla";
	function displayName() {
	  console.log(name);
	}
	name = "firefox"
	return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  

  // Functional Programming


  const e = 10;
  function sum(a) {
	return function sum2(b) {
	  return function sum3(c) {
		// outer functions scope
		return function sum4(d) {
		  // local scope
		  return a + b + c + d + e;
		};
	  };
	};
  }
  
  const sum2 = sum(1);
  const sum3 = sum2(2);
  const sum4 = sum3(3);
  const result = sum4(4);
  console.log(result); // 20
  console.log(sum3);
  

function outerFunction(){
	const fromOuter = "outer";

	function innerFunction(){
		console.log(fromOuter);
	}

	return innerFunction;
}

const vari = outerFunction();
vari();

// Prototype inheritance

let obj = {
	a: 1,
	b: 2
}
console.log(obj.__proto__);

let arr = [1,2,3]
console.log(arr.__proto__);

const o = {
	a: 1,
	b: 2,
	// __proto__ sets the [[Prototype]]. It's specified here
	// as another object literal.
	__proto__: {
	  b: 3,
	  c: 4,
	},
  };
  console.log(o.b);


const parent = {
	value: 2,
	method() {
	  return this.value + 1;
	},
  };
  
//   console.log(parent.method()); // 3
  // When calling parent.method in this case, 'this' refers to parent
  
  // child is an object that inherits from parent
  const child = {
	__proto__: parent,
  };
  console.log(child.method()); // 3
  // When child.method is called, 'this' refers to child.
  // So when child inherits the method of parent,
  // The property 'value' is sought on child. However, since child
  // doesn't have an own property called 'value', the property is
  // found on the [[Prototype]], which is parent.value.
  
  child.value = 4; // assign the value 4 to the property 'value' on child.
  // This shadows the 'value' property on parent.
  // The child object now looks like:
  // { value: 4, __proto__: { value: 2, method: [Function] } }
  console.log(child.method()); // 5
  // Since child now has the 'value' property, 'this.value' means
  // child.value instead


// Higher Order functions


const radius = [1,2,3,4];
const area = function(radius){
	return radius*Math.PI*Math.PI;
}

const calculate = function(radius, logic){
	const output = [];
	for(let i=0;i<radius.length; i++){
		output.push(logic(radius[i])); 
	}
	return output;
}
console.log(calculate(radius, area));




const range = (a,b) => a>b ? [] : [a, ...range(a+1,b)];

const multiply = arr => arr.reduce((p,a) => p*a);

const factorial = n => multiply(range(1,n))

console.log(factorial(5));

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'foo'),
);
const promise3 = Promise.resolve(3);

const promises = [promise1, promise2, promise3];


// Promise.allSettle()

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result)),
);

// Expected output:
// "fulfilled"
// "rejected"

Promise.allSettled(arr).then((output)=>{
	output.forEach((data)=>{})
})


// Promise.any()

const promise1 = new Promise((resolve, reject) => {
	setTimeout(resolve, 500, 'one');
  });
  
  const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise1, promise2]).then((value) => {
	console.log(value);
	// Both resolve, but promise2 is faster
  });
  // Expected output: "two"


// Classes in javascript

Declaration
class Rectangle {
	constructor(height, width) {
	  this.height = height;
	  this.width = width;
	}
  }
  
  Expression; the class is anonymous but assigned to a variable
  const Rectangle = class {
	constructor(height, width) {
	  this.height = height;
	  this.width = width;
	}
  };
  
  // Expression; the class has its own name
  const Rectangle = class Rectangle2 {
	constructor(height, width) {
	  this.height = height;
	  this.width = width;
	}
  };
console.log(Rectangle.height);  

class Rectangle {
	height = 0;
	width;
	constructor(height, width) {
	  this.height = height;
	  this.width = width;
	}
  }
let rec = new Rectangle(3,5);
console.log(rec.width);  

class Rectangle {
	#height = 0;
	#width;
	constructor(height, width) {
	  this.#height = height;
	  this.#width = width;
	}
	get getWidth(){
		return this.#width
	}
  }

  let rec = new Rectangle(3,6);
  console.log(rec.getWidth);
  console.log(rec.width);
  
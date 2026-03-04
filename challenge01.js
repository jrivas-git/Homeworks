function regularFunction(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

const newRegularFunction = function (number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
};

const arrowFunction = (number) => {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
};

regularFunction(4);
regularFunction(7);

newRegularFunction(10);
newRegularFunction(3);

arrowFunction(8);
arrowFunction(5);
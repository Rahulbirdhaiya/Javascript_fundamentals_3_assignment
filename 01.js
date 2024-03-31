let car = {
    year: 2022,
    make: "Toyota",
    model: "Camry"
}

function displayCarProperties(carObj) {
  for (const property in carObj) {
    console.log(`${property}: ${carObj[property]}`);
  }
}

// Display all properties of the car
displayCarProperties(car);
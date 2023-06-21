"use strict";
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

function calcTemp(event) {
  const currentValue = +event.target.value;
  const currentName = event.target.name;

  switch (currentName) {
    case "celsius":
      fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2);
      kelvin.value = (currentValue + 273.32).toFixed(2);
      break;
    //
    case "fahrenheit":
      celsius.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvin.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
      break;
    //
    case "kelvin":
      celsius.value = (currentValue - 273.32).toFixed(2);
      kelvin.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}

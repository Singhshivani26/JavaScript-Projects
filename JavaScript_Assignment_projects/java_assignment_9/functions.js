// Function to calculate the lifetime supply
function calculateLifetimeSupply(age, amountPerDay) {
    const maxAge = 85;
    const yearsRemaining = maxAge - age;
    const totalAmount = yearsRemaining * 365 * amountPerDay; // assuming 365 days per year
    return `You will need ${totalAmount} to last you until the age of 85.`;
}

// Temperature Conversion Functions
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Calling the functions with different values and displaying the results
window.onload = function() {
    // Lifetime Supply Test using prompt for age and amount per day
    let age1 = prompt("Enter your age for the first calculation:");
    let amountPerDay1 = prompt("Enter how many snacks you eat per day for the first calculation:");
    age1 = Number(age1);
    amountPerDay1 = Number(amountPerDay1);
    const result1 = calculateLifetimeSupply(age1, amountPerDay1);
    document.getElementById("lifetimeSupplyResult1").innerHTML = result1;

    let age2 = prompt("Enter your age for the second calculation:");
    let amountPerDay2 = prompt("Enter how many snacks you eat per day for the second calculation:");
    age2 = Number(age2);
    amountPerDay2 = Number(amountPerDay2);
    const result2 = calculateLifetimeSupply(age2, amountPerDay2);
    document.getElementById("lifetimeSupplyResult2").innerHTML = result2;

    let age3 = prompt("Enter your age for the third calculation:");
    let amountPerDay3 = prompt("Enter how many snacks you eat per day for the third calculation:");
    age3 = Number(age3);
    amountPerDay3 = Number(amountPerDay3);
    const result3 = calculateLifetimeSupply(age3, amountPerDay3);
    document.getElementById("lifetimeSupplyResult3").innerHTML = result3;

    // Temperature Conversion Test using prompt for temperatures
    const celsiusValue = prompt("Enter temperature in Celsius:");
    const fahrenheitValue = prompt("Enter temperature in Fahrenheit:");

    const celsiusToFahrenheitResult = celsiusToFahrenheit(Number(celsiusValue));
    const fahrenheitToCelsiusResult = fahrenheitToCelsius(Number(fahrenheitValue));

    document.getElementById("temperatureResult").innerHTML = `
        Celsius to Fahrenheit: ${celsiusValue}°C = ${celsiusToFahrenheitResult}°F <br>
        Fahrenheit to Celsius: ${fahrenheitValue}°F = ${fahrenheitToCelsiusResult}°C
    `;
};

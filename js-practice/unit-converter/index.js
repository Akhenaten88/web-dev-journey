const unit = {};

const inputElm = document.getElementById("unit-input");
const btnElm = document.getElementById("convert-btn");

const lengthElm = document.getElementById("length")
const volumeElm = document.getElementById("volume")
const massElm = document.getElementById("mass")

btnElm.addEventListener('click', () => {
    calculet(3.28084, 0.264172, 2.20462);
});

function calculet(feetMeter, litreGallon, kilogramPound) {
    const inputValue = Number(inputElm.value);

    unit.feet = (inputValue * feetMeter).toFixed(3)
    unit.meter = (inputValue / feetMeter).toFixed(3)

    unit.gallons = (inputValue * litreGallon).toFixed(3)
    unit.litre = (inputValue / litreGallon).toFixed(3)

    unit.pounds = (inputValue * kilogramPound).toFixed(3)
    unit.kilos = (inputValue / kilogramPound).toFixed(3)

    lengthElm.innerText = `${inputValue} meters = ${unit.feet} feet | ${inputValue} feet = ${unit.meter} meters`;

    volumeElm.innerText = `${inputValue} liters = ${unit.gallons} gallons | ${inputValue} feet = ${unit.litre} liters`;

    massElm.innerText = `${inputValue} kilos = ${unit.pounds} pounds | ${inputValue} pounds = ${unit.kilos} kilos`;
};
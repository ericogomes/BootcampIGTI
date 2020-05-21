const inputRed = document.querySelector('#rangeRed');
const inputRedText = document.querySelector('#txtRed');

const inputGreen = document.querySelector('#rangeGreen');
const inputGreenText = document.querySelector('#txtGreen');

const inputBlue = document.querySelector('#rangeBlue');
const inputBlueText = document.querySelector('#txtBlue');

const colorResult = document.querySelector('#divColor');
const valueColor = document.querySelector('#valueColor');

valueColor.innerHTML = `rgb( ${0}, ${0}, ${0} )`;

inputRed.value = 0;
inputGreen.value = 0;
inputBlue.value = 0;

inputRedText.value = inputRed.value;
inputGreenText.value = inputGreen.value;
inputBlueText.value = inputBlue.value;

inputRed.addEventListener('input', function () {
  inputRedText.value = inputRed.value;
  colorResult.style.backgroundColor = `rgb(${inputRed.value},${inputGreen.value},${inputBlue.value})`;
  valueColor.innerHTML = colorResult.style.backgroundColor;
});

inputGreen.addEventListener('input', function () {
  inputGreenText.value = inputGreen.value;
  colorResult.style.backgroundColor = `rgb(${inputRed.value},${inputGreen.value},${inputBlue.value})`;
  valueColor.innerHTML = colorResult.style.backgroundColor;
});

inputBlue.addEventListener('input', function () {
  inputBlueText.value = inputBlue.value;
  colorResult.style.backgroundColor = `rgb(${inputRed.value},${inputGreen.value},${inputBlue.value})`;
  valueColor.innerHTML = colorResult.style.backgroundColor;
});

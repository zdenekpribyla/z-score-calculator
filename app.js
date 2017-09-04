// select html elements
var rawScoreElement = document.getElementById('raw-score-input-value');
var populationMeanElement = document.getElementById('population-mean-input-value');
var standardDeviationElement = document.getElementById('standard-deviation-input-value');
var clickButtonElement = document.getElementById('click-button');
var inputsAllElements = document.getElementsByClassName('input-field');
var resultElement = document.getElementById('display-result');
var patternAlphabetElement = document.getElementById('display-pattern-alphabet');
var patternValueElement = document.getElementById('display-pattern-value');


// take value and accept only numbers
var getValues = function () {
    console.log('getValues()');
    return {
        rawScore: Number(rawScoreElement.value),
        populationMean: Number(populationMeanElement.value),
        standardDeviation: Number(standardDeviationElement.value)
    }
};


// validate if only numbers are put
var validate = function (dataToValidate) {
    console.log('validate()');

    if (dataToValidate.rawScore <= 0 || dataToValidate.populationMean <= 0 || dataToValidate.standardDeviation <= 0) {
        // console.log('There is a number less than zero');
        return false
    }
    else {
        // console.log('Numbers are fine');
        return true
    }
};

// calculate function + calculation pattern
var calculate = function (inputData) {
   return inputData.rawScore - inputData.populationMean / inputData.standardDeviation;
};


// final run decides true - calculate() or false - display alert
var finalRun = function () {
    console.log('finalRun()');

    var inputData = getValues();

    if (validate(inputData)) {
        console.log('true - input only positive numbers');

        var result = calculate(inputData);

        // display pattern
        patternAlphabetElement.innerHTML = 'Z = (X - μ) / σ';

        // display input numbers in pattern
        patternValueElement.innerHTML = 'Z = ' + inputData.rawScore + ' - ' + inputData.populationMean
            + ' / ' + inputData.standardDeviation;
        // display result
        resultElement.innerHTML = 'Z = ' + result.toFixed(2);
    }

    else {
        console.log('false - input zero or negative numbers');
        alert('Čísla musí být větší než nula!')
    }
};


// button click
clickButtonElement.addEventListener('click', function () {
    console.log('kliknul sem na button');
    finalRun()
});

//hit enter
// create a loop
for (var index = 0; index < inputsAllElements.length; ++index) {

    var singleInputElements = inputsAllElements[index];

    singleInputElements.addEventListener('keypress', function (event) {
        var key = event.keyCode;
        if (key === 13) {
            console.log('keypress enter');

            finalRun()
        }
    })
}




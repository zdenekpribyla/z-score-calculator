
// select html elements
var ravScoreElement = document.getElementById('raw-score-input-value');
var populationMeanElement = document.getElementById('population-mean-input-value');
var standardDeviationElement = document.getElementById('standard-deviation-input-value');
var clickButtonElement = document.getElementById('click-button');

// take value and accept only numbers
var getValues = function () {
    console.log('getValues()');
    return {
        rawScore : Number(ravScoreElement.value),
        populationMean : Number(populationMeanElement.value),
        standardDeviation : Number(standardDeviationElement.value)
    }

};

// validate if only numbers are put

var validate = function (inputData) {
    console.log('validate()');
    if (inputData.ravScoreElement <=0 || inputData.populationMeanElement <= 0 || inputData.standardDeviationElement <= 0) {
        console.log('There is a number less than zero');
        return false
    }
    else {
        console.log('Numbers are fine');
        return true
    }

};

// calculate


// final run

// button click
clickButtonElement.addEventListener('click', function () {
    console.log('kliknul sem na button')
    //put here finalRun function - calculate
});


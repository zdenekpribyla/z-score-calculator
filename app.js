
// select html elements
var ravScoreElement = document.getElementById('raw-score-input-value');
var populationMeanElement = document.getElementById('population-mean-input-value');
var standardDeviationElement = document.getElementById('standard-deviation-input-value');

// take value and accept only numbers
var getValues = function () {

    return {
        rawScore : Number(ravScoreElement.value),
        populationMean : Number(populationMeanElement.value),
        standardDeviation : Number(standardDeviationElement.value)
    }

};

// validate if only numbers are put

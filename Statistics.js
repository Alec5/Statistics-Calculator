let nums = [];
let deviations = [];
var sum = 0;
var dev_sum = 0;
var mean = 0;
var mad = 0;
var median = 0;
var mode = "None";
var min = 0;
var max = 0;
var input = document.getElementById("num_input");
var output = document.getElementById("output");
var br = document.createElement("br");

function reset(){
    output.innerHTML = null;
    nums = [];
    deviations = [];
    sum = 0;
    dev_sum = 0;
    mean = 0;
    mad = 0;
    median = 0;
    mode = "None";
    min = 0;
    max = 0; 
}
function calculate(){
    //reset values
    reset();

    //order the numbers
    nums = input.value.split(' ').map(Number);
    nums.sort(function(a, b){return a-b});

    //find the min and max 
    min = nums[0];       
    max = nums.slice(-1)[0]

    //find the mean
    for (var i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    mean = sum/nums.length;

    //find the median
    var half = Math.floor(nums.length / 2);

    if (nums.length % 2){
        median = nums[half];
    } else {
        median = (nums[half - 1] + nums[half]) / 2.0;
        }

    //find the MAD
    for (var j = 0; j < nums.length; j++){
        deviations[j] = Math.abs(mean - nums[j])
        dev_sum += deviations[j];
    }
    mad = dev_sum/deviations.length;

    //find the mode
    var valuesSoFar = [];
    for (var k = 0; k < nums.length; k++) {
        var value = nums[k];
        if (valuesSoFar.indexOf(value) !== -1) {
            mode = ( nums.sort((a,b) =>
            nums.filter(v => v===a).length
        -   nums.filter(v => v===b).length
            ).slice(-1)[0]);
        } 
        valuesSoFar.push(value);       
    }
     
    //output the data
    output.innerHTML += ("Minimum: " + min);
    output.appendChild(br);
    output.innerHTML += ("Maximum: " + max);
    output.appendChild(br);
    output.innerHTML += ("Mean: " + mean);
    output.appendChild(br);
    output.innerHTML += ("Median: " + median)
    output.appendChild(br);
    output.innerHTML += ("Mode: " + mode)
    output.appendChild(br);
    output.innerHTML += ("Mean Absolute Deviation: " + mad)
}

document.addEventListener("keypress", enterCheck);

function enterCheck(e) {
  if (13 == e.keyCode) {
     calculate();
  }
}
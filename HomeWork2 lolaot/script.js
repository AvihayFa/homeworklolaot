let nums = [];

function getUserNumbers() {
    for (i = 0; i < 10; i++) {
        nums.push(prompt("אנא הכנס מספר"));

    }
    console.log(nums);
}
getUserNumbers();
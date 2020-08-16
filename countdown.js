var submitButton = document.getElementById("submit"),
    timeGoal = document.getElementById("timeGoal"),
    currentTime = document.getElementById("current"),
    dispDays = document.getElementById("days"),
    dispHrs = document.getElementById("hours"),
    dispMins = document.getElementById("mins"),
    dispSecs = document.getElementById("secs");

var today;
var goal, diff;
var milli, toSeconds, seconds, toMinutes, minutes, hours, toDays, presentTime;

submitButton.addEventListener("click", function(){
    setInterval(countdownLogic, 1000);   
});


function countdownLogic(){
    today = new Date();
    milliCurrent = today.getTime();
 
    if (!(isNaN(timeGoal.valueAsNumber))){
        goal = timeGoal.valueAsNumber;
        diff = goal - milliCurrent; 

        if (diff > 0){

            milli = diff % 1000;
            toSeconds = Math.round(diff / 1000);
            seconds = toSeconds % 60;
            toMinutes = Math.round(toSeconds / 60);
            minutes = toMinutes % 60;
            toHours = Math.round(toMinutes / 60);
            hours = toHours % 24;
            toDays = Math.round(toHours / 24);
        
            dispDays.textContent = format(toDays);
            dispHrs.textContent = format(hours);
            dispMins.textContent = format(minutes);
            dispSecs.textContent = format(seconds);
        }
    }

}

function format(number){
    return ((number < 10) ? '0' : "") + number;
}
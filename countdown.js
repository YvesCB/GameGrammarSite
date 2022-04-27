// Set the date we're counting down to
var countDownDateSun = new Date("Dec 24, 2023 18:00:00").getTime();
var countDownDateWed = new Date("Dec 24, 2023 18:00:00").getTime();
var countDownDateFri = new Date("Dec 24, 2023 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distanceSun = (countDownDateSun - now) % (1000 * 60 * 60 * 24 * 7);
    var distanceWed = (countDownDateWed - now) % (1000 * 60 * 60 * 24 * 7);
    var distanceFri = (countDownDateFri - now) % (1000 * 60 * 60 * 24 * 7);

    var distance = Math.min(distanceSun, distanceWed, distanceFri);

    var nextday = "";
    if (Math.abs(distanceSun - distance) < 1000) nextday = "sun";
    else if (Math.abs(distanceWed - distance) < 1000) nextday = "wed";
    else if (Math.abs(distanceFri - distance) < 1000) nextday = "fri";

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var daystring = "";
    var hourstring = "";
    var minutestring = "";
    var secondstring = "";

    if (days != 0) daystring = days + "d ";
    if (hours != 0 || (hours == 0 && days != 0)) hourstring = hours + "h ";
    if (minutes != 0 || (minutes == 0 && (hours != 0 || days != 0))) minutestring = minutes + "m ";
    if (seconds != 0 || (seconds == 0 && (minutes != 0 || hours != 0 || days != 0))) secondstring = seconds + "s ";

    // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML = "Next stream in: " + daystring + hourstring 
        + minutestring + secondstring;

    // If the count down is finished, write some text
    if ((nextday == "sun" && distance > (1000 * 60 * 60 * 44) ) || (nextday == "wed" && distance > (1000 * 60 * 60 * 70)) || (nextday == "fri" && distance > (1000 * 60 * 60 * 45))) {
        document.getElementById("countdown").innerHTML = "";
        document.getElementById("livelink").innerHTML = "Live now!";
    }
}, 1000);

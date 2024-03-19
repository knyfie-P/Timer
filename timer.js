// Set the countdown date to March 29th, 2024, at midnight
var countDownDate = new Date("Mar 29, 2024 00:00:00:000").getTime();

// Update the countdown every millisecond
var x = setInterval(() => {
    // Get the current time
    var now = new Date().getTime();

    // Calculate the remaining time until the countdown date
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, seconds, and milliseconds remaining
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var milliseconds = Math.floor((distance % 1000));

    // Update the HTML elements displaying days, hours, minutes, seconds, and milliseconds
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("milliseconds").innerHTML = milliseconds;

    // If the countdown has finished, display "Giveaway Ended" and apply CSS class
    if (distance < 0) {
        clearInterval(x); // Stop the countdown
        document.getElementById("cdt").innerHTML = "Giveaway Ended"; // Display "Giveaway Ended"
        document.body.classList.add('giveaway-ended'); // Apply the 'giveaway-ended' CSS class to the body
    }
}, 1); // Update the countdown every 1 millisecond

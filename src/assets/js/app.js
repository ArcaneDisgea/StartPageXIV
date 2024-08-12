let searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.keyCode == 13) {
        search();
    }
});

function search() {
    window.location.href = `https://kagi.com/search?q=${searchInput.value}`;
}

window.addEventListener("load", () => {
    setbg().then((err) => {
        console.log(err);
    });
    clock();
    function clock() {
        const today = new Date();

        // get time components
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        //add '0' to hour, minute & second when they are less 10
        const hour = hours < 10 ? "0" + hours : hours;
        const minute = minutes < 10 ? "0" + minutes : minutes;
        const second = seconds < 10 ? "0" + seconds : seconds;

        //make clock a 12-hour time clock
        const hourTime = hour > 12 ? hour - 12 : hour;

        // if (hour === 0) {
        //   hour = 12;
        // }
        //assigning 'am' or 'pm' to indicate time of the day
        const ampm = hour < 12 ? "AM" : "PM";

        // get date components
        const month = today.getMonth();
        const year = today.getFullYear();
        const day = today.getDate();

        //declaring a list of all months in  a year
        const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        //get current date and time
        const date = monthList[month] + " " + day + ", " + year;
        const time = hourTime + ":" + minute + ":" + second + ampm;

        //combine current date and time
        const dateTime = date + " | " + time;

        //print current date and time to the DOM
        document.getElementById("date").innerHTML = date;
        document.getElementById("time").innerHTML = time;
        setTimeout(clock, 1000);
    }
});

async function setbg() {
    const random = Math.floor(Math.random() * 37);
    while (random == 0) {
        random = Math.floor(Math.random() * 37);
    }
    document.body.style.background = `url(assets/i/bg/${random}.jpg) no-repeat center center fixed`;
}

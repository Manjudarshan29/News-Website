function updateDateTime() {
    const dateTimeElement = document.getElementById("date-time");
    const now = new Date();

    const options = {
        weekday: "long", 
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };
    const formattedDateTime = now.toLocaleDateString("en-US", options);
    dateTimeElement.textContent = formattedDateTime;
}
updateDateTime();
setInterval(updateDateTime, 1000);
const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');

btnHam.addEventListener('click', function(){
    if(btnHam.className !== ""){
        btnHam.style.display = "none";
        btnTimes.style.display = "block";
        navBar.classList.add("show-nav");
    }
})



btnTimes.addEventListener('click', function(){
    if(btnHam.className !== ""){
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav");
    }
})
const newsHeadlines = [
    "7 dead, over 40 injured in massive building fire in Mumbai's Goregaon West",
    "Devon Conway, Rachin Ravindra fire dazzling tons as New Zealand stun defending champions England in opener",
    "RBI keeps repo rate unchanged at 6.5%"
];

const tickerContent = document.querySelector(".ticker-content");
function updateTicker() {
    tickerContent.innerHTML = newsHeadlines.join(" | ");
}
updateTicker();
setInterval(updateTicker, 10000);


function updateLiveCalendar() {
    let now = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date = now.toLocaleDateString('en-US', options);
    
    document.getElementById("live-Calendar").innerText = `${date}`;
}
setInterval(updateLiveCalendar, 1000);
updateLiveCalendar();
function getSounding() {
    const date = new Date().toJSON()
    let currentDate = date.slice(2,4) + date.slice(5,7) + date.slice(8,10)
    let closestTime = "00"
    let currentTime = date.slice(11,13)

    if(currentTime>=12) closestTime = "12"

    let soundingTimestamp = currentDate + closestTime
    let soundingURL = "https://www.spc.noaa.gov/exper/soundings/" + soundingTimestamp + "_OBS/FWD.gif"

    let pic = document.getElementById("sounding")
    pic.src = soundingURL
}
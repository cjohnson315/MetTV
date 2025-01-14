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

function getSatellite() {
    const date = new Date().toJSON()
    let month = Number(date.slice(5,7))
    let monthAdjusted = (month-1).toString()

    let minuteCurrent = Number(date.slice(14,16))
    let minuteChoices = [56, 51, 46, 41, 36, 31, 26, 21, 16, 11, 6, 1]
    let minute = 0
    
    for (choice of minuteChoices) {
        if(choice <= minuteCurrent) {
            minute = choice.toString()
            break
        }  
        else {
            minute = "56"
        } 
    }
    if (minute.length<2) minute = "0"+minute

    let timestamp = date.slice(2,4) + monthAdjusted + date.slice(8,10) + date.slice(11,13) + minute

    let satelliteURL = "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/GEOCOLOR/" + timestamp + "_GOES16-ABI-CONUS-GEOCOLOR-5000x3000.jpg"

    console.log(satelliteURL)
}
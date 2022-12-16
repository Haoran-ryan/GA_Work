const timeConvert = function(now) {
        let hour = now.substring(0,2);
        let indicator = now.substring(8); // indicate pm/am
        if (hour === "12"){
            if (indicator === "AM") {
                let newHour = "00";
                now = now.replace(hour,newHour)
                console.log(now.substring(0,8));
            } else {
                console.log(now.substring(0,8));
            }
        } else{
            if (indicator === "PM") {
                let newHour = hour + 12;
                now.replace(hour,newHour)
                console.log(now.substring(0,8));
        } else{
                console.log(now.substring(0,8));
            }
        }
}

timeConvert('12:01:00PM') // => '12:01:00'
timeConvert('12:01:00AM') // => '00:01:00'
timeConvert('07:05:45PM') // => '19:05:45'
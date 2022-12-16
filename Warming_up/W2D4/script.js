const planTrip = function(minTemp, maxRain){
    const temp = [20,25,27,32,18,26,27];
    const precipitation = [12,6,24,65,2,0,14];
    const days = {
        0: "Monday",1: "Tuesday",2: "Wednesday",3: "Thursday",4:"Friday",5: "Saturday",6: "Sunday",
    }

    let result = [];
    for (let i in temp){
        if (temp[i] >= minTemp && precipitation[i] <= maxRain){
            result.push(days[i]);
        }
    }
    if (result.length === 0){
    console.log("No days suitable.")
    }else if (result.length === 1){
        console.log(result.join(""))
    }else{
        console.log(result.slice(0,-1).join(", ") + " and " + result.slice(-1));
    }
}
/*
or we can use result.pop() to temporarily assign the value
to a variable and print the mutated array + the temp variable
*/

planTrip(25, 30);
// => "tuesday, wednesday, saturday and sunday"

planTrip(18, 65);
// => "monday, tuesday, wednesday, thursday, friday, saturday and sunday"

planTrip(0, 0);
// => "saturday"

planTrip(-1, -1);
// => "No days suitable."
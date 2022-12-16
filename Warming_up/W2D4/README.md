Beach Planner

Write a program that, given a minimum temperature and a maximum rainfall forecast, output a list of days you can go to the beach.

With the following forecast:

monday: the temperature is 20 and there is 12mm of rain
tuesday: the temperature is 25 and there is 6mm of rain
wednesday: the temperature is 27 and there is 24mm of rain
thursday: the temperature is 32 and there is 65mm of rain
friday: the temperature is 18 and there is 2mm of rain
saturday: the temperature is 26 and there is 0mm of rain
sunday: the temperature is 27 and there is 14mm of rain

Examples:

planTrip(25, 30);
// => "tuesday, wednesday, saturday and sunday"

planTrip(18, 65);
// => "monday, tuesday, wednesday, thursday, friday, saturday and sunday"

planTrip(0, 0);
// => "saturday"

planTrip(-1, -1);
// => "No days suitable."

HINT: Find a way to store your data (array, object, ...)
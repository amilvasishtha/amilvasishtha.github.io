
function countup(year, month, day) {
	var start = new Date(year, month, day); //Month is 0-11 in JavaScript
	var today = new Date();
	//Get 1 day in milliseconds
	var one_day = 1000*60*60*24;
	var difference = (today.getTime() - start.getTime())/one_day ;
	return difference.toFixed(2);
}


var teamDate = countup(2015,0,26);
//enter the count up date using the format year/month/day

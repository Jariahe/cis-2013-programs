var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
floatAge=parseFloat(prompt("Enter Age in Years"));
floatDays=(floatAge*365.25).toFixed(2);
intWeeks=parseInt(floatDays*52).toFixed(2);
floatMonths=parseFloat(floatAge*12).toFixed(2);
intFortnights=parseInt(floatDays/14).toFixed(2);
alert("You are " + floatDays + " days young!" + "\n" + intWeeks + "weeks young!" + "\n" + floatMonths + "months young!" + "\n" + intFortnights + "fortnights young!");
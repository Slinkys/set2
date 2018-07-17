function jediName(firstName, lastName) {
    return lastName.slice(0, 3) + firstName.slice(0, 2); 
}

jediName("Rose", "Sorfa");

/*
If num is infinite (either positive or negative) it should log out 'And beyond'.
If num is finite and positive it should log out 'To infinity'.
If num is finite and negative it should log out 'To negative infinity'.
If num is zero it should log out 'Staying home'.
*/
function beyond(num) {
    switch (num) {
        case num === Infinity:
          console.log('And beyond');
        break;
        case ((num > 0) && (num !== Number.POSITIVE_INFINITY)):
            console.log('To infinity');
        break;        
        case ((num < 0) && (num !== Number.NEGATIVE_INFINITY)):
            console.log('To negative infinity');
          break;
        case num === 0:
          console.log('Staying home');
        break;
        default:
            console.log('Everything is fine');
    }  
}
beyond(2);

function daysInMonth(month, leapYear) {
   leapYear === undefined || 'false';

    switch (month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':        
          console.log(`${month} has 31 days`);
          return `${month} has 31 days`;
        break;        
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            console.log(`${month} has 30 days`);
            return `${month} has 30 days`;
        break;
        case 'February':
            if (leapYear === true) {
                console.log(`${month} has 29 days`);
                return `${month} has 29 days`;                
            } else {
                console.log(`${month} has 28 days`);
                return `${month} has 28 days`;                   
            }
        break;
        default:
            console.log('Must provide a valid month.');
    }  
}
daysInMonth('February');

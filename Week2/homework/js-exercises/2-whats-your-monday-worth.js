// Let's assume your hourly rate is €25. How much would you earn on that day?

{
    "use strict";

    const mondayTasks = [
        {
            name: 'Daily standup',
            duration: 30, // specified in minutes
        },
        {
            name: 'Feature discussion',
            duration: 120,
        },
        {
            name: 'Development time',
            duration: 240,
        },
        {
            name: 'Talk to different members from the product team',
            duration: 60,
        },
    ];
    // Write a program that finds out what your hourly rate on a Monday would be

    const perHour = 25;

    function calcPrice(obj) {
        return (obj.duration / 60) * perHour;
    }

    function gettotal(total, num) {
        return total + num;
    }

    const showMondayWorth = (array) => {
        const durationPrices = array.map(calcPrice);            // Use the map array function to take out the duration time for each task.
        console.log(durationPrices);                            // Multiply each duration by a per-hour rate for billing and sum it all up.

        const totalIncome = durationPrices.reduce(gettotal);    // Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
        console.log("€" + totalIncome.toFixed(2));              // Make sure the program can be used on any array of objects that contain a duration property with a number value

    };
    
    showMondayWorth(mondayTasks);





}
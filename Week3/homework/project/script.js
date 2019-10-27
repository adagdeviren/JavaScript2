function tipCalculator() {

    // Elements
    const billAmount = document.querySelector("#cost").value;
    const serviceQuality = document.querySelector(".serviceQuality").value;
    const numOfPeople = document.querySelector("#numOfPeople").value;
    const eachAmount = document.querySelector(".eachAmount");
    const each = document.querySelector("#each");
    const showAmount = document.querySelector(".showAmount");
   
    // Calculation
    let total = (billAmount * serviceQuality) / numOfPeople;
    total = total.toFixed(2);

    // If there's only 1 person who shares the bill, output only the tip amount (omit the "each")
    if (numOfPeople === '1') {
        each.style.display = 'none';
    }

    // If any of the input fields are empty when the button is clicked, call an alert that says: "You need to fill in all the fields!"
    if (billAmount <= "0" || serviceQuality === "notSelected" || numOfPeople <= "0") {
         alert("You need to fill in all the fields!");

    }

    // Appends total
    eachAmount.innerHTML = total;


}

const button = document.querySelector("button");
button.addEventListener('click', tipCalculator)
{
    "use strict";

    const myHobbies = [
        'Meditation',
        'Reading',
        'Programming',
        'Hanging out with friends',
        'Going to the gym',
    ];

    const ul = document.querySelector("#hobbyList");

    function addToList (hobby) {
       const li = document.createElement('li');
       li.textContent = hobby;
       ul.appendChild(li);
    }

    myHobbies.forEach(addToList);

}
{
    'use strict';

    const favQuotes = [
        {
            quote: "An investment in knowledge pays the best interest.",
            author: 'Benjamin Franklin'
        },
        {
            quote: "Smiling is definitely one of the best beauty remedies. If you have a good sense of humor and a good approach to life, that's beautiful.",
            author: "Rashida Jones"
        },
        {
            quote: "Research shows that there is only half as much variation in student achievement between schools as there is among classrooms in the same school. If you want your child to get the best education possible, it is actually more important to get him assigned to a great teacher than to a great school.",
            author: "Bill Gates"
        },
        {
            quote: "The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.",
            author: "Vince Lombardi"
        },
        {
            quote: "The best preparation for tomorrow is doing your best today.",
            author: "H. Jackson Brown, Jr."
        },
        {
            quote: "Love yourself for who you are, and trust me, if you are happy from within, you are the most beautiful person, and your smile is your best asset.",
            author: "Ileana D'Cruz"
        },
    ];

    const quote = document.querySelector('.quote-text');
    const author = document.querySelector('.author');
    const button = document.querySelector('.button');

    const getRandomQuote = () => {
        const randomNumber = Math.floor(Math.random() * favQuotes.length);
        quote.textContent = favQuotes[randomNumber].quote;
        author.textContent = favQuotes[randomNumber].author;
        button.addEventListener('click', getRandomQuote);
    }

    getRandomQuote();



}
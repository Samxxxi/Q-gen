

const button=document.querySelector('#btn');



function btn(){
    console.log('clicked');

    const quotes = [
        {
            'quote': "I Will Wear High Heels So That You Will Hear My Approach On The Cobblestones, And You Will Have Time To Repent.",
            'author': "Polly Shelby"
        },
        {
            'quote': "This Whole Bloody Enterprise Was Women's Business While You Boys Were Away At War.",
            'author': "Polly Shelby"
        },
        {
            'quote': "I Heard You Dress Well Mr. Shelby. But Now I See, Not So Well As Me.",
            'author': "Luca Changretta"
        },
        {
            'quote': "And If We Lift Our Heel Off Their Necks Now, They'll Just Come At Us.",
            'author': "Tommy Shelby"
        },
        {
            'quote': "There's No Rest For Me In This World. Perhaps In The Next.",
            'author': "Tommy Shelby"
        },
        {
            'quote': "My Suits Are On The House, Or The House Burns Down.",
            'author': "Tommy Shelby"
        },
        {
            'quote': "He'll Wake Up. Granted He Won't Have Any Teeth Left, But He'll Be A Wiser Man For It.",
            'author': "Alfie Solomons"
        },
        {
            'quote': "They Killed Him. My Son. They Shot Him And They Put Him On A F****** Cross And He's F****** Dead.",
            'author': "Aberama Gold"
        },
        {
            'quote': "This Place Is Under New Management, By Order Of The Peaky Blinders.",
            'author': "Arthur Shelby"
        },
        {
            'quote': "Everyone's A Wh*re, Grace. We Just Sell Different Parts Of Ourselves.",
            'author': "Tommy Shelby"
        },
        {
            'quote': "It Was F***** Biblical, Mate.",
            'author': "Alfie Solomons"
        },
        {
            'quote': "Whiskey's Good Proofing Water. Tells You Who's Real And Who Isn't.",
            'author': "Tommy Shelby"
        },
        {
            'quote': "Men Like Us, Mr. Shelby, Will Always Be Alone. And What Love We Get, We Will Have To Pay For.",
            'author': "Chester Campbell"
        },
        {
            'quote': "Good Taste Is For People Who Can't Afford Sapphires.",
            'author': "Tommy Shelby"
        },
        {
            'quote': "Men And Their C**** Never Cease To Amaze Me.",
            'author': "Polly Shelby"
        }
    ]

    // this is how i will randomly select qoutes
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomSelector = quotes[randomIndex];

    // console.log(randomSelector.author +" "+ randomSelector.quote);

     const quoteElement = document.querySelector('.qoute span');
     const authorElement = document.querySelector('.person h4');
 
     quoteElement.innerText = randomSelector.quote;
     authorElement.innerText = randomSelector.author;



}

button.addEventListener('click',btn);




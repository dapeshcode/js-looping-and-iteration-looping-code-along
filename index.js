// write cards 
function writeCards(names, event) {

    const thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
}


function countDown(num) {
    let count = num;
    while (count >= 0) {
    console.log(count);
    count -= 1;
    }
}




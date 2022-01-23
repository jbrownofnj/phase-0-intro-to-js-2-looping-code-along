function writeCards(nameArray,giftType){
    const cardsArray = [];
    for (let i=0; i<nameArray.length; i++){
        cardsArray.push("Thank you, "+nameArray[i]+", for the wonderful "+giftType+" gift!");
}
    return cardsArray;
}

function countDown(startingNumber){
    for(let i=startingNumber; i>=0; i--){
        console.log(i);
    }
//I see the danger of the starting number being a negative but since I know the input range (10 only) from indexTest.js I figured this would be find. 
}
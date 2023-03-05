

confirmTwoDecimal();
calcul();

function confirmTwoDecimal(){
    
    let numberStart = document.getElementById("currentOne").value;
    let numberEnd = document.getElementById("currentTwo").value; 

    let variationAboslue = 0.00;
    let total = 0.00; 

    variationAboslue = parseFloat(numberEnd) - parseFloat(numberStart);

    total = document.getElementById("currentTotalTwoDecimal").innerHTML = ( (variationAboslue / numberStart) * 100 ).toFixed(2);

    
    console.log(variationAboslue);
    console.log(total)

}

function calcul(){

    let tradeStart = document.getElementById("tradeOne").value;
    let tradeEnd = document.getElementById("tradeTwo").value;

    let totalTrade = 0

    totalTrade = parseInt(tradeStart) * parseInt(tradeEnd);

    document.getElementById("tradeTotal").innerHTML = totalTrade;

    console.log(totalTrade);

}


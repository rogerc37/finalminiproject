var dice1 = 1;
var dice2 = 2;
var dice3 = 3;
var numberrolled = 1;
var total = 6;
var mean = 0;
var median = 0;
var mode = 1;
var doubles = 0;
var propdoubles = 0;
var triples = 0;
var proptriples = 0;
var cmean = 0;
var cmedian = 0;
var cmode = 0;
var totalrolls = 0;
const rolls = [];
function rolldice()
{
    //ROLLS THE DICE/DIE
    var trials = document.getElementById("trials").form.id;
    numberrolled = document.getElementById("numrolls").form.id;
    for(let i = 0; i<trials; i++)
    {
        if (numberrolled === 1)
        {
            dice1 = Math.floor(Math.random()*(7 - 1) + 1);
            totalrolls += 1;
            total = dice1;
            mean = getmean(numrolled, dice1, null, null);
            median = getmedian(numrolled, dice1, null, null);
            mode = getmode(numrolled, dice1, null, null);
        }
        else if (numberrolled === 2)
        {
            dice1 = Math.floor(Math.random()*(7 - 1) + 1);
            dice2 = Math.floor(Math.random()*(7 - 1) + 1);
            totalrolls += 2;
            total = dice1 + dice2;
            mean = getmean(numrolled, dice1, dice2, null);
            median = getmedian(numrolled, dice1, dice2, null);
            mode = getmode(numrolled, dice1, dice2, null);
            propdoubles = getdoubles(numberrolled, dice1, dice2, null);
        }
        else
        {
            dice1 = Math.floor(Math.random()*(7 - 1) + 1);
            dice2 = Math.floor(Math.random()*(7 - 1) + 1);
            dice3 = Math.floor(Math.random()*(7 - 1) + 1);
            totalrolls += 3;
            total = dice1 + dice2 + dice3;
            mean = getmean(numrolled, dice1, dice2, dice3);
            median = getmedian(numrolled, dice1, dice2, dice3);
            mode = getmode(numrolled, dice1, dice2, dice3);
            propdoubles = getdoubles(numberrolled, dice1, dice2, dice3);
            proptriples = gettriples(dice1, dice2, dice3);
        }
        cmean = getcmean();
        cmedian = getcmedian();
        cmode = getcmode();
        updatetable(numberrolled, total, mean, median, mode, propdoubles, proptriples, cmean, cmedian, cmode);
    }
}
function getmean(numrolled, r1, r2, r3)
{
    // gets the mean of current dice roll
    if(numrolled === 1){return r1;}
    else if(numrolled === 2){return (r1+r2)/2}
    else{return (r1+r2+r3)/3;}
}
function getmedian(numrolled, r1, r2, r3)
{
    // gets the median of current dice roll
    if(numrolled === 1){return r1;}
    else if(numrolled === 2){return (r1+r2)/2}
    else{return r2;}
}
function getmode(numrolled, r1, r2, r3)
{
    // gets the mode of current dice roll
    if(numrolled === 3)
    {
        if(((r1 === r2) && (r2 === r3))||((r1 === r2) || (r1 === r3))){return r1;}
        if(r2 === r3){return r2;}
    }
    else{return r1;}
}
function getdoubles(numrolled, r1, r2, r3)
{
    // gets the doubles over the total rolls
    if (numrolled === 2)
    {
        if(r1 === r2)
        {
            doubles += 1;
            return doubles/totalrolls;
        }
    }
    else
    {
        if((r1 === r2)||(r1 === r3)||(r2 === r3))
        {
            doubles += 1;
            return doubles/totalrolls;
        }
    }
    return doubles/totalrolls;
}
function gettriples(r1, r2, r3)
{
    // gets the triples over the total rolls
    if((r1 === r2) && (r2 === r3)){triples+=1;}
    return triples/totalrolls;
}
function getcmean()
{
    // gets cumulative mean
    var total = 0;
    for(let i = 0; i < rolls.length; i++)
    {
        total += rolls[i];
    }
    return total/rolls.length;
}
function getcmedian()
{
    // gets cumulative median
    rolls.sort();
    if(rolls.length % 2 === 1)
    {
        return rolls[Math.floor(rolls.length/2)];
    }else
    {
        return (rolls[rolls.length]+rolls[rolls.length/2-1])/2
    }
}
function getcmode()
{
    //gets cumulative mode
    return rolls.sort((a,b) => rolls.filter(v => v===a).length - rolls.filter(v => v===b).length).pop();
}
function updatetable(numrolled, total, mean, median, mode, doubles, triples, cmean, cmedian, cmode)
{
    //updates the table
}
while(totalrolls<=10){
    rolldice();
    totalrolls+=1;
}

